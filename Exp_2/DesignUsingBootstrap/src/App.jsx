import "./App.css";

function App() {
  const cardsData = [
    {
      title: "Web Development",
      description:
        "Build modern websites using HTML, CSS, JavaScript, and frameworks.",
      link: "https://developer.mozilla.org"
    },
    {
      title: "Data Science",
      description:
        "Analyze data, build models, and visualize insights using Python.",
      link: "https://www.kaggle.com"
    },
    {
      title: "Artificial Intelligence",
      description:
        "Create intelligent systems using AI, ML, and Deep Learning.",
      link: "https://www.ibm.com/artificial-intelligence"
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-2">
        Card-Based Layout Using Bootstrap
      </h2>

      <p className="text-center text-muted mb-5">
        Responsive card-based UI using Bootstrap components
      </p>

      <div className="row g-4">
        {cardsData.map((card, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className="card card-custom h-100 text-center">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">
                  {card.title}
                </h5>

                <p className="card-text text-muted mt-2">
                  {card.description}
                </p>

                <div className="mt-auto">
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gradient"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
