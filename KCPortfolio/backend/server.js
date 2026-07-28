import express from "express";
import cors from "cors";
import "dotenv/config";
import fs from "fs";
import jwt from "jsonwebtoken";

const app = express();
const PORT = 3001;

app.use(cors());

function generateAppleMusicToken() {
  const privateKey = fs.readFileSync(
    process.env.APPLE_PRIVATE_KEY_PATH,
    "utf8"
  );

  const now = Math.floor(Date.now() / 1000);

  return jwt.sign(
    {
      iss: process.env.APPLE_TEAM_ID,
      iat: now,
      exp: now + 60 * 60 * 24 * 30,
    },
    privateKey,
    {
      algorithm: "ES256",
      header: {
        alg: "ES256",
        kid: process.env.APPLE_KEY_ID,
      },
    }
  );
}

app.get("/api/apple-music-token", (req, res) => {
  try {
    const token = generateAppleMusicToken();

    res.json({ token });
  } catch (error) {
    console.error("Developer token failed:", error);

    res.status(500).json({
      error: "Developer token failed",
      details: error.message,
    });
  }
});

app.get("/api/kc-radio", async (req, res) => {
  try {
    const developerToken = generateAppleMusicToken();
    const userToken = process.env.APPLE_USER_TOKEN;

    if (!userToken) {
      return res.status(500).json({
        error: "Missing APPLE_USER_TOKEN in .env",
      });
    }

    const headers = {
      Authorization: `Bearer ${developerToken}`,
      "Music-User-Token": userToken,
    };

    /*
      Fetch:
      1. Recently played tracks
      2. Recently played albums
      3. Recently played playlists
    */
    const [
      tracksResponse,
      albumsResponse,
      playlistsResponse,
    ] = await Promise.all([
      fetch(
        "https://api.music.apple.com/v1/me/recent/played/tracks?limit=30",
        {
          headers,
        }
      ),

      fetch(
        "https://api.music.apple.com/v1/me/recent/played?types=albums,library-albums&limit=10",
        {
          headers,
        }
      ),

      fetch(
        "https://api.music.apple.com/v1/me/recent/played?types=playlists,library-playlists&limit=10",
        {
          headers,
        }
      ),
    ]);

    const [
      tracksData,
      albumsData,
      playlistsData,
    ] = await Promise.all([
      tracksResponse.json(),
      albumsResponse.json(),
      playlistsResponse.json(),
    ]);

    /*
      Check responses
    */

    if (!tracksResponse.ok) {
      console.error("Tracks API error:", tracksData);

      return res
        .status(tracksResponse.status)
        .json(tracksData);
    }

    if (!albumsResponse.ok) {
      console.error("Albums API error:", albumsData);

      return res
        .status(albumsResponse.status)
        .json(albumsData);
    }

    if (!playlistsResponse.ok) {
      console.error("Playlists API error:", playlistsData);

      return res
        .status(playlistsResponse.status)
        .json(playlistsData);
    }

    /*
      Recently Played Tracks
    */

    const tracks = tracksData.data.map((item) => ({
      id: item.id,

      title: item.attributes?.name,

      artist: item.attributes?.artistName,

      album: item.attributes?.albumName,

      artwork: item.attributes?.artwork?.url
        ?.replace("{w}", "300")
        ?.replace("{h}", "300"),

      url: item.attributes?.url,
    }));

    /*
      Recent Albums
    */

    const albums = albumsData.data
      .filter(
        (item) =>
          item.type === "albums" ||
          item.type === "library-albums"
      )
      .map((item) => ({
        id: item.id,

        title: item.attributes?.name,

        artist: item.attributes?.artistName,

        artwork: item.attributes?.artwork?.url
          ?.replace("{w}", "500")
          ?.replace("{h}", "500"),

        url: item.attributes?.url,

        type: item.type,
      }));

    /*
      Recent Playlists
    */

    const playlists = playlistsData.data
      .filter(
        (item) =>
          item.type === "playlists" ||
          item.type === "library-playlists"
      )
      .map((item) => ({
        id: item.id,

        name: item.attributes?.name,

        artwork: item.attributes?.artwork?.url
          ?.replace("{w}", "500")
          ?.replace("{h}", "500"),

        url: item.attributes?.url,

        type: item.type,
      }));

    /*
      Send everything to React
    */

    res.json({
      updatedAt: new Date().toISOString(),

      recentlyPlayed: tracks,

      recentAlbums: albums,

      recentPlaylists: playlists,
    });

  } catch (error) {
    console.error("KC Radio route failed:", error);

    res.status(500).json({
      error: "KC Radio route failed",
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});