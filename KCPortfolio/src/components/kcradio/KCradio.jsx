import './KCradio.css';
//import heroAvatar from '../../assets/images/hero-avatar.svg';

function KCradio() {
  return (
    <section id="home">
      <div className="radio-frame">
        <header className="radio-header">
          <div className="kr-monogram">KC</div>
          <h1 className="radio-title">Kenevan Carter Radio</h1>
          <div className="header-icons">● ● ●</div>
        </header>

        <div className="radio-inner">
          <div className="player-card current-song">
            <div className="cover-wrapper">
              {/* <img className="cover" src={heroAvatar} alt="cover" /> */}
            </div>
            <div className="song-meta">
              <div className="song-title">Example Song</div>
              <div className="song-artist">Artist Name</div>
              <div className="song-album">Album Title</div>
            </div>
          </div>

          <div className="player-card recently-played">
            <h3 style={{marginTop:0}}>Recently Played</h3>
            <ul style={{padding:0, margin:0, listStyle:'none'}}>
              <li style={{padding:'8px 0'}}>Song A — Artist</li>
              <li style={{padding:'8px 0'}}>Song B — Artist</li>
              <li style={{padding:'8px 0'}}>Song C — Artist</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KCradio;
