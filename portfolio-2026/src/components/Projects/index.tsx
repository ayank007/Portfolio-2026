import { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
import ProjectCard6 from './Cards/ProjectCard6';
import ProjectCard7 from './Cards/ProjectCard7';
import ProjectCard8 from './Cards/ProjectCard8';

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ data }: any) => {

    const containerRef = useRef<HTMLDivElement>(null);

    const [cursorText, setCursorText] = useState("");

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const isSmallScreen = window.innerWidth < 1024;
        if (isSmallScreen) {
            setIsMobile(true);
        }
    }, [])

    const handleMouseEnter = (title: string | null) => {
        if (isMobile) return;
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
        if (isMobile) return;
        const cursor = document.querySelector('#marquee-cursor');
        gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
    };

    // Access the Lenis instance you set up in App.tsx
    // const lenis = useLenis();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Column Speed Parallax
            const isMobileLocal = window.innerWidth < 1024;

            const speeds = isMobileLocal ? [0, -200, 0, -200] : [0, -200, -400, -600]; // Adjusted for 4 columns
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

            if (!isMobileLocal) {
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
            }

            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });

        }, containerRef); // Scope selectors to this container

        return () => ctx.revert(); // Cleanup on unmount
    }, []);

    // 3. Handle Snap Back via useLenis callback
    useLenis((lenisInstance) => {
        if (isMobile) return;
        if (Math.abs(lenisInstance.velocity) < 0.1) {
            gsap.to('.card', {
                skewY: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        }
    });

    const renderCard = (CardComponent: any, projectData: any, className: string) => {
        if (isMobile) {
            // On mobile, ONLY render the text. The heavy canvas components are never mounted!
            return (
                <div className={`project ${className}`}>
                    <div className="texts">
                        <h3>{projectData.title}</h3>
                        <p>{projectData.desc}</p>
                    </div>
                </div>
            );
        }
        // On desktop, render the full interactive card
        return <CardComponent data={projectData} />;
    };

    return (
        <div ref={containerRef} id='Projects' className="z-10 py-40 mt-[200px] opacity-1">
            <h2 id="projects-heading" className='max-w-[800px] text-center mx-auto projects-heading text-5xl sm:text-6xl md:text-7xl font-black text-black thunder lg:text-[90px]' dangerouslySetInnerHTML={{ __html: data.title }} />
            {!isMobile && <MarqueeCursor text={cursorText} />}
            <div id="projects-content" className="mt-8 grid grid-cols-[repeat(2,1fr)] lg:grid-cols-4 gap-3 md:gap-10 px-4 xl:px-32 container mx-auto items-start z-10">

                <div className="column flex flex-col gap-3 md:gap-10 z-20">
                    <div className="card z-20"
                        onMouseEnter={() => handleMouseEnter(data.project1.title)}
                        onMouseLeave={handleMouseLeave}>
                        {renderCard(ProjectCard1, data.project1, "project1")}
                    </div>

                    <div className="card"
                        onMouseEnter={() => handleMouseEnter(data.project6.title)}
                        onMouseLeave={handleMouseLeave}>
                        {renderCard(ProjectCard6, data.project6, "project6")}
                    </div>
                </div>

                <div className="column flex flex-col gap-3 md:gap-10 z-20">
                    <div className="card"
                        onMouseEnter={() => handleMouseEnter(data.project3.title)}
                        onMouseLeave={handleMouseLeave}>
                        {renderCard(ProjectCard3, data.project3, "project3")}
                    </div>
                    <div className="card"
                        onMouseEnter={() => handleMouseEnter(data.project5.title)}
                        onMouseLeave={handleMouseLeave}>
                        {renderCard(ProjectCard5, data.project5, "project5")}
                    </div>
                </div>

                <div className="column flex flex-col gap-3 md:gap-10 z-20">
                    <div className="card"
                        onMouseEnter={() => handleMouseEnter(data.project4.title)}
                        onMouseLeave={handleMouseLeave}>
                        {renderCard(ProjectCard4, data.project4, "project4")}
                    </div>
                    <div className="card"
                        onMouseEnter={() => handleMouseEnter(data.project7.title)}
                        onMouseLeave={handleMouseLeave}>
                        {renderCard(ProjectCard7, data.project7, "project7")}
                    </div>
                </div>

                <div className="column flex flex-col gap-3 md:gap-10 z-20">
                    <div className="card"
                        onMouseEnter={() => handleMouseEnter(data.project2.title)}
                        onMouseLeave={handleMouseLeave}>
                        {renderCard(ProjectCard2, data.project2, "project2")}
                    </div>
                    <div className="card"
                        onMouseEnter={() => handleMouseEnter(data.project8.title)}
                        onMouseLeave={handleMouseLeave}>
                        {renderCard(ProjectCard8, data.project8, "project8")}
                    </div>
                </div>
            </div>
            {!isMobile && (
                <div className='absolute w-full bottom-0'>
                    <PhysicsTags data={data.skills} />
                </div>
            )}
        </div>
    )
}

export default Projects