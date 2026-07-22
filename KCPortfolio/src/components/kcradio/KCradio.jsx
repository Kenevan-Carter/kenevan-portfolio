import { useEffect, useState } from "react";
import "./KCradio.css";


const API_URL = "http://localhost:3001/api/kc-radio";

function useKCRadioData() {
  const [data, setData] = useState({
    recentlyPlayed: [],
    topAlbum: null,
    playlists: [],
    updatedAt: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function getKCData() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const json = await res.json();

        if (!cancelled) {
          setData({
            recentlyPlayed: json.recentlyPlayed || [],
            topAlbum: json.topAlbum || null,
            playlists: json.playlists || [],
            updatedAt: json.updatedAt || "",
          });
        }
      } catch (err) {
        console.error("Failed to load KC Radio:", err);
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    getKCData();
    return () => {
      cancelled = true;
    };
  }, []);

  return { ...data, loading, error };
}

function RecentlyPlayedBox({ tracks, loading }) {
  return (
    <div className="kc-box">
      <h3>Recently Played</h3>
      <div className="kc-box-body">
        {loading && <p className="kc-empty">Loading tracks…</p>}
        {!loading && tracks.length === 0 && (
          <p className="kc-empty">No tracks found.</p>
        )}
        <div className="track-list">
          {tracks.map((track) => (
            <a
              key={track.id}
              className="track-card"
              href={track.url}
              target="_blank"
              rel="noreferrer"
            >
              {track.artwork && (
                <img src={track.artwork} alt={`${track.album} cover`} />
              )}
              <div>
                <h4>{track.title}</h4>
                <p>{track.artist}</p>
                <span>{track.album}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function TopAlbumBox({ album, loading }) {
  return (
    <div className="kc-box">
      <h3>Top Album This Month</h3>
      <div className="kc-box-body">
        {loading && <p className="kc-empty">Loading album…</p>}
        {!loading && !album && <p className="kc-empty">No album found.</p>}
        {album && (
          <a
            className="top-album-card"
            href={album.url}
            target="_blank"
            rel="noreferrer"
          >
            {album.artwork && (
              <img src={album.artwork} alt={`${album.title} cover`} />
            )}
            <div>
              <h4>{album.title}</h4>
              <p>{album.artist}</p>
              {album.playCount && (
                <span>{album.playCount} plays this month</span>
              )}
            </div>
          </a>
        )}
      </div>
    </div>
  );
}

function PlaylistsBox({ playlists, loading }) {
  return (
    <div className="kc-box">
      <h3>Playlists</h3>
      <div className="kc-box-body">
        {loading && <p className="kc-empty">Loading playlists…</p>}
        {!loading && playlists.length === 0 && (
          <p className="kc-empty">No playlists found.</p>
        )}
        <div className="playlist-list">
          {playlists.map((playlist) => (
            <a
              key={playlist.id}
              className="playlist-card"
              href={playlist.url}
              target="_blank"
              rel="noreferrer"
            >
              {playlist.artwork && (
                <img src={playlist.artwork} alt={`${playlist.name} cover`} />
              )}
              <div>
                <h4>{playlist.name}</h4>
                {playlist.trackCount && (
                  <span>{playlist.trackCount} tracks</span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function KCradio() {
  const { recentlyPlayed, topAlbum, playlists, updatedAt, loading } =
    useKCRadioData();
  const [musicData, setMusicData] = useState(null);

  const displayTopAlbum = musicData?.topAlbum ?? topAlbum;
  const displayPlaylists = musicData?.playlists ?? playlists;

  return (
    <div className="kc-radio-wrap">
      <section className="kc-radio-frame">
        <div className="kc-radio-header">
          <div>
            <p className="eyebrow">KC RADIO</p>
            <h2>My Apple Music</h2>
          </div>

          {updatedAt && (
            <p className="updated">
              Updated {new Date(updatedAt).toLocaleDateString()}
            </p>
          )}
        </div>
        <div className="kc-radio-grid">
          <RecentlyPlayedBox tracks={recentlyPlayed} loading={loading} />
          <TopAlbumBox album={displayTopAlbum} loading={loading && !musicData} />
          <PlaylistsBox playlists={displayPlaylists} loading={loading && !musicData} />
        </div>
      </section>
    </div>
  );
}

export default KCradio;