import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import About from "./About";

function Particle() {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  return (
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
  )
}

export default Particle