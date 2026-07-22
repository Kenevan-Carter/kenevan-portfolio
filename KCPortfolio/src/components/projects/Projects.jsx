import './Projects.css';
import projectImage from "../../assets/images/smg.png";
import hiphop from "../../assets/images/songclassifier.png";

function Projects() {
  const projects = [
    {
      title: 'Segmentation Model GUI',
      description: 'A responsive React portfolio section with clean typography and interactive buttons.',
    },
    {
      title: 'Hip-Hop Genre Classifier',
      description: 'A design translation workflow that preserves spacing, colors, and layout fidelity.',
    },
    {
      title: 'UI showcase',
      description: 'Component-driven sections with headings, cards, and simple visual hierarchy.',
    },
  ];

  const images = [
    {
      title: 'Segmentation Model GUI',
      image: projectImage,
    },
    {
      title: 'Hip-Hop Genre Classifier',
      image: hiphop,
    },
    {
      title: 'UI showcase',
      image: projectImage,
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

              <img
                className="project-image"
                src={images.find(
                  (img) => img.title === project.title
                )?.image}
                alt={project.title}
              />
              <p>{project.description}</p>
              <div className="project-buttons">
              <button className="learn-more-button" href="#">
                Learn More
              </button>
              <a className="github-button" href="#">
                GitHub
              </a>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;