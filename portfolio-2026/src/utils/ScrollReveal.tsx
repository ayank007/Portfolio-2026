import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = () => {
    const circleRef = useRef<SVGCircleElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<SVGSVGElement>(null);
    const lenis = useLenis();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Reveal Animation - Higher Speed
            gsap.to(circleRef.current, {
                attr: { r: 2800 },
                ease: "power2.in", // 'in' makes it accelerate as you scroll
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    // ULTRA SPEED: Reveal finishes after scrolling only 1/2 of the screen height
                    end: "8% top",
                    scrub: 0.1, // Lower number = more responsive to scroll
                    invalidateOnRefresh: true,
                }
            });

            gsap.to([triggerRef.current, ".main-arrow"], {
                opacity: 0,
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "10% top",
                    scrub: 0.1,
                    invalidateOnRefresh: true,
                }
            });

            // 2. Hide Hero UI and Button instantly
            gsap.to([triggerRef.current, "#Header"], {
                opacity: 0,
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "20% top",
                    scrub: true,
                }
            });

            gsap.to([triggerRef.current, "#Projects"], {
                opacity: 1,
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "20% top",
                    scrub: true,
                }
            });
            gsap.to([triggerRef.current, "#projects-content"], {
                y: -200,
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "20% top",
                    scrub: true,
                }
            });
            gsap.to([triggerRef.current, "#projects-heading"], {
                y: -200,
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "20% top",
                    scrub: true,
                }
            });
        });

        return () => ctx.revert();
    }, []);

    const handleScroll = () => {
        lenis?.scrollTo('#Projects', { duration: 1.2 });
    };

    return (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
            <svg className="w-full h-full">
                <circle
                    ref={circleRef}
                    cx="50%"
                    cy="calc(100% - 60px)"
                    r="35"
                    fill="#fff9f2"
                    className="will-change-[attr]"
                />
            </svg>

            <div
                ref={triggerRef}
                onClick={handleScroll}
                className="absolute bottom-[15px] left-1/2 -translate-x-1/2 w-[80px] h-[80px] flex items-center justify-center pointer-events-auto cursor-pointer z-10 main-arrow"
            >
                <div className="relative h-8 w-6 overflow-hidden">
                    <svg ref={arrowRef} className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ScrollReveal;