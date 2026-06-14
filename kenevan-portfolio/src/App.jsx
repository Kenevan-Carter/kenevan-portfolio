import Navbar from "./components/navbar";
import KCradio from "./components/kcradio";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Skills from "./components/skills";

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
