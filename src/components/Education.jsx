const Education = () => {
  const education = [
    {
      id: 1,
      degree: "BA - Public Policy",
      institution: "University of Chicago",
      year: "2016-2020",
      details: {
        gpa: "GPA: 3.84/4.00",
        honors: "Magna Cum Laude",
      },
      icon: "fas fa-graduation-cap",
    },
    {
      id: 2,
      degree: "Full Stack Web Development",
      institution: "Northwestern University",
      year: "2024",
      details: {
        type: "Certificate Program",
      },
      icon: "fas fa-code",
    },
  ];

  return (
    <section className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background</p>
        </div>
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-icon">
                <i className={edu.icon}></i>
              </div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p className="education-details">
                  <span className="year">{edu.year}</span>
                  {edu.details.gpa && (
                    <span className="gpa">{edu.details.gpa}</span>
                  )}
                  {edu.details.honors && (
                    <span className="honors">{edu.details.honors}</span>
                  )}
                  {edu.details.type && (
                    <span className="type">{edu.details.type}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
