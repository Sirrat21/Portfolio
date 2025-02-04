import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from  "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certificate from "./components/certificate"; 

import React from "react";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About/>
      <Portfolio/>
      <Skills/>
      <Certificate />
      <Contact/>
      
      <SocialLinks/>
    </div>
  );
}

export default App;
