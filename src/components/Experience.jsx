const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Community Engagement Specialist",
      company: "Greater Chicago Food Depository",
      duration: "Jan 2022 - October 2023",
      description: [
        "Supported the onboarding of new food market partners by assisting to secure grant and donor funding, general contracting and architectural services, and staff for pantry operations.",
        "Managed the Depository's home delivery network, overseeing the delivery of over 300 meals to local residents with disabilities who were unable to travel to a food pantry.",
        "Collaborated with the Obama Foundation in the launch of the Depository's Local Lunchbox summer pilot which provided thousands of nutritious and culturally relevant meals each day to students attending Chicago based summer youth programs.",
      ],
    },
    {
      id: 2,
      title: "College Access Coach",
      company: "College Possible",
      duration: "Jul 2020 - Jul 2021",
      description: [
        "Mentored a cohort of 33 low-income, first-generation college students, providing academic, financial, and social-emotional support as they first navigate the college application process.",
        "Provided wrap-around support, instructing students in test-taking strategies, editing college supplements and personal statements, and assisting students in applying for grants and scholarships.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey</p>
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
