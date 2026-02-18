import React from "react";

/* ========= Loader ========= */
export const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

/* ========= Pages ========= */

export const Home = () => (
  <>
    <h2>Home</h2>
    <p>Welcome to the minimal lazy loading demo.</p>
  </>
);

export const About = () => (
  <>
    <h2>About</h2>
    <p>This page is loaded only when you visit it.</p>
  </>
);

export const Contact = () => (
  <>
    <h2>Contact</h2>
    <p>This component is also lazy loaded.</p>
  </>
);
