import { useEffect, useState } from "react";
import "./KCradio.css";

function KCradio() {
  const [tracks, setTracks] = useState([]);
  const [updatedAt, setUpdatedAt] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getKCData() {
      try {
        const res = await fetch("http://localhost:3001/api/kc-radio");
        const data = await res.json();

        console.log("KC Radio data:", data);

        setTracks(data.recentlyPlayed || []);
        setUpdatedAt(data.updatedAt || "");
      } catch (error) {
        console.error("Failed to load KC Radio:", error);
      } finally {
        setLoading(false);
      }
    }

    getKCData();
  }, []);

  return (
    <section className="kc-radio">
      <div className="kc-radio-header">
        <div>
          <p className="eyebrow">KC RADIO</p>
          <h2>Recently Played</h2>
        </div>

        {updatedAt && (
          <p className="updated">
            Updated {new Date(updatedAt).toLocaleDateString()}
          </p>
        )}
      </div>

      {loading && <p>Loading music...</p>}

      {!loading && tracks.length === 0 && <p>No tracks found.</p>}

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
              <h3>{track.title}</h3>
              <p>{track.artist}</p>
              <span>{track.album}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default KCradio;