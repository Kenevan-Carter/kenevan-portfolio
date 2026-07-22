import { useCallback, useEffect, useState } from "react";

const DEV_TOKEN_URL = "http://localhost:3001/api/apple-music-token";
const TOKEN_STORAGE_KEY = "kc-radio-music-user-token";

// Apple Music artwork URLs contain {w}x{h} placeholders that need filling in.
function formatArtwork(artwork, size = 300) {
  if (!artwork?.url) return null;
  return artwork.url.replace("{w}", size).replace("{h}", size);
}

function normalizeTopAlbum(heavyRotationItems) {
  const albumItem = heavyRotationItems.find((item) => item.type === "albums");
  if (!albumItem) return null;

  return {
    title: albumItem.attributes?.name ?? "Unknown album",
    artist: albumItem.attributes?.artistName ?? "Unknown artist",
    artwork: formatArtwork(albumItem.attributes?.artwork, 400),
    url: albumItem.attributes?.url ?? null,
  };
}

function normalizePlaylists(playlistItems) {
  return playlistItems.map((playlist) => ({
    id: playlist.id,
    name: playlist.attributes?.name ?? "Untitled playlist",
    artwork: formatArtwork(playlist.attributes?.artwork, 200),
    url: playlist.attributes?.url ?? null,
    trackCount: playlist.attributes?.trackCount ?? null,
  }));
}

/**
 * Connects to Apple Music via MusicKit JS, then fetches heavy-rotation
 * (used as "top album") and library playlist data.
 *
 * Requires the MusicKit JS script to be loaded on the page, e.g. in
 * index.html:
 *   <script src="https://js-cdn.music.apple.com/musickit/v3/musickit.js" async></script>
 *
 * Props:
 *   onData({ topAlbum, playlists }) — called whenever fresh data is fetched
 */
function AppleMusicConnect({ onData }) {
  const [status, setStatus] = useState("Not connected");
  const [connected, setConnected] = useState(false);

  const fetchLibraryData = useCallback(
    async (music) => {
      setStatus("Fetching your music...");

      const [heavyRotationRes, playlistsRes] = await Promise.all([
        music.api.music("/v1/me/history/heavy-rotation"),
        music.api.music("/v1/me/library/playlists", { limit: 10 }),
      ]);

      const topAlbum = normalizeTopAlbum(heavyRotationRes.data?.data || []);
      const playlists = normalizePlaylists(playlistsRes.data?.data || []);

      onData?.({ topAlbum, playlists });
      setStatus("Connected to Apple Music");
    },
    [onData]
  );

  const configureAndFetch = useCallback(
    async (developerToken, savedUserToken) => {
      await window.MusicKit.configure({
        developerToken,
        app: { name: "KC Radio", build: "1.0.0" },
      });

      const music = window.MusicKit.getInstance();

      if (!music.isAuthorized && savedUserToken) {
        music.musicUserToken = savedUserToken;
      }

      if (!music.isAuthorized) {
        setStatus("Opening Apple Music login...");
        const token = await music.authorize();
        localStorage.setItem(TOKEN_STORAGE_KEY, token);
      }

      setConnected(true);
      await fetchLibraryData(music);
    },
    [fetchLibraryData]
  );

  const connectAppleMusic = useCallback(async () => {
    try {
      setStatus("Getting developer token...");
      const res = await fetch(DEV_TOKEN_URL);
      const data = await res.json();
      await configureAndFetch(data.token, null);
    } catch (error) {
      console.error(error);
      setStatus("Apple Music connection failed");
    }
  }, [configureAndFetch]);

  // If we already have a saved user token, reconnect automatically
  // instead of making the user click the button every visit.
  useEffect(() => {
    const savedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (!savedToken || !window.MusicKit) return;

    let cancelled = false;

    (async () => {
      try {
        setStatus("Reconnecting to Apple Music...");
        const res = await fetch(DEV_TOKEN_URL);
        const data = await res.json();
        if (cancelled) return;
        await configureAndFetch(data.token, savedToken);
      } catch (error) {
        console.error(error);
        localStorage.removeItem(TOKEN_STORAGE_KEY);
        if (!cancelled) setStatus("Not connected");
      }
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="apple-music-connect">
      {!connected && (
        <button type="button" onClick={connectAppleMusic}>
          Connect Apple Music
        </button>
      )}
      <p>{status}</p>
    </div>
  );
}

export default AppleMusicConnect;