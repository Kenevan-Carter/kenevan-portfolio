import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Portfolio landing page',
      description: 'A responsive React portfolio section with clean typography and interactive buttons.',
    },
    {
      title: 'Figma-to-React build',
      description: 'A design translation workflow that preserves spacing, colors, and layout fidelity.',
    },
    {
      title: 'UI showcase',
      description: 'Component-driven sections with headings, cards, and simple visual hierarchy.',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-inner">
        <p className="section-label">Projects</p>
        <h2>Example work</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
