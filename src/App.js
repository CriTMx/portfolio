import './App.css';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Particle from './components/Particle';
import Backdrop from './components/Backdrop';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

import './components/css/Particle.css';
import './components/css/body.css';
import './components/css/Logo.css';
import './components/css/Backdrop.css';
import './components/css/Jumbotron.css';
import './components/css/About.css';
import './components/css/Projects.css';
import './components/css/Skills.css';
import './components/css/AnimCycleColor.css';
import './components/css/AnimFloating.css';

function App() {
  return (
    <div className="App">
      {/* <Backdrop /> */}
      <Header />
      <Jumbotron />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
