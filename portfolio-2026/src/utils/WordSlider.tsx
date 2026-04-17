import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import './WordSlider.scss';

interface WordSliderProps {
    data: string;
}

const WordSlider: React.FC<WordSliderProps> = ({ data }) => {
    const words = data.split(",").map((s) => s.trim());
    const wrapperRef = useRef<HTMLSpanElement>(null);
    const proxyRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLSpanElement>(null);
    const currentIndex = useRef(0);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial width
            proxyRef.current!.innerText = words[0];
            gsap.set(wrapperRef.current, { width: proxyRef.current!.offsetWidth });

            const switchWord = () => {
                // PREVENTION: Don't run if tab is hidden to avoid stacking
                if (document.hidden) return;

                // const prevIndex = currentIndex.current;
                currentIndex.current = (currentIndex.current + 1) % words.length;

                const currentWord = containerRef.current?.querySelector(".word-node:last-child");

                const newWord = document.createElement("span");
                newWord.innerText = words[currentIndex.current];
                // Fixed alignment: flex + h-full + items-center
                newWord.className = "word-node absolute inset-0 flex items-center justify-center whitespace-nowrap opacity-0";
                containerRef.current?.prepend(newWord);

                proxyRef.current!.innerText = words[currentIndex.current];
                const newWidth = proxyRef.current!.offsetWidth;

                const tl = gsap.timeline({
                    onComplete: () => {
                        if (currentWord) currentWord.remove();
                    },
                });

                tl.to(wrapperRef.current, {
                    width: newWidth,
                    duration: 0.5,
                    ease: "expo.inOut"
                }, 0);

                tl.to(currentWord || {}, {
                    y: -20, // Reduced distance for cleaner look
                    opacity: 0,
                    duration: 0.5,
                    ease: "expo.inOut"
                }, 0);

                tl.fromTo(newWord,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, ease: "expo.inOut" },
                    0
                );
            };

            const interval = setInterval(switchWord, 2000);
            return () => clearInterval(interval);
        });

        return () => ctx.revert();
    }, [words]);

    return (
        <span className="relative flex flex-col items-center">
            {/* Proxy */}
            <span ref={proxyRef} className="invisible absolute whitespace-nowrap opacity-0" />

            <span
                ref={wrapperRef}
                className="relative block overflow-hidden h-[1.1em] wordHeight"
            >
                <span ref={containerRef} className="relative block w-full h-full">
                    <span className="word-node absolute inset-0 flex items-center justify-center whitespace-nowrap">
                        {words[0]}
                    </span>
                </span>
            </span>
        </span>
    );
};

export default WordSlider;