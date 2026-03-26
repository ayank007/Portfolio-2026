import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ayan from "../../assets/img-ayan-1.webp";

const Profile: React.FC = () => {
    const borderRingRef = useRef<HTMLDivElement>(null);
    const l1Ref = useRef<HTMLDivElement>(null);
    const l2Ref = useRef<HTMLDivElement>(null);
    const l3Ref = useRef<HTMLDivElement>(null);
    const maskCircleRef = useRef<SVGCircleElement>(null);

    useEffect(() => {
        let masterTl: gsap.core.Timeline;

        const startAnim = () => {
            if (!l1Ref.current || !borderRingRef.current || !l2Ref.current || !l3Ref.current || !maskCircleRef.current) return;

            const baseWidth = l1Ref.current.offsetWidth;
            const sizeOuter = baseWidth + 100;
            const sizeMid = l2Ref.current.offsetWidth - 20;
            const sizeSmall = l3Ref.current.offsetWidth - 10;

            const length = 2 * Math.PI * 48; // Circumference

            // Initial mask state (hidden)
            gsap.set(maskCircleRef.current, {
                strokeDasharray: length,
                strokeDashoffset: length
            });

            masterTl = gsap.timeline({
                repeat: -1,
                repeatDelay: 3,
                defaults: { ease: "power3.inOut" }
            });

            // 1. REVEAL DASHES (The "Wiper" effect)
            masterTl.to(maskCircleRef.current, {
                strokeDashoffset: 0,
                duration: 2,
                ease: "none"
            });

            masterTl.set(borderRingRef.current, { width: sizeOuter, height: sizeOuter }, "<");

            // 2. FORWARD SEQUENCE (Your original code)
            masterTl.to(l1Ref.current, { rotation: -45, duration: 1.2 })
                .to(borderRingRef.current, { width: sizeMid, height: sizeMid, duration: 0.6, ease: "back.out(1.2)" }, "-=0.3")
                .to(l2Ref.current, { rotation: 45, duration: 1.2 }, "-=0.2")
                .to(borderRingRef.current, { width: sizeSmall, height: sizeSmall, duration: 0.6, ease: "back.out(1.2)" }, "-=0.3")
                .to(l3Ref.current, { rotation: -45, duration: 1.2 }, "-=0.2");

            masterTl.to({}, { duration: 1.5 });

            // 3. REVERSE SEQUENCE (Your original code)
            masterTl.to(l3Ref.current, { rotation: 0, duration: 1 })
                .to(borderRingRef.current, { width: sizeMid, height: sizeMid, duration: 0.6 }, "-=0.4")
                .to(l2Ref.current, { rotation: 0, duration: 1 }, "-=0.4")
                .to(borderRingRef.current, { width: sizeOuter, height: sizeOuter, duration: 0.6 }, "-=0.4")
                .to(l1Ref.current, { rotation: 0, duration: 1 }, "-=0.4");

            // Reset mask for next loop
            masterTl.to(maskCircleRef.current, { opacity: 0, duration: 1 });
        };

        const timeout = setTimeout(startAnim, 500);
        return () => {
            clearTimeout(timeout);
            if (masterTl) masterTl.kill();
        };
    }, []);

    const imgStyle = {
        backgroundImage: `url(${ayan})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center bg-transparent select-none">

            {/* DASHED RING WITH MASK */}
            <div
                ref={borderRingRef}
                className="absolute z-50 pointer-events-none flex items-center justify-center overflow-visible"
                style={{ width: 0, height: 0 }}
            >
                <svg className="w-full h-full overflow-visible -rotate-90" viewBox="0 0 100 100">
                    <defs>
                        <mask id="dashMask">
                            {/* The mask is a solid white line that "draws" to reveal what's under it */}
                            <circle
                                ref={maskCircleRef}
                                cx="50" cy="50" r="48"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                            />
                        </mask>
                    </defs>

                    {/* This is your actual dashed circle. It never changes, just gets revealed */}
                    <circle
                        cx="50" cy="50" r="48"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                        strokeDasharray="3 2"
                        strokeLinecap="round"
                        mask="url(#dashMask)"
                    />
                </svg>
            </div>

            {/* Layer 1 */}
            <div ref={l1Ref} className="absolute w-[80%] aspect-square z-10 flex items-center justify-center"
                style={{
                    WebkitMaskImage: 'radial-gradient(circle, transparent 40%, black 41%)',
                    maskImage: 'radial-gradient(circle, transparent 40%, black 41%)'
                }}>
                <div className="w-[125%] h-[125%] shrink-0 rounded-full" style={imgStyle} />
            </div>

            {/* Layer 2 */}
            <div ref={l2Ref} className="absolute w-[55%] aspect-square z-20 rounded-full overflow-hidden flex items-center justify-center border border-white/10">
                <div className="w-[181%] h-[181%] shrink-0" style={imgStyle} />
            </div>

            {/* Layer 3 */}
            <div ref={l3Ref} className="absolute w-[30%] aspect-square z-30 rounded-full overflow-hidden flex items-center justify-center shadow-2xl border border-white/20">
                <div className="w-[333%] h-[333%] shrink-0" style={imgStyle} />
            </div>
        </div>
    );
};

export default Profile;