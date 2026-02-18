import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

const Home = lazy(() =>
  import("./Pages").then((module) => ({ default: module.Home }))
);

const About = lazy(() =>
  import("./Pages").then((module) => ({ default: module.About }))
);

const Contact = lazy(() =>
  import("./Pages").then((module) => ({ default: module.Contact }))
);

function App() {
  return (
    <div className="app-container">
      <h1>Route-Based Lazy Loading</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
