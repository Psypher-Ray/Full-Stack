import "./App.css";

function App() {
  const services = [
    {
      name: "Gmail",
      description: "Check and manage your emails easily.",
      link: "https://mail.google.com",
      icon: "📧"
    },
    {
      name: "YouTube",
      description: "Explore videos and educational content.",
      link: "https://www.youtube.com",
      icon: "▶️"
    },
    {
      name: "Drive",
      description: "Store and access your files securely.",
      link: "https://drive.google.com",
      icon: "☁️"
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-2">
        Quick Access Panel
      </h2>

      <p className="text-center text-muted mb-5">
        Jump directly to your most-used services
      </p>

      <div className="row g-4 justify-content-center">
        {services.map((service, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className="card quick-card h-100 text-center p-4">
              <div className="icon-circle mx-auto">
                {service.icon}
              </div>

              <h5 className="fw-bold">{service.name}</h5>

              <p className="text-muted">
                {service.description}
              </p>

              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-auto"
              >
                Open {service.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
