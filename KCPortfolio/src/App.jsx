import { useState } from "react";
import './App.css';

import Navbar from "./components/navbar/Navbar.jsx";
import KCradio from "./components/kcradio/KCradio.jsx";
import About from "./components/about/About.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Skills from "./components/skills/Skills.jsx";
import RainEffect from "./components/raineffect/RainEffect.jsx";

function App() {
  const [rainOn, setRainOn] = useState(true);

  return (
    <div className="App">
      {rainOn && <RainEffect />}

      <main className="page-content">
        <button 
          className="rain-toggle"
          onClick={() => setRainOn(!rainOn)}
        >
          {rainOn ? "Turn Rain Off" : "Turn Rain On"}
        </button>

        <Navbar />
        <KCradio />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;