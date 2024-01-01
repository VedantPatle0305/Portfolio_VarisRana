import React from "react";
import Navbar from "./Components/NAVBAR/Navbar.js";
import Hero from "./Components/Hero/Hero.js";
import About from "./Components/About/About.js";
import Experience from "./Components/Experience/Experience.js";
import Project from "./Components/Projects/Project.js";
import Contact from "./Components/Contact/Contact.js";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
