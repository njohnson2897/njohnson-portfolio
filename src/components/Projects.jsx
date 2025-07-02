const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Bookmarkd",
      description:
        "A social media platform for book lovers, inspired by Letterboxd. Users can create accounts, add books to their reading lists, post reviews, and form book clubs. Features Google Books API integration and MongoDB database.",
      image: "/assets/images/projects/bookmarkd-landing-page-screenshot.JPG",
      liveUrl: "https://bookmarkd-boln.onrender.com/",
      githubUrl: "https://github.com/njohnson2897/bookmarkd",
      technologies: ["React", "Node.js", "MongoDB", "Google Books API"],
      featured: true,
    },
    {
      id: 2,
      title: "Activ",
      description:
        "A workout tracking and social fitness application that allows users to track workouts, view other users' activities for inspiration, and share accomplishments with friends.",
      image: "/assets/images/projects/activ.PNG",
      liveUrl: "https://activ.onrender.com/",
      githubUrl: "https://github.com/njohnson2897/activ",
      technologies: ["Handlebars", "Express.js", "MySQL", "Sequelize"],
    },
    {
      id: 3,
      title: "Trivl",
      description:
        "A daily trivia game inspired by NYT Connections and Wordle. Features 10 daily questions with scoring, social sharing capabilities, and friend comparison features.",
      image: "/assets/images/projects/trivl.PNG",
      liveUrl: "https://njohnson2897.github.io/trivl-project/",
      githubUrl: "https://github.com/njohnson2897/trivl-project",
      technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
    },
    {
      id: 4,
      title: "JATE - Just Another Text Editor",
      description:
        "A Progressive Web App (PWA) text editor with automatic data persistence, service worker implementation, and offline functionality. Installable and fully functional locally.",
      image: "/assets/images/projects/jate.PNG",
      liveUrl: "https://text-editor-project.onrender.com/",
      githubUrl: "https://github.com/njohnson2897/text-editor",
      technologies: ["PWA", "Service Worker", "IndexedDB", "Webpack"],
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description:
        "A weather application providing current conditions and 5-day forecasts. Features city search, local storage for recent searches, and OpenWeather API integration.",
      image: "/assets/images/projects/weather-app.PNG",
      liveUrl: "https://njohnson2897.github.io/my-weather-dashboard/",
      githubUrl: "https://github.com/njohnson2897/my-weather-dashboard",
      technologies: [
        "JavaScript",
        "OpenWeather API",
        "Local Storage",
        "Bootstrap",
      ],
    },
    {
      id: 6,
      title: "Project Tracker",
      description:
        "A sleek task management application for students to track assignments, prioritize tasks, and manage deadlines effectively with a user-friendly interface.",
      image: "/assets/images/projects/project-tracker.PNG",
      liveUrl: "https://njohnson2897.github.io/my-project-tracker/",
      githubUrl: "https://github.com/njohnson2897/my-project-tracker",
      technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
