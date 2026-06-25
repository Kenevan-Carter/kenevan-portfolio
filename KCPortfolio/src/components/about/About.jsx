import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-inner">
        <p className="section-label">About</p>
        <h2>Design-first React development.</h2>
        <p>
          I build user-focused interfaces by translating Figma layouts into React components.
          My work is centered on readable code, responsive design, and a polished visual finish.
        </p>
        <div className="about-grid">
          <div>
            <h3>What I do</h3>
            <p>
              I create portfolio websites, landing pages, and small product UI pieces with
              React and CSS. Every layout starts with structure, then grows into clean styling.
            </p>
          </div>
          <div>
            <h3>How I work</h3>
            <p>
              I use component-based design, semantic HTML, and clear spacing to make interfaces
              easy to maintain and expand over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
