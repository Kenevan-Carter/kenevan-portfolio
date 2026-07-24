import './Projects.css';
import { useState } from "react";

import projectImage from "../../assets/images/smg.png";
import hiphop from "../../assets/images/songclassifier.png";
import comingsoon from "../../assets/images/comingsoon.png";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      title: 'Segmentation Model GUI',

      description:
        'A user-friendly interface designed to automate and streamline the process of training deep learning algorithms for brain segmentation using SynthSeg and nnUNet.',
      moreInfo:
        'This project was created to simplify the process of training medical image segmentation models in a research environment. I developed a PyQt-based interface that allows researchers to configure datasets, select models, submit Slurm jobs, and manage training workflows without manually editing scripts or command-line arguments.',
    

      image: projectImage,

      left: {
        text: 'Learn More',
        link: 'https://github.com/DCAN-Labs/Seg-Model-Creation-GUI',
      },

      right: {
        text: 'GitHub',
        link: 'https://github.com/DCAN-Labs/Seg-Model-Creation-GUI',
      },
    },

    {
      title: 'Hip-Hop Genre Classifier',

      description:
        'Built and compared four supervised machine learning models to classify Hip-Hop tracks using Spotify audio features, achieving 97.6% test accuracy with Random Forest.',
      moreInfo:
      'This project was created to simplify the process of training medical image segmentation models in a research environment. I developed a PyQt-based interface that allows researchers to configure datasets, select models, submit Slurm jobs, and manage training workflows without manually editing scripts or command-line arguments.',
    
      image: hiphop,

      left: {
        text: 'Learn More',
        link: '#',
      },

      right: {
        text: 'PDF',
        link: '/written_report.pdf',
      },
    },

    {
      title: 'Coming Soon...',
      description:
        'An up and coming project that will change the way the entire world thinks about everything. This project will not only \
        revolutionize everything but also everything and anything else.',
      moreInfo:
      'This project was created to simplify the process of training medical image segmentation models in a research environment. I developed a PyQt-based interface that allows researchers to configure datasets, select models, submit Slurm jobs, and manage training workflows without manually editing scripts or command-line arguments.',
      image: comingsoon,
      left: {
        text: 'Learn More',
        link: '#',
      },
      right: {
        text: 'GitHub',
        link: 'PASTE-GITHUB-LINK-HERE',
      },
    },
  ];
  return (
    <section id="projects" className="projects-section">
      <div className="section-inner">

        <p className="section-label">_ Projects _</p>
        <h2>Example work</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card"
            >
              <h3>{project.title}</h3>
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />

              <p>{project.description}</p>

              <div className="project-buttons">

              <a
                className="learn-more-button"
                href={project.left.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.left.text}
              </a>

                <a
                  className="github-button"
                  href={project.right.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.right.text}
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