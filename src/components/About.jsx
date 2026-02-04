const About = () => {
  const skills = {
    frontend: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Material-UI",
      "Redux Toolkit",
      "React Router",
      "Canvas API",
    ],
    backend: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Sequelize",
      "JWT",
    ],
    tools: [
      "Axios",
      "Mapbox GL JS",
      "Google Books API",
      "Git",
      "GitHub",
    ],
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
            I’m a technologist with a background in public policy and frontline nonprofit operations. I’ve worked in food access and education across Chicago, and I build web applications informed by real users, operational constraints, and messy data.
            </p>
            <p>
            My work focuses on turning complex systems into usable tools — whether that’s mapping food access resources, designing data-driven interfaces, or supporting products that sit at the intersection of technology and operations.
            </p>
            <p>
            I’m especially interested in roles where systems thinking, technical fluency, and execution matter more than buzzwords.
            </p>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Libraries</h3>
              <div className="skill-tags">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
