import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Scrollspy() {
  return (
    // <div 
    //     data-bs-spy="scroll"
    //     data-bs-target="#navbarSupportedContent"
    //     data-offset="0"
    //     data-bs-root-margin="0px 0px"
    //     data-bs-smooth-scroll="true"
    //     className="nav-scrollspy p-3"
    // >
    <div>
        <About />
        <Projects />
        <Skills />
    </div>
  )
}
