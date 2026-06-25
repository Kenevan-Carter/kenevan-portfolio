import './App.css';
import Navbar from "./components/navbar/Navbar.jsx";
import KCradio from "./components/kcradio/KCradio.jsx";
import About from "./components/about/About.jsx";
import Projects from "./components/projects/Projects.jsx";
import Contact from "./components/contact/Contact.jsx";
import Skills from "./components/skills/Skills.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <KCradio />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
