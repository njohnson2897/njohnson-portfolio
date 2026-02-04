const About = () => {
  const coreTools = "React, JavaScript, Node.js, SQL, Mapbox, REST APIs";

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a technologist with a background in public policy and
              frontline nonprofit operations. I've worked in food access and
              education across Chicago, and I build web applications informed by
              real users, operational constraints, and messy data.
            </p>
            <p>
              My work focuses on turning complex systems into usable tools —
              whether that's mapping food access resources, designing
              data-driven interfaces, or supporting products that sit at the
              intersection of technology and operations.
            </p>
            <p>
              I'm especially interested in roles where systems thinking,
              technical fluency, and execution matter more than buzzwords.
            </p>
            <p className="about-tools">
              <strong>Core tools:</strong> {coreTools}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
