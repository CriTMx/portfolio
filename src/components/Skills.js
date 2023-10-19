import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import HKAbyssShriek from './media/hk_abyss_shriek.png';

function Skills() {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
        }, []);
    
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  return (
    <div className="skills-tab container">
        <div className="row">
            <div className="col-md-9">
                <a id="skills">
                    <h1 className="skills-h1 text-start display-4">Skills</h1>
                    <p className="skills-text text-start">
                        Skills text
                    </p>
                </a>
            </div>
            <div className="col-md-3 particle-container mb-5 pb-5 d-md-flex d-none" id="HKShadeCol">
                <img src={HKAbyssShriek} width='350px'/>
                <Particles id="tsparticles-3"
                        className=""
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

export default Skills;