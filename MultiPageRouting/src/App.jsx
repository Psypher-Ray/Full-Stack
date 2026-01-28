import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

const Home = () => (
  <div className="card">
    <h2>🏠 Home</h2>
    <p>Welcome to the Multi-Page SPA using React Router.</p>
  </div>
);

const Services = () => (
  <div className="card">
    <h2>🛠 Services</h2>
    <p>We provide modern web development solutions.</p>
  </div>
);

const About = () => (
  <div className="card">
    <h2>ℹ About</h2>
    <p>This experiment demonstrates client-side routing.</p>
  </div>
);

const Contact = () => (
  <div className="card">
    <h2>📞 Contact</h2>
    <p>Email: support@multispasample.com</p>
  </div>
);

function App() {
  return (
    <>
      <header className="navbar">
        <h1>MultiPageSPA</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
