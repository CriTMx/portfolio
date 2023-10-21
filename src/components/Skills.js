import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Tooltip } from 'react-tooltip';

import HKAbyssShriek from './media/hk_abyss_shriek.png';
import html from './icons/skillicons/html.svg';
import css from './icons/skillicons/css.svg';
import js from './icons/skillicons/js.svg';
import bs from './icons/skillicons/bs.svg';
import rct from './icons/skillicons/react.svg';
import py from './icons/skillicons/python.svg';
import c from './icons/skillicons/c.svg';
import cs from './icons/skillicons/csharp.svg';
import cpp from './icons/skillicons/cplusplus.svg';
import java from './icons/skillicons/java.svg';
import unity from './icons/skillicons/unity.svg';
import ps from './icons/skillicons/photoshop.svg';
import dj from './icons/skillicons/django.svg';
import gt from './icons/skillicons/git.svg';

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
                    <div className="row">
                        <div className="col-md-6">
                            <div className="skillicons text-start">
                                <img src={html} data-tooltip-id="tooltip-id" data-tooltip-content="HTML5"/>
                                <img src={css} data-tooltip-id="tooltip-id" data-tooltip-content="CSS3"/>
                                <img src={js} data-tooltip-id="tooltip-id" data-tooltip-content="JavaScript"/>
                                <img src={bs} data-tooltip-id="tooltip-id" data-tooltip-content="Bootstrap"/>
                                <img src={rct} data-tooltip-id="tooltip-id" data-tooltip-content="React.js"/>
                                <img src={py} data-tooltip-id="tooltip-id" data-tooltip-content="Python"/>
                                <img src={c} data-tooltip-id="tooltip-id" data-tooltip-content="C"/>
                                <img src={cpp} data-tooltip-id="tooltip-id" data-tooltip-content="C++"/>
                                <img src={cs} data-tooltip-id="tooltip-id" data-tooltip-content="C#"/>
                                <img src={java} data-tooltip-id="tooltip-id" data-tooltip-content="Java"/>
                                <img src={unity} data-tooltip-id="tooltip-id" data-tooltip-content="Unity Engine"/>
                                <img src={dj} data-tooltip-id="tooltip-id" data-tooltip-content="Django"/>
                                <img src={gt} data-tooltip-id="tooltip-id" data-tooltip-content="Git, GitHub"/>
                                <img src={ps} data-tooltip-id="tooltip-id" data-tooltip-content="Adobe Photoshop"/>
                                <Tooltip id="tooltip-id" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ul className="ps-0 list-style-none text-start skills-text">
                                <li className="list-group-item">
                                    <p>Empathy</p>
                                </li>
                                <li className="list-group-item">
                                    <p>Conflict resolution</p>
                                </li>
                                <li className="list-group-item">
                                    <p>Teamwork & optimism</p>
                                </li>
                                <li className="list-group-item">
                                    <p>Leadership & initiatives</p>
                                </li>
                                <li className="list-group-item">
                                    <p>Careful decision making</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-md-3 particle-container mt-5 mb-5 pb-5 d-md-flex d-none" id="HKShadeCol">
                <img src={HKAbyssShriek} width='300px'/>
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