import { useState } from "react";

function AppleMusicConnect() {
  const [userToken, setUserToken] = useState("");
  const [status, setStatus] = useState("Not connected");

  async function connectAppleMusic() {
    try {
      setStatus("Getting developer token...");

      const res = await fetch("http://localhost:3001/api/apple-music-token");
      const data = await res.json();
      const developerToken = data.token;

      setStatus("Configuring MusicKit...");

      await window.MusicKit.configure({
        developerToken,
        app: {
          name: "KC Radio",
          build: "1.0.0",
        },
      });

      const music = window.MusicKit.getInstance();

      setStatus("Opening Apple Music login...");

      const token = await music.authorize();

      setUserToken(token);
      setStatus("Connected to Apple Music");

      console.log("Music User Token:", token);
    } catch (error) {
      console.error(error);
      setStatus("Apple Music connection failed");
    }
  }

  return (
    <div>
      <button onClick={connectAppleMusic}>
        Connect Apple Music
      </button>

      <p>{status}</p>

      {userToken && (
        <textarea
          value={userToken}
          readOnly
          rows={6}
          style={{ width: "100%" }}
        />
      )}
    </div>
  );
}

export default AppleMusicConnect;