import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Particle = () => {
    const particlesInit = useCallback(async engine => {        
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (         
        <Particles
            id="tsparticles"                   
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#1E1E1E",
                    },                    
                },                
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 2,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#00FF00", "#FFD700", "#FF00FF", "#00FFFF", "#FF4500"],
                    },                   
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 2000,
                        },
                        value: 10,
                    },
                    opacity: {
                        value: 1,
                    },                    
                    shape: {
                        type: ["circle"],
                    },
                    size: {
                        value: { min: 5, max: 6 },                        
                    },
                },
                detectRetina: true,                
            }}        
        />                 
    );
};

export default Particle;