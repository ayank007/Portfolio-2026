import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ayan1 from "../../assets/img-ayan-1.webp";
import ayan2 from "../../assets/img-ayan-2.webp";

const Profile: React.FC = () => {
    const l1Ref = useRef<HTMLDivElement>(null);
    const l2Ref = useRef<HTMLDivElement>(null);
    const l3Ref = useRef<HTMLDivElement>(null);
    const borderRingRef = useRef<HTMLDivElement>(null);
    const maskCircleRef = useRef<SVGCircleElement>(null);

    useEffect(() => {
        if (!l1Ref.current || !maskCircleRef.current) return;

        const length = 2 * Math.PI * 48;
        const sizeOuter = l1Ref.current.offsetWidth + 25;
        const sizeMid = l2Ref.current!.offsetWidth - 20;
        const sizeSmall = l3Ref.current!.offsetWidth - 10;

        gsap.set(maskCircleRef.current, { strokeDasharray: length, strokeDashoffset: length });

        // We use a counter to alternate which image fades in
        let isAlt = false;

        const masterTl = gsap.timeline({
            repeat: -1,
            repeatDelay: 2,
            defaults: { ease: "power3.inOut" },
            onRepeat: () => { isAlt = !isAlt; } // Toggle state every loop
        });

        // 1. DASH REVEAL
        masterTl.to(maskCircleRef.current, { strokeDashoffset: 0, duration: 1.5, ease: "none" });
        masterTl.set(borderRingRef.current, { width: sizeOuter, height: sizeOuter }, "<");

        // 2. FORWARD ROTATION (Shrinking Ring)
        masterTl.to(l1Ref.current, { rotation: -45, duration: 1.2 })
            .to(borderRingRef.current, { width: sizeMid, height: sizeMid, duration: 0.6, ease: "back.out(1.2)" }, "-=0.3")
            .to(l2Ref.current, { rotation: 45, duration: 1.2 }, "-=0.2")
            .to(borderRingRef.current, { width: sizeSmall, height: sizeSmall, duration: 0.6, ease: "back.out(1.2)" }, "-=0.3")
            .to(l3Ref.current, { rotation: -45, duration: 1.2 }, "-=0.2");

        masterTl.to({}, { duration: 1 }); // Static pause

        // 3. REVERSE & CROSSFADE (Alternate between A->B and B->A)
        masterTl.call(() => {
            const targetOpacity = isAlt ? 0 : 1; // If currently Alt, fade back to Original
            gsap.to(".img-alt-3", { opacity: targetOpacity, duration: 0.8 });
        })
            .to({}, { duration: 0.8 })
            .to(l3Ref.current, { rotation: 0, duration: 1 })
            .to(borderRingRef.current, { width: sizeMid, height: sizeMid, duration: 0.6 }, "-=0.4")

            .call(() => {
                const targetOpacity = isAlt ? 0 : 1;
                gsap.to(".img-alt-2", { opacity: targetOpacity, duration: 0.8 });
            })
            .to({}, { duration: 0.8 })
            .to(l2Ref.current, { rotation: 0, duration: 1 }, "-=0.2")
            .to(borderRingRef.current, { width: sizeOuter, height: sizeOuter, duration: 0.6 }, "-=0.4")

            .call(() => {
                const targetOpacity = isAlt ? 0 : 1;
                gsap.to(".img-alt-1", { opacity: targetOpacity, duration: 0.8 });
            })
            .to({}, { duration: 0.8 })
            .to(l1Ref.current, { rotation: 0, duration: 1 }, "-=0.2");

        // 4. HIDE DASHES
        masterTl.to(maskCircleRef.current, { strokeDashoffset: length, duration: 1 });

        return () => { masterTl.kill(); };
    }, []);

    const ImageStack = ({ multiplier, isOuter, id }: { multiplier: string, isOuter?: boolean, id: string }) => (
        <div className={`absolute inset-0 flex items-center justify-center overflow-hidden ${isOuter ? 'rounded-b-full' : 'rounded-full'}`}>
            <img src={ayan1} className={`absolute w-full h-full object-cover object-top translate-y-[8%] ${isOuter ? 'rounded-b-full' : 'rounded-full'}`} style={{ width: multiplier, height: multiplier }} />
            <img src={ayan2} className={`img-alt-${id} absolute w-full h-full object-cover object-top translate-y-[8%] opacity-0 ${isOuter ? 'rounded-b-full' : 'rounded-full'}`} style={{ width: multiplier, height: multiplier }} />
        </div>
    );

    return (
        <div className="relative min-h-[350px] sm:min-h-[400px] w-full h-full flex items-center justify-center bg-transparent select-none overflow-hidden">

            {/* DASHED RING */}
            <div ref={borderRingRef} className="absolute z-50 pointer-events-none flex items-center justify-center overflow-visible" style={{ width: 0, height: 0 }}>
                <svg className="w-full h-full overflow-visible -rotate-90" viewBox="0 0 100 100">
                    <defs><mask id="m"><circle ref={maskCircleRef} cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="2" /></mask></defs>
                    <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="3 2" mask="url(#m)" />
                </svg>
            </div>

            {/* Layer 1 (Outer Ring) - WebkitMask creates the donut hole */}
            <div ref={l1Ref} className="absolute w-[80%] aspect-square z-10 rounded-b-full overflow-hidden"
                style={{ WebkitMaskImage: 'radial-gradient(circle, transparent 40%, black 41%)', maskImage: 'radial-gradient(circle, transparent 40%, black 41%)' }}>
                <ImageStack multiplier="125%" isOuter id="1" />
            </div>

            {/* Layer 2 (Middle Circle) - bg-dark blocks Layer 1 from showing in center */}
            <div ref={l2Ref} className="absolute w-[55%] aspect-square z-20 rounded-full overflow-hidden flex items-center justify-center bg-[#0f172a]">
                <ImageStack multiplier="181%" id="2" />
            </div>

            {/* Layer 3 (Inner Circle) - bg-dark blocks Layer 2 from showing in center */}
            <div ref={l3Ref} className="absolute w-[30%] aspect-square z-30 rounded-full overflow-hidden flex items-center justify-center bg-[#0f172a]">
                <ImageStack multiplier="333%" id="3" />
            </div>

        </div>
    );
};

export default Profile;