import './Location.css';
import minnesotaImage from '../../assets/images/minnesota.png';

function Location() {
  return (
    <section id="location" className="location">
      <div className="location-card">
        <img className="location-background" src={minnesotaImage} alt="Minnesota map background" />
        <div className="location-pin-pill" aria-label="Located in Minneapolis">
          <span className="location-pin-dot"></span>
          <span>Minneapolis</span>
        </div>
      </div>
    </section>
  );
}

export default Location;