import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis } from 'lenis/react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
    const container = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        // 1. Create the GSAP Context for total cleanup
        const ctx = gsap.context((self) => {

            // 2. HERO PIN & ZOOM
            // We use a timeline so the circle scale and opacity happen in sync
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "+=200%", // How long the zoom lasts
                    scrub: true,
                    pin: true,
                    anticipatePin: 1, // Reduces jitter
                }
            });

            tl.to(".zoom-circle", {
                scale: 80, // Massive scale to cover the screen
                ease: "none",
            })
                .to(".hero-content", {
                    opacity: 0,
                    y: -100,
                    ease: "none"
                }, 0); // Start at same time as scale

            // 3. FOOTER REVEAL
            // This creates the "Sticky" effect for the footer
            gsap.fromTo(".footer-content", {
                y: -200
            }, {
                y: 0,
                scrollTrigger: {
                    trigger: "main",
                    start: "bottom bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });

        }, container); // Scope selectors to the container ref

        // 4. Critical: Refresh ScrollTrigger after a tiny delay
        // This fixes calculations if Lenis/Images shift the layout
        const timer = setTimeout(() => ScrollTrigger.refresh(), 100);

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            <div ref={container} className="bg-black text-white">

                {/* HERO SECTION */}
                <section ref={heroRef} className="hero-section relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                    <div className="hero-content relative z-10 text-center">
                        <h1 className="text-8xl font-bold tracking-tighter uppercase">Osmo</h1>
                        <p className="mt-4 opacity-50 uppercase tracking-widest">Scroll to Expand</p>
                    </div>

                    {/* THE ZOOM CIRCLE */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="zoom-circle w-24 h-24 bg-white rounded-full scale-1 will-change-transform" />
                    </div>
                </section>

                {/* MAIN CONTENT SECTION */}
                <main className="relative z-10 bg-white text-black min-h-screen">
                    <div className="max-w-4xl mx-auto py-40 px-10">
                        <h2 className="text-6xl font-medium leading-tight">
                            The circle grew to become this background.
                        </h2>
                        <p className="mt-20 text-xl opacity-60 leading-relaxed">
                            By pinning the hero section and scaling a circle, we create a seamless
                            transition between the dark hero and this light content section.
                            The scrolling is handled by Lenis for that buttery smooth feel.
                        </p>
                        <div className="h-[100vh]" /> {/* Spacer to allow scrolling */}
                    </div>
                </main>

                {/* REVEAL FOOTER */}
                <div className="footer-wrap relative h-screen w-full overflow-hidden bg-zinc-900">
                    <div className="footer-content h-full flex items-center justify-center">
                        <h2 className="text-[15vw] font-bold text-zinc-800">FOOTER</h2>
                    </div>
                </div>

            </div>
        </ReactLenis>
    );
}