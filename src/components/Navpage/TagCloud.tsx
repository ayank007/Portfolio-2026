import { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';

const Sphere = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const texts = [
            "SASS",
            "TypeScript",
            "React",
            "Vite",
            "PHP",
            "Next",
            "Redux",
            "JQuery",
            "REST",
            "Lighthouse",
            "Svelte",
            "GIT",
            "JavaScript",
            "Python",
            "GSAP",
            "Figma",
            "Svelte",
            "Tailwind",
            "SQL",
            "Java"
        ];

        const options = {
            radius: 250,
            maxSpeed: 'normal',
            initSpeed: 'normal',
            direction: 135,
            keep: true,
        };

        if (container) {
            (TagCloud as any)(container, texts, options);
        }

        // Cleanup on unmount to prevent duplicate spheres
        return () => {
            if (container) container.innerHTML = '';
        };
    }, []);

    return (
        <div className="flex justify-center items-center h-full">
            <span ref={containerRef} className="text-cyan-400 font-bold text-xl" />
        </div>
    );
};

export default Sphere;