import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="content">
        <h1>Theme Toggle SPA</h1>
        <button onClick={toggleTheme}>
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
}

export default App;
