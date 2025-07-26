import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import React from "react";
function App() {
  return (
    <div className="App">
      <h1>Student Management Portal</h1>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
