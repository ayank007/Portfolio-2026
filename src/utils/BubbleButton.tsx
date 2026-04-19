import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Lenis from 'lenis';
interface BubbleButtonProps {
    text: string;
    link: string;
}
const BubbleButton = ({ text, link }: BubbleButtonProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const mainPillRef = useRef<HTMLDivElement>(null);
    const leftCircleRef = useRef<HTMLDivElement>(null);
    const rightCircleRef = useRef<HTMLDivElement>(null);
    const iconDownloadRef = useRef<SVGSVGElement>(null);
    const iconCheckRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    const handleMouseEnter = () => {
        gsap.to(leftCircleRef.current, { width: 64, scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1.1, 0.6)", overwrite: "auto" });
        gsap.to(rightCircleRef.current, { width: 0, scale: 0, opacity: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" });
    };

    const handleMouseLeave = () => {
        gsap.to(rightCircleRef.current, { width: 64, scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1.1, 0.6)", overwrite: "auto" });
        gsap.to(leftCircleRef.current, { width: 0, scale: 0, opacity: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" });

        // Reset icons
        gsap.to(iconDownloadRef.current, { scale: 1, opacity: 1, y: 0, duration: 0.3 });
        gsap.to(iconCheckRef.current, { scale: 0, opacity: 0, duration: 0.3 });
    };

    const handleMouseDown = () => {
        gsap.to(mainPillRef.current, {
            scale: 0.95,
            backgroundColor: "#1f211f",
            duration: 0.1
        });

        gsap.to(iconDownloadRef.current, { y: 15, opacity: 0, scale: 0.5, duration: 0.2 });
        gsap.to(iconCheckRef.current, { scale: 1, opacity: 1, delay: 0.1, duration: 0.4, ease: "back.out(2)" });
    };

    const handleMouseUp = () => {
        gsap.to(mainPillRef.current, {
            scale: 1,
            backgroundColor: "#141514",
            duration: 0.4,
            ease: "elastic.out(1, 0.3)"
        });
    };

    return (
        <a href={link} target="_blank">
            <div
                ref={wrapperRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                className="cursor-pointer flex items-center h-12 md:h-16"
            >
                {/* Left Circle */}
                <div
                    ref={leftCircleRef}
                    className="overflow-hidden w-0 h-12 md:h-16 bg-[#ff4d35] rounded-full flex items-center justify-center scale-0 opacity-0"
                >
                    <div className="min-w-[40px] md:min-w-[64px] flex items-center justify-center relative">
                        <svg ref={iconDownloadRef} className="w-6 h-6 text-white absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                        <svg ref={iconCheckRef} className="w-6 h-6 text-white absolute scale-0 opacity-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                </div>

                {/* Main Pill */}
                <div
                    ref={mainPillRef}
                    className="bg-[#141514] h-full px-10 rounded-full flex items-center justify-center border border-white/10 relative z-10"
                >
                    <span className="text-white md:text-lg font-medium whitespace-nowrap select-none">
                        {text}
                    </span>
                </div>

                {/* Right Circle */}
                <div
                    ref={rightCircleRef}
                    className="overflow-hidden w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center"
                >
                    <div className="min-w-[48px] md:min-w-[64px] flex items-center justify-center">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default BubbleButton;