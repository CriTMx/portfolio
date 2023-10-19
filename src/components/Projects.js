import { useCallback } from "react";
import Particles from "react-particles";
import About from "./About";
import { loadFull } from "tsparticles";

import HKLordShade from './media/Lord_of_Shades.png';
import Particle from "./Particle";

function Projects()
{
    const particlesInit = About.particlesInit;
    const particlesLoaded = About.particlesLoaded;

    return (
        <div className="projects-tab container mb-3">
            <div className="row">
                <div className="col-md-3 particle-container d-md-flex d-none" id="HKShadeCol">
                    <img src={HKLordShade} width='200px'/>
                    <Particles id="tsparticles"
                        // init={particlesInit}
                        // loaded={particlesLoaded}
                        options={
                            {
                                // background: {
                                //     // color: {
                                //     //     value: "#0d47a1",
                                //     // },
                                    
                                // },
                                fullScreen:
                                {
                                    enable: false,
                                },
                                fpsLimit: 120,
                                interactivity: {
                                    events: {
                                        // onClick: {
                                        //     enable: true,
                                        //     mode: "push",
                                        // },
                                        // onHover: {
                                        //     enable: true,
                                        //     mode: "repulse",
                                        // },
                                        // resize: true,
                                    },
                                    modes: {
                                        push: {
                                            quantity: 4,
                                        },
                                        repulse: {
                                            distance: 200,
                                            duration: 0.4,
                                        },
                                    },
                                },
                                particles: {
                                    color: {
                                        value: "#000000",
                                    },
                                    links: {
                                        color: "#ffffff",
                                        distance: 0,
                                        enable: false,
                                        opacity: 0.5,
                                        width: 1,
                                    },
                                    move: {
                                        direction: "outside",
                                        enable: true,
                                        outModes: {
                                            default: "out",
                                        },
                                        random: false,
                                        speed: 6,
                                        straight: true,
                                    },
                                    number: {
                                        density: {
                                            enable: true,
                                            area: 50,
                                        },
                                        value: 80,
                                    },
                                    opacity: {
                                        value: {min: 0.1, max: 1},
                                    },
                                    shape: {
                                        type: "circle",
                                    },
                                    size: {
                                        value: { min: 1, max: 5 },
                                    },
                                },
                                detectRetina: true,
                            }
                        }
                    />
                </div>
                <div className="col-md-9 float-end">
                    <a id="projects">
                        <h1 className="projects-h1 text-end">Projects</h1>
                        <p className="projects-text text-end mb-3">
                            Projects I'm working on or have completed over the years
                        </p>
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <ul className="">
                                <li>
                                    <a className="project-link text-decoration-none mb-3 me-3">
                                        <h5>Simply Redstone Systems</h5>
                                    </a> 
                                </li>
                                <li>
                                    <a className="project-link text-decoration-none mb-3 me-3">
                                        <h5>MERN Certification</h5>
                                    </a>
                                </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="">
                                    <li>
                                        <a className="project-link text-decoration-none mb-3 me-3">
                                            <h5>Artwork</h5>
                                        </a> 
                                    </li>
                                    <li>
                                        <a className="project-link text-decoration-none mb-3 me-3">
                                            <h5>Unity Engine</h5>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;