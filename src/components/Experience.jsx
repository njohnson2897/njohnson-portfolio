const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Community Engagement Specialist",
      company: "Greater Chicago Food Depository",
      duration: "Jan 2022 - October 2023",
      description: [
        "Supported onboarding of new food market partners: grant and donor funding, contracting, and staff for pantry operations.",
        "Managed home delivery network delivering 300+ meals to residents with disabilities who could not travel to a pantry.",
        "Assessed service coverage gaps and operational constraints across partner organizations."
      ],
    },
    {
      id: 2,
      title: "College Access Coach",
      company: "College Possible",
      duration: "Jul 2020 - Jul 2021",
      description: [
        "Mentored 33 low-income, first-generation students through the college application process with academic and financial support.",
        "Provided test prep, essay editing, and scholarship application support.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="timeline">
          {experiences.map((experience) => (
            <div key={experience.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="job-title">{experience.title}</h3>
                  <div className="job-meta">
                    <span className="company">{experience.company}</span>
                    <span className="duration">{experience.duration}</span>
                  </div>
                </div>
                <ul className="job-description">
                  {experience.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
