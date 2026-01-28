import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

const Home = () => (
  <div className="page">
    <h2>Home Page</h2>
    <p>This is the Home page.</p>
  </div>
);

const About = () => (
  <div className="page">
    <h2>About Page</h2>
    <p>This page explains Link-based navigation.</p>
  </div>
);

const Contact = () => (
  <div className="page">
    <h2>Contact Page</h2>
    <p>Contact us at example@email.com</p>
  </div>
);

function App() {
  return (
    <>
      <div className="link-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
