import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Heading3Props {
    data: string;
}

const Heading3: React.FC<Heading3Props> = ({ data }) => {
    const containerRef = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const chars = containerRef.current?.querySelectorAll(".char");
            if (!chars) return;

            gsap.fromTo(
                chars,
                { opacity: 0.1 },
                {
                    opacity: 1,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, [data]);

    // Split string into characters, preserving spaces
    const words = data.split(" ");

    return (
        <h1
            ref={containerRef}
        >
            {words.map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block white-space-nowrap">
                    {word.split("").map((char, charIdx) => (
                        <span key={charIdx} className="char inline-block">
                            {char}
                        </span>
                    ))}
                    {/* Add space back after each word except the last one */}
                    {wordIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
                </span>
            ))}
        </h1>
    );
};

export default Heading3;