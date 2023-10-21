import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import HKShade from './media/hk_shade.png';

function About()
{
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
        }, []);
    
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div className="about-tab container mt-5 mb-5">
            <div className="row">
                <div className="col-md-9">
                    <a id="about">
                        <h1 className="about-h1 text-start display-4">About</h1>
                    
                        <p className="about-text text-start">
                            I am Shlok Aditya Tripathy, known online by the alias 'CriTMx'. Having spent 15+ years of my life gaming, I now aspire to be a cutting-edge game developer aiming to create unique and exciting games, focusing on RPG elements and the like. I also listen to metalcore and dubstep music, watch anime & TV shows, and draw concept art in my spare time.
                        </p>
                    </a>
                </div>
                <div className="col-md-3 particle-container pt-3 pb-3 d-md-flex d-none justify-content-center" id="HKShadeCol">
                    <img src={HKShade} width='120px'/>
                    <Particles id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
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
            </div>
        </div>
    )
}

export default About;