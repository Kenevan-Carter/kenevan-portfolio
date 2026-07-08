import './About.css';
import princeLogo from '../../assets/images/prince.png';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-inner">
        <div className="about-logo about-logo-top-right" aria-hidden="true">
          <img src={princeLogo} alt="Prince logo placeholder" />
        </div>

        <div className="about-content">
          <p className="section-label">  _About _ Me_</p>
          <h2>Hello!</h2>
          <p className="about-intro">
            I am a senior Computer Science major with a specification in networking at the University of Minnesota while also pursuing a minor in Physics. 
            I build clean, organized products with creative technical solutions; prioritizing software that feels intentional and has personality.
            Outside of software, I have worked with the Minnesota Timberwolves and Lynx as a Team Attendant, studied abroad in Madrid, am a part-time food reviewer, and currently collect old-school Hip-Hop CDs and cassettes.

          </p>

          <div className="about-grid">
            <article className="about-card">
              <h3>Experience In...</h3>
              <ul>
                <li>Front-end development with React and modern UI patterns</li>
                <li>Machine Learning and data analysis, using Python, scikit-learn, Pandas, and NumPy</li>
                <li>Building technical research workflow tools and simplifying complex processes</li>
                <li>Creating projects involving C++, Java/JSX, HTML/CSS, </li>
              </ul>
            </article>

            <article className="about-card personality-card">
              <h3>I Spend Most of My Time...</h3>
              <ul>
                <li>Making playlists on Apple Music</li>
                <li>Window shopping</li>
                <li>Watching basketball/soccer/football</li>
                <li>Playing chess while I watch basketball/ soccer/football</li>
                <li>Working out and staying active</li>
                <li>Planning </li>
              </ul>
            </article>
          </div>

          <div className="about-link-wrapper">
            <a className="button button-primary about-link" href="/kenevan_carter_resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </div>
        </div>

        <div className="about-logo about-logo-bottom-left" aria-hidden="true">
          <img src={princeLogo} alt="Prince logo placeholder" />
        </div>
      </div>
    </section>
  );
}

export default About;
