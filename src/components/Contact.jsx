const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: "fas fa-map-marker-alt",
      title: "Location",
      content: "Chicago, IL, USA",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      title: "Email",
      content: "njohnson2897@gmail.com",
      link: "mailto:njohnson2897@gmail.com",
    },
    {
      id: 3,
      icon: "fab fa-github",
      title: "GitHub",
      content: "github.com/njohnson2897",
      link: "https://github.com/njohnson2897",
    },
    {
      id: 4,
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      content: "linkedin.com/in/nate-s-johnson",
      link: "https://linkedin.com/in/nate-s-johnson",
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((item) => (
              <div key={item.id} className="contact-item">
                <div className="contact-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="contact-details">
                  <h4>{item.title}</h4>
                  <p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.content}
                      </a>
                    ) : (
                      item.content
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
