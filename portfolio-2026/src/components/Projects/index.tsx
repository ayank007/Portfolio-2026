import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';
import MarqueeCursor from '../../utils/MarqueeCursor';
import PhysicsTags from "../../utils/Skillls2"

import "./style.scss"
import "./Cards/style.scss"
import ProjectCard1 from './Cards/ProjectCard1';
import ProjectCard2 from './Cards/ProjectCard2';
import ProjectCard3 from './Cards/ProjectCard3';
import ProjectCard4 from './Cards/ProjectCard4';
import ProjectCard5 from './Cards/ProjectCard5';

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ data }: any) => {

    const containerRef = useRef<HTMLDivElement>(null);

    const [cursorText, setCursorText] = useState("");

    const handleMouseEnter = (title: string | null) => {
        const cursor = document.querySelector('#marquee-cursor');

        // LOGIC: If title is null, don't show the custom cursor
        if (title) {
            setCursorText(title);
            gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
        } else {
            // Ensure it stays hidden for "No" cards
            gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
        }
    };

    const handleMouseLeave = () => {
        const cursor = document.querySelector('#marquee-cursor');
        gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
    };

    // Access the Lenis instance you set up in App.tsx
    // const lenis = useLenis();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Column Speed Parallax
            const isMobile = window.innerWidth < 1024;

            const speeds = isMobile ? [0, -200, 0, -200] : [0, -200, -400, -600]; // Adjusted for 4 columns
            const columns = gsap.utils.toArray<HTMLElement>('.column');

            columns.forEach((col, i) => {
                gsap.fromTo(col,
                    { y: 0 },
                    {
                        y: speeds[i] || 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: "#projects-content",
                            start: "top bottom-=100px",
                            end: "bottom top",
                            scrub: true,
                        }
                    }
                );
            });

            // 2. Dynamic Velocity Tilt
            const allCards = gsap.utils.toArray<HTMLElement>('.card');

            ScrollTrigger.create({
                onUpdate: (self) => {
                    const velocity = self.getVelocity() / 100;
                    const tilt = gsap.utils.clamp(-20, 20, velocity);

                    gsap.to(allCards, {
                        skewY: tilt,
                        duration: 0.4,
                        ease: "power2.out",
                        overwrite: true, // Prevents animation jitter
                    });
                }
            });

        }, containerRef); // Scope selectors to this container

        return () => ctx.revert(); // Cleanup on unmount
    }, []);

    // 3. Handle Snap Back via useLenis callback
    useLenis((lenisInstance) => {
        if (Math.abs(lenisInstance.velocity) < 0.1) {
            gsap.to('.card', {
                skewY: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        }
    });


    return (
        <div ref={containerRef} id='Projects' className="z-10 py-40 mt-[200px] opacity-1">
            <h2 id="projects-heading" className='max-w-[800px] text-center mx-auto projects-heading text-5xl sm:text-6xl md:text-7xl font-black text-black thunder lg:text-[90px]' dangerouslySetInnerHTML={{ __html: data.title }} />
            <MarqueeCursor text={cursorText} />
            <div id="projects-content" className="mt-8 grid grid-cols-[repeat(2,1fr)] lg:grid-cols-4 gap-3 md:gap-10 px-4 xl:px-32 container mx-auto items-start z-10">

                <div className="column flex flex-col gap-3 md:gap-10 z-20">
                    <div className="card z-20"
                        onMouseEnter={() => handleMouseEnter(data.project1.title)}
                        onMouseLeave={handleMouseLeave}>
                        <ProjectCard1 data={data.project1} />
                    </div>
                    <div className="card"
                        onMouseEnter={() => handleMouseEnter(data.project2.title)}
                        onMouseLeave={handleMouseLeave}>
                        <ProjectCard2 data={data.project2} />
                    </div>
                </div>

                <div className="column flex flex-col gap-3 md:gap-10 z-20">
                    <div className="card"
                        onMouseEnter={() => handleMouseEnter(data.project3.title)}
                        onMouseLeave={handleMouseLeave}>
                        <ProjectCard3 data={data.project3} />
                    </div>
                    <div className="card"
                        onMouseEnter={() => handleMouseEnter(data.project4.title)}
                        onMouseLeave={handleMouseLeave}>
                        <ProjectCard4 data={data.project4} />
                    </div>
                </div>

                <div className="column flex flex-col gap-3 md:gap-10 z-20">
                    <div className="card"
                        onMouseEnter={() => handleMouseEnter(data.project5.title)}
                        onMouseLeave={handleMouseLeave}>
                        <ProjectCard5 data={data.project5} />
                    </div>
                    <div className="card"
                        onMouseEnter={() => handleMouseEnter("PROJECT 6")}
                        onMouseLeave={handleMouseLeave}>
                        <img src="https://picsum.photos/600/900?6" />
                    </div>
                </div>

                <div className="column flex flex-col gap-3 md:gap-10 z-20">
                    <div className="card"
                        onMouseEnter={() => handleMouseEnter("PROJECT 7")}
                        onMouseLeave={handleMouseLeave}>
                        <img src="https://picsum.photos/600/900?7" />
                    </div>
                    <div className="card"
                        onMouseEnter={() => handleMouseEnter(null)}
                        onMouseLeave={handleMouseLeave}>
                        <img src="https://picsum.photos/600/900?8" />
                    </div>
                </div>
            </div>
            <div className='absolute w-full bottom-0'>
                <PhysicsTags data={data.skills} />
            </div>
        </div>
    )
}

export default Projects