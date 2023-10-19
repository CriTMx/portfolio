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

import './components/css/Particle.css';
import './components/css/body.css';
import './components/css/Backdrop.css';
import './components/css/Jumbotron.css';
import './components/css/About.css';
import './components/css/Projects.css';
import './components/css/AnimCycleColor.css';
import './components/css/AnimFloating.css';

function App() {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  return (
    <div className="App">
      {/* <Backdrop /> */}
      <Header />
      <Jumbotron />
      <About />
      <Projects />
      {/* <Particle /> */}
    </div>
  );
}

export default App;
