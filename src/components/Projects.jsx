import { useState } from "react";

const Projects = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (projectId) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

  const projects = [
    {
      id: 1,
      title: "Chicago Community Compass",
      subtitle: "Food Access Vertical",
      description:
        "A data-driven civic web application focused on food access in Chicago. Enables users to locate food pantries and community-run distribution sites using geospatial search and realistic service filters. Built as a scoped MVP informed by firsthand experience in food access and community engagement work.",
      image: "/assets/images/projects/chicago-community-compass-fa.PNG",
      liveUrl: "https://chicago-community-compass-fa.onrender.com/",
      githubUrl: "https://github.com/njohnson2897/chicago-community-compass-fa",
      technologies: ["React", "Mapbox GL JS", "Redux Toolkit", "Material-UI"],
      featured: true,
    },
    {
      id: 2,
      title: "Bookmarkd",
      description:
        "Social platform for book lovers: reading lists, reviews, and book clubs. Google Books API integration and MongoDB for catalog and data.",
      image: "/assets/images/projects/bookmarkd.PNG",
      liveUrl: "https://bookmarkd-c936.onrender.com",
      githubUrl: "https://github.com/njohnson2897/bookmarkd",
      technologies: ["React", "Node.js", "MongoDB", "Google Books API"],
      featured: false,
    },
    {
      id: 3,
      title: "Trivl",
      description:
        "Daily trivia platform with 10 questions, scoring, and social sharing. Full-stack app with auth and leaderboards.",
      image: "/assets/images/projects/trivl.PNG",
      liveUrl: "https://trivl.onrender.com/",
      githubUrl: "https://github.com/njohnson2897/Trivl",
      technologies: ["React", "Node.js", "PostgreSQL", "JWT"],
      featured: false,
    },
    {
      id: 4,
      title: "Family Website Template",
      description:
        "Private family site template: timeline feed, photo gallery, events calendar, directory, and invite-only registration.",
      image: "/assets/images/projects/family-website-template.PNG",
      liveUrl: "https://family-website-template.onrender.com",
      githubUrl: "https://github.com/njohnson2897/family-website-template",
      technologies: ["React", "Node.js", "SQLite", "JWT"],
      featured: false,
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
            <div
              key={project.id}
              className={`project-card ${
                project.featured ? "project-card-featured" : ""
              }`}
            >
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
                {project.featured && (
                  <span className="project-badge">Featured</span>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">
                  {project.title}
                  {project.subtitle && (
                    <span className="project-subtitle">
                      {" "}
                      — {project.subtitle}
                    </span>
                  )}
                </h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.slice(0, 5).map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    Code
                  </a>
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
