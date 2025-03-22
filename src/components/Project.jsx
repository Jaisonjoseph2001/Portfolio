import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "../constraints"; // Your project data

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const containerRef = useRef(null);
    const projectRefs = useRef([]);

    useEffect(() => {
        if (!containerRef.current || projectRefs.current.length === 0) return;

        const projects = projectRefs.current;
        const totalWidth = projects.length * window.innerWidth;

        gsap.to(projects, {
            xPercent: -100 * (projects.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                start: "top top",
                end: `+=${totalWidth}`,
                anticipatePin: 1,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <>
            <style>{`
        body, html {
          overflow-x: hidden;
        }
      `}</style>

            <div ref={containerRef} className="w-full h-screen overflow-hidden" style={{ background: 'linear-gradient(to right, #0f172a, #1e293b, #334155)' }}>
                <h2 className="text-4xl text-center">Projects</h2>

                <div className="flex h-screen" style={{ width: `${PROJECTS.length * 90}vw` }}>
                    {PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => (projectRefs.current[index] = el)}
                            className="w-[80vw] h-screen flex flex-col items-center justify-center p-10 text-white"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full max-w-[80vw] md:max-w-[60vw] lg:max-w-[50vw] xl:max-w-[40vw] 2xl:max-w-[35vw] h-auto rounded-md mb-4 sm:mb-6"
                            />
                            <h6 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">{project.title}</h6>
                            <p className="text-neutral-400 text-center max-w-xs sm:max-w-md md:max-w-lg">{project.description}</p>


                            <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="relative px-4 py-2 text-sm font-semibold bg-violet-950 text-violet-400 border border-violet-400 border-b-4 rounded-md overflow-hidden group hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 duration-300"
                  >
                    <span className="absolute -top-[150%] left-0 w-80 h-[5px] bg-violet-400 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]" />
                    {tech}
                  </span>
                ))}
              </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
