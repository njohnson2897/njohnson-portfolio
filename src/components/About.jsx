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
              I am a software developer based in Chicago, Illinois, with a
              passion for building full-stack web applications and creating
              engaging user experiences. My professional background is primarily
              in the non-profit sector, where I've learned the importance of
              creating technology that serves real people and communities.
            </p>
            <p>
              My journey began at College Possible, where I supported
              first-generation college students in Chicago Public Schools. I
              then spent two years at the Greater Chicago Food Depository,
              supporting the Community Engagement Team in their mission to end
              hunger in Chicago. These experiences have shaped my approach to
              software development - I believe technology should be accessible,
              impactful, and meaningful.
            </p>
            <p>
              I'm currently seeking opportunities to return to the nonprofit
              sector, where I can leverage my software development skills to
              make a difference in Chicago and beyond.
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
