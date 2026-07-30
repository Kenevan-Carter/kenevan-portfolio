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
      },

      right: {
        text: 'GitHub',
        link: 'https://github.com/DCAN-Labs/Seg-Model-Creation-GUI',
      },
  problem:
    'Researchers previously had to manually configure command-line arguments, model settings, and Slurm jobs across multiple tools in order to train and test the segmentation model.',

  role:
    'In collaboration with another intern, I designed and developed the PyQt5 interface and integrated the GUI with the backend training workflow. I also added support for reusable preset configurations to save time on re-runs and implemented scripts for job monitoring and management.',

  approach:
    'The application prompts the user through the GUI to input the necessary training settings such as paths to the dataset and their custom model parameters. It then launches model training jobs on the HPC cluster using Slurm.',

  skills: [
    'Python',
    'PyQt5',
    'Slurm',
    'Bash',
    'HPC',
    'nnU-Net',
    'SynthSeg',
    'Workflow Automation'
  ],
  impact:
    'Allowed researchers to streamline the training of segmentation models, decreasing total time and effort spent by a significant margin.',

    },

    {

      title: 'Hip-Hop Genre Classifier',

      description:
        'Built and compared four supervised machine learning models to classify Hip-Hop tracks using Spotify audio features.',

      moreInfo:
        'This project explored whether quantitative Spotify audio features could be used to distinguish Hip-Hop songs from other genres. I trained and compared Random Forest, K-Nearest Neighbors, Logistic Regression, and Gaussian Naive Bayes models, with Random Forest achieving the best overall performance.',

      image: hiphop,

      left: {
        text: 'Learn More',
      },

      right: {
        text: 'PDF',
        link: '/written_report.pdf',
      },

    problem:
      'Ambiguity in genre classification can make it difficult for music recommendation systems to objectively categorize songs. This raises the question of whether musical preferences are driven more by genre labels or by measurable acoustic similarities between songs.',
    
    role:
      'I implemented four supervised machine learning models, performed hyperparameter tuning, and evaluated their performance using metrics such as accuracy, precision, recall, F1 score, and AUC.',
    
    approach:
      'Using a public dataset containing Spotify audio features, I cleaned and prepared the data, selected relevant acoustic features such as danceability, energy, speechiness, and valence, and trained each model to classify songs as either Hip-Hop or non-Hip-Hop.',
    skills: [
        'Python',
        'scikit-learn',
        'Pandas',
        'Numpy',
        'Machine Learning',
        'Data Preprocessing'
    ],

      challenges:
        'One of the largest challenges was coordinating multiple external research tools while keeping the user experience simple and providing useful job monitoring and error handling.',

      impact:
        'Gained experience using scikit-learn as well as learning the basics of model configuration techniques, hyperparameter tuning, and performance evaluation.',

    },

    {
      title: 'Coming Soon...',

      description:
        'An up and coming project that will change the way the entire world thinks about everything. This project will not only revolutionize everything but also everything and anything else.',

      moreInfo:
        'More information about this project will be available soon.',

      image: comingsoon,

      left: {
        text: 'Learn More',
      },

      right: {
        text: 'GitHub',
        link: 'PASTE-GITHUB-LINK-HERE',
      },
      description:
        'A user-friendly interface designed to automate and streamline the process of training deep learning algorithms for brain segmentation using SynthSeg and nnUNet.',

      overview:
        'A desktop application designed to simplify the configuration and training of medical image segmentation models in a research environment.',

      problem:
        'Researchers previously had to manually configure datasets, command-line arguments, model settings, and Slurm jobs across multiple tools.',

      role:
        'In collaboration with another intern, we designed and developed the PyQt5 interface and connected the GUI to the backend training. Added functionality for Preset configurations and implimented scripts for job monitoring.',

      approach:
        'The application gathers user configuration through the GUI, generates the necessary training settings, and launches model training jobs on the HPC cluster using Slurm.',

      skills: [
        'Python',
        'PyQt5',
        'Slurm',
        'Bash',
        'HPC',
        'nnU-Net',
        'SynthSeg',
        'Workflow Automation'
      ],

      challenges:
        'One of the largest challenges was coordinating multiple external research tools while keeping the user experience simple and providing useful job monitoring and error handling.',

      impact:
        'Reduced a multi-step model training workflow into a centralized interface and made segmentation training more accessible to researchers.',

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

                <button
                  className="learn-more-button"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.left.text}
                </button>

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

        {selectedProject && (
          <div className="modal-overlay">

            <div className="project-modal">

              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <h2>{selectedProject.title}</h2>

              <div className="modal-section">
                <h3>The Problem</h3>
                <p>{selectedProject.problem}</p>
              </div>

              <div className="modal-section">
                <h3>My Role</h3>
                <p>{selectedProject.role}</p>
              </div>

              <div className="modal-section">
                <h3>Technical Approach</h3>
                <p>{selectedProject.approach}</p>
              </div>
              <div className="modal-section">
                <h3>Impact</h3>
                <p>{selectedProject.impact}</p>
              </div>

              <div className="modal-section">
                <h3>Skills & Technologies</h3>

                <div className="skills-list">
                  {selectedProject.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            

            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;