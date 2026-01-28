import "./App.css";

function App() {
  return (
    <>
      {/* NAVIGATION BAR */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            MyApp
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="container hero-section">
        <h1 className="mb-3">
          Responsive Navigation Bar
        </h1>

        <p className="mb-4">
          This experiment demonstrates a responsive navigation bar created
          using a UI component library. The menu adapts smoothly across
          desktop, tablet, and mobile devices.
        </p>
      </div>
    </>
  );
}

export default App;
