// src/App.js
import React from "react";
import CohortDetails from "./CohortDetails";
import "./App.css";

function App() {
  const cohorts = [
    { name: "Cohort A", status: "ongoing" },
    { name: "Cohort B", status: "completed" },
  ];

  return (
    <div className="header">
      <h1>Cohort Dashboard</h1>
      <div className="App">
        {cohorts.map((cohort, index) => (
          <CohortDetails key={index} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
