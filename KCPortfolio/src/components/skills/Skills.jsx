import './Skills.css';

function Skills() {
  const skills = ['React', 'CSS', 'Responsive design', 'Figma translation', 'Component UI'];

  return (
    <section id="skills" className="skills-section">
      <div className="section-inner">
        <p className="section-label">Skills</p>
        <h2>What I use</h2>
        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
