import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MarqueeCursorProps {
    text?: string;
    active?: boolean;
}

const MarqueeCursor = ({ text = "VIEW CASE", active = true }: MarqueeCursorProps) => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!active) return;

        const cursor = cursorRef.current;
        const marquee = marqueeRef.current;
        if (!cursor || !marquee) return;

        // Continuous Loop
        const loop = gsap.to(marquee, {
            xPercent: -50,
            repeat: -1,
            duration: 5,
            ease: "none",
        });

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.6,
                ease: "power3.out",
            });
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            loop.kill();
        };
    }, [active]);

    if (!active) return null;

    return (
        <div
            ref={cursorRef}
            id="marquee-cursor"
            className="pointer-events-none fixed top-0 left-0 z-9999 w-24 h-24 bg-[#1DBD9C] rounded-full flex items-center overflow-hidden -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 outline-3 outline-dashed outline-[#169178] outline-offset-4"
        >
            <div ref={marqueeRef} className="whitespace-nowrap flex text-black text-lg font-black uppercase">
                {/* Repeat the dynamic text for the marquee effect */}
                <span className="px-1"> • {text} • {text} • {text} • {text}</span>
                <span className="px-1"> • {text} • {text} • {text} • {text}</span>
            </div>
        </div>
    );
};

export default MarqueeCursor;