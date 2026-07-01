import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-inner">
        <p className="section-label"> </p>
        <h2>About</h2>
        <p className="about-intro">
          Aspiring Software engineer with project focus in front end development. 
        </p>
        <div className="about-grid">
          <div className="about-link-wrapper">
            <a className="button button-primary about-link" href="/kenevan_carter_resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
