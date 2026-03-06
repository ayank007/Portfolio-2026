import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';
import MarqueeCursor from '../../utils/MarqueeCursor';
import PhysicsHero from "../../utils/Skillls2"

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

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
        <div ref={containerRef} id='Projects' className="bg-white z-10 py-40 mt-[200px] opacity-0">
            <h2 id="projects-heading" className='h2 max-w-[800px] text-center mx-auto'>Checkout Some of My <span className='highlighted-orange'>Works/Projects</span></h2>
            <MarqueeCursor text={cursorText} />
            <div id="projects-content" className="mt-8 grid grid-cols-[repeat(2,1fr)] lg:grid-cols-4 gap-3 md:gap-10 px-4 xl:px-32 container mx-auto items-start z-10">

                <div className="column flex flex-col gap-3 md:gap-10 z-20">
                    <div className="card z-20"
                        onMouseEnter={() => handleMouseEnter("PROJECT 1")}
                        onMouseLeave={handleMouseLeave}>
                        <img src="https://picsum.photos/600/900?1" />
                    </div>
                    <div className="card"
                        onMouseEnter={() => handleMouseEnter("PROJECT 2")}
                        onMouseLeave={handleMouseLeave}>
                        <img src="https://picsum.photos/600/900?2" />
                    </div>
                </div>

                <div className="column flex flex-col gap-3 md:gap-10 z-20">
                    <div className="card"
                        onMouseEnter={() => handleMouseEnter("PROJECT 3")}
                        onMouseLeave={handleMouseLeave}>
                        <img src="https://picsum.photos/600/900?3" />
                    </div>
                    <div className="card"
                        onMouseEnter={() => handleMouseEnter("PROJECT 4")}
                        onMouseLeave={handleMouseLeave}>
                        <img src="https://picsum.photos/600/900?4" />
                    </div>
                </div>

                <div className="column flex flex-col gap-3 md:gap-10 z-20">
                    <div className="card"
                        onMouseEnter={() => handleMouseEnter("PROJECT 5")}
                        onMouseLeave={handleMouseLeave}>
                        <img src="https://picsum.photos/600/900?5" />
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
                <PhysicsHero />
            </div>
        </div>
    )
}

export default Projects