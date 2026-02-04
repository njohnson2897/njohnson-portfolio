const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Nate Johnson</span>
            </h1>
            <h2 className="hero-subtitle">Technologist building data-driven web applications for complex systems</h2>
            <p className="hero-description">
            I design and build practical web applications informed by real-world constraints. My background spans public policy, nonprofit operations, and hands-on development — with a focus on clarity, usability, and systems thinking.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/assets/images/portfolio-headshot.png"
              alt="Nate Johnson"
              className="profile-img"
            />
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
