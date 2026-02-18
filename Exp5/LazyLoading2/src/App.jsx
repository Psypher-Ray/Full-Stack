import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import "./App.css";

/* -------- Lazy Imports -------- */

const Home = lazy(() =>
  import("./Pages").then((module) => ({ default: module.Home }))
);

const About = lazy(() =>
  import("./Pages").then((module) => ({ default: module.About }))
);

const Contact = lazy(() =>
  import("./Pages").then((module) => ({ default: module.Contact }))
);

const Loader = lazy(() =>
  import("./Pages").then((module) => ({ default: module.Loader }))
);

/* -------- Route Wrapper -------- */

function AnimatedRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // loader visible for 800ms

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="card">
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      )}
    </div>
  );
}

/* -------- Main App -------- */

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="title">Route-Based Lazy Loading</h1>

        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
