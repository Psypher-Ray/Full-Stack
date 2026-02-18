import React, { Suspense, lazy } from "react";
import "./App.css";
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <Suspense fallback={<div className="loader">Loading Dashboard...</div>}>
      <Dashboard />
    </Suspense>
  );
}

export default App;
