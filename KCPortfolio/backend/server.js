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

    const response = await fetch(
      "https://api.music.apple.com/v1/me/recent/played/tracks",
      {
        headers: {
          Authorization: `Bearer ${developerToken}`,
          "Music-User-Token": userToken,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Apple Music API error:", data);
      return res.status(response.status).json(data);
    }

    const tracks = data.data.map((item) => ({
      id: item.id,
      title: item.attributes?.name,
      artist: item.attributes?.artistName,
      album: item.attributes?.albumName,
      artwork: item.attributes?.artwork?.url
        ?.replace("{w}", "300")
        ?.replace("{h}", "300"),
      url: item.attributes?.url,
    }));

    res.json({
      updatedAt: new Date().toISOString(),
      recentlyPlayed: tracks,
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