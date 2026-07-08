import "./KCradio.css";

const recentTracks = [
  {
    title: "Purple Rain",
    artist: "Prince",
    album: "Purple Rain",
    time: "2 mins ago",
    cover: "https://upload.wikimedia.org/wikipedia/en/9/9c/Princepurplerain.jpg",
  },
  {
    title: "90210",
    artist: "Travis Scott",
    album: "Rodeo",
    time: "14 mins ago",
    cover: "https://upload.wikimedia.org/wikipedia/en/c/cd/Rodeoalbum.jpg",
  },
  {
    title: "Pink + White",
    artist: "Frank Ocean",
    album: "Blonde",
    time: "31 mins ago",
    cover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
  },
  {
    title: "Nights",
    artist: "Frank Ocean",
    album: "Blonde",
    time: "48 mins ago",
    cover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
  },
];

const topArtists = [
  { name: "Prince", plays: 124 },
  { name: "Frank Ocean", plays: 98 },
  { name: "Kendrick Lamar", plays: 86 },
];

function KCradio() {
  const currentTrack = recentTracks[0];
 
  return (
    <section className="kc-radio">
      <div className="radio-top">
        <div>
          <p className="radio-label">KENEVAN CARTER RADIO</p>
          <h2>Here's What I'm Currently Listening To </h2>
        </div>

        <div className="live-pill">
          <span></span>
          LIVE
        </div>
      </div>

      <div className="now-playing">
        <div className="album-wrap">
          <img
            src={currentTrack.cover}
            alt={`${currentTrack.album} album cover`}
            className="album-cover"
          />
        </div>

        <div className="track-info">
          <p className="small-title">Last Played</p>
          <h1>{currentTrack.title}</h1>
          <h3>{currentTrack.artist}</h3>
          <p className="album-name">{currentTrack.album}</p>

          <div className="fake-player">
            <div className="player-line">
              <div className="player-progress"></div>
            </div>

            <div className="player-times">
              <span>1:21</span>
              <span>4:08</span>
            </div>
          </div>
        </div>
      </div>

      <div className="radio-bottom">
        <div className="recent-section">
          <h3>Recent Plays</h3>

          <div className="track-list">
            {recentTracks.slice(1).map((track, index) => (
              <div className="track-row" key={index}>
                <img src={track.cover} alt={track.album} />

                <div className="track-text">
                  <h4>{track.title}</h4>
                  <p>{track.artist}</p>
                </div>

                <span>{track.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-section">
          <h3>Monthly Stats</h3>

          <div className="stat-card">
            <p>Top Artist</p>
            <h4>Prince</h4>
          </div>

          <div className="stat-card">
            <p>Songs Played</p>
            <h4>342</h4>
          </div>

          <div className="artist-list">
            {topArtists.map((artist, index) => (
              <div className="artist-stat" key={index}>
                <span>{artist.name}</span>
                <p>{artist.plays} plays</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default KCradio;