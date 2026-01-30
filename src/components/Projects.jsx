import { useState } from "react";

const Projects = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (projectId) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  const projects = [
    {
      id: 1,
      title: "Bookmarkd",
      description:
        "A comprehensive social media platform for book enthusiasts, inspired by Letterboxd. Enables users to create personalized accounts, curate reading lists, publish detailed reviews, and establish book clubs. Features seamless Google Books API integration for extensive catalog access and a robust MongoDB database for efficient data management.",
      image: "/assets/images/projects/bookmarkd.PNG",
      liveUrl: "https://bookmarkd-c936.onrender.com",
      githubUrl: "https://github.com/njohnson2897/bookmarkd",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Google Books API",
      ],
    },
    {
      id: 2,
      title: "JuneGames",
      description:
        "A retro-arcade style repository featuring a diverse collection of interactive games developed throughout my web development learning journey. The collection ranges from classic arcade implementations like Tetris to creative tools such as a digital canvas for artists to draw and paint. Each game demonstrates progressive skill development and showcases various web technologies in action.",
      image: "/assets/images/projects/junegames.PNG",
      liveUrl: "https://junegames.onrender.com",
      githubUrl: "https://github.com/njohnson2897/JuneGames",
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Canvas API"],
    },
    {
      id: 3,
      title: "Trivl",
      description:
        "An interactive daily trivia platform inspired by NYT Connections and Wordle, featuring 10 daily questions with comprehensive scoring mechanics. Includes social sharing capabilities, friend comparison features, and detailed performance tracking. Built with a full-stack architecture supporting user authentication and real-time leaderboards.",
      image: "/assets/images/projects/trivl.PNG",
      liveUrl: "https://trivl.onrender.com/",
      githubUrl: "https://github.com/njohnson2897/Trivl",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Sequelize",
        "JWT",
      ],
    },
    {
      id: 4,
      title: "Chicago Community Compass",
      description:
        "A comprehensive mapping platform designed to connect Chicago residents with essential social services. Provides an interactive map interface enabling users to locate food banks, shelters, healthcare services, and other critical community resources in their area. Features real-time availability updates, detailed service information, and intuitive filtering capabilities to streamline access to vital resources.",
      image: "/assets/images/projects/chicago-community-compass.PNG",
      liveUrl: "https://chicago-community-compass.onrender.com/",
      githubUrl: "https://github.com/njohnson2897/chicago-community-compass",
      technologies: [
        "React",
        "Material-UI",
        "Mapbox GL JS",
        "Redux Toolkit",
        "React Router",
        "Axios",
      ],
    },
    {
      id: 5,
      title: "Family Website Template",
      description:
        "A private family website template for sharing photos, updates, family history, and more. Includes a timeline feed with comments and reactions, photo gallery with tagging, family events calendar, directory with birthdays, family tree, documents storage, and invite-only registration. Built as a reusable starting point for any family to deploy their own site.",
      image: "/assets/images/projects/family-website-template.PNG",
      liveUrl: "https://family-website-template.onrender.com",
      githubUrl: "https://github.com/njohnson2897/family-website-template",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "SQLite",
        "JWT",
        "Multer",
      ],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {imageErrors[project.id] ? (
                  <div className="project-image-placeholder">
                    <span className="project-image-placeholder-text">
                      Add screenshot: assets/images/projects/
                      {project.image.split("/").pop()}
                    </span>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={() => handleImageError(project.id)}
                  />
                )}
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
