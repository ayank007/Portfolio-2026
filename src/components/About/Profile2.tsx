import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import img1 from "../../assets/img-ayan-1.webp";
import img2 from "../../assets/img-ayan-2.webp";

const Profile: React.FC = () => {
    const borderRingRef = useRef<HTMLDivElement>(null);
    const l1Ref = useRef<HTMLDivElement>(null);
    const l2Ref = useRef<HTMLDivElement>(null);
    const l3Ref = useRef<HTMLDivElement>(null);
    const dashRef = useRef<SVGCircleElement>(null);
    const svgRingRef = useRef<SVGSVGElement>(null);

    // inner image divs (to swap src independently)
    const img1L1 = useRef<HTMLDivElement>(null);
    const img1L2 = useRef<HTMLDivElement>(null);
    const img1L3 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let masterTl: gsap.core.Timeline;
        let spinTween: gsap.core.Tween;

        const startAnim = () => {
            if (
                !l1Ref.current || !l2Ref.current || !l3Ref.current ||
                !borderRingRef.current || !svgRingRef.current ||
                !img1L1.current || !img1L2.current || !img1L3.current
            ) return;

            const baseWidth = l1Ref.current.offsetWidth;
            const sizeOuter = baseWidth - 40;
            const sizeMid = l2Ref.current.offsetWidth - 20;
            const sizeSmall = l3Ref.current.offsetWidth - 10;

            // ── Continuous SVG ring spin ─────────────────
            spinTween = gsap.to(svgRingRef.current, {
                rotation: 360,
                duration: 14,
                ease: "none",
                repeat: -1,
                transformOrigin: "50% 50%",
            });

            // ── Master timeline ──────────────────────────
            masterTl = gsap.timeline({
                repeat: -1,
                repeatDelay: 2,
                defaults: { ease: "power3.inOut" },
            });

            // 1. Dashed ring reveal
            masterTl
                .set(borderRingRef.current, { width: sizeOuter, height: sizeOuter })
                .fromTo(dashRef.current,
                    { opacity: 0, scale: 0.88, transformOrigin: "50% 50%" },
                    { opacity: 1, scale: 1, duration: 1.1, ease: "elastic.out(1, 0.6)" }
                )
                // Stagger reveal the image layers
                .from(l1Ref.current,
                    { scale: 0.75, opacity: 0, duration: 0.8, ease: "back.out(1.4)" },
                    "-=0.5"
                )
                .from(l2Ref.current,
                    { scale: 0.6, opacity: 0, duration: 0.7, ease: "back.out(1.6)" },
                    "-=0.55"
                )
                .from(l3Ref.current,
                    { scale: 0.4, opacity: 0, duration: 0.6, ease: "back.out(2)" },
                    "-=0.5"
                );

            // 2. Forward rotation sequence — r1 → r2 → r3, ring shrinks
            masterTl
                .to(l1Ref.current, { rotation: -45, duration: 1.0 })
                .to(borderRingRef.current, { width: sizeMid, height: sizeMid, duration: 0.55, ease: "back.out(1.2)" }, "-=0.35")
                .to(l2Ref.current, { rotation: 45, duration: 1.0 }, "-=0.25")
                .to(borderRingRef.current, { width: sizeSmall, height: sizeSmall, duration: 0.55, ease: "back.out(1.2)" }, "-=0.35")
                .to(l3Ref.current, { rotation: -45, duration: 1.0 }, "-=0.25");

            // 3. Pause — image swap crossfade
            masterTl.to({}, { duration: 0.4 });

            // l3 swaps first
            masterTl
                .to(img1L3.current, { opacity: 0, duration: 0.35, ease: "power2.in" })
                .call(() => { if (img1L3.current) img1L3.current.style.backgroundImage = `url(${img2})`; })
                .to(img1L3.current, { opacity: 1, duration: 0.35, ease: "power2.out" });

            // 4. Reverse sequence — r3 resets, ring expands, l2 resets, ring expands, l1 resets
            masterTl
                .to(l3Ref.current, { rotation: 0, duration: 0.9 })
                .to(borderRingRef.current, { width: sizeMid, height: sizeMid, duration: 0.55, ease: "back.out(1.2)" }, "-=0.45");

            // l2 swaps on reset
            masterTl
                .to(img1L2.current, { opacity: 0, duration: 0.3, ease: "power2.in" })
                .call(() => { if (img1L2.current) img1L2.current.style.backgroundImage = `url(${img2})`; })
                .to(img1L2.current, { opacity: 1, duration: 0.3, ease: "power2.out" });

            masterTl
                .to(l2Ref.current, { rotation: 0, duration: 0.9 }, "-=0.25")
                .to(borderRingRef.current, { width: sizeOuter, height: sizeOuter, duration: 0.55, ease: "back.out(1.2)" }, "-=0.45");

            // l1 swaps on reset
            masterTl
                .to(img1L1.current, { opacity: 0, duration: 0.3, ease: "power2.in" })
                .call(() => { if (img1L1.current) img1L1.current.style.backgroundImage = `url(${img2})`; })
                .to(img1L1.current, { opacity: 1, duration: 0.3, ease: "power2.out" });

            masterTl
                .to(l1Ref.current, { rotation: 0, duration: 0.9 }, "-=0.25");

            // 5. Hold — then reset all images back to img1 silently before repeat
            masterTl.to({}, { duration: 1.8 });
            masterTl.call(() => {
                if (img1L1.current) img1L1.current.style.backgroundImage = `url(${img1})`;
                if (img1L2.current) img1L2.current.style.backgroundImage = `url(${img1})`;
                if (img1L3.current) img1L3.current.style.backgroundImage = `url(${img1})`;
            });

            // Fade ring opacity down before repeat
            masterTl.to(dashRef.current, { opacity: 0.15, scale: 0.94, duration: 0.9, ease: "power2.in" });
        };

        const timeout = setTimeout(startAnim, 400);

        return () => {
            clearTimeout(timeout);
            masterTl?.kill();
            spinTween?.kill();
        };
    }, []);

    const imgBase = (src: string) => ({
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    });

    return (
        <div className="relative w-full h-full flex items-center justify-center bg-transparent select-none">

            {/* ── Dashed spinning ring ─────────────────── */}
            <div
                ref={borderRingRef}
                className="absolute z-50 pointer-events-none flex items-center justify-center overflow-visible"
                style={{ width: 0, height: 0 }}
            >
                <svg
                    ref={svgRingRef}
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 100 100"
                    style={{ transformOrigin: "50% 50%" }}
                >
                    {/* Dashed border */}
                    <circle
                        ref={dashRef}
                        cx="50" cy="50" r="48"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.8"
                        strokeDasharray="3.5 4"
                        strokeLinecap="round"
                        className="opacity-0"
                    />
                    {/* Curved text on circle path */}
                    <defs>
                        <path
                            id="ringTextPath"
                            d="M 50,50 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                        />
                    </defs>
                    <text
                        fontSize="5.2"
                        fill="rgba(255,255,255,0.45)"
                        fontFamily="monospace"
                        letterSpacing="1.8"
                    >
                        <textPath href="#ringTextPath" startOffset="0%">
                            · AYAN · CREATIVE · AYAN · CREATIVE · AYAN · CREATIVE · AYAN ·
                        </textPath>
                    </text>
                </svg>
            </div>

            {/* ── L1: Outer donut ──────────────────────── */}
            <div
                ref={l1Ref}
                className="absolute w-[80%] aspect-square z-10 flex items-center justify-center"
                style={{
                    WebkitMaskImage: 'radial-gradient(circle, transparent 40%, black 41%)',
                    maskImage: 'radial-gradient(circle, transparent 40%, black 41%)',
                }}
            >
                <div
                    ref={img1L1}
                    className="w-[125%] h-[125%] shrink-0 rounded-full"
                    style={imgBase(img1)}
                />
            </div>

            {/* ── L2: Middle circle ────────────────────── */}
            <div
                ref={l2Ref}
                className="absolute w-[55%] aspect-square z-20 rounded-full overflow-hidden flex items-center justify-center"
                style={{ boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,0.08)' }}
            >
                <div
                    ref={img1L2}
                    className="w-[181%] h-[181%] shrink-0"
                    style={imgBase(img1)}
                />
            </div>

            {/* ── L3: Inner circle ─────────────────────── */}
            <div
                ref={l3Ref}
                className="absolute w-[30%] aspect-square z-30 rounded-full overflow-hidden flex items-center justify-center"
                style={{ boxShadow: '0 0 0 1.5px rgba(255,255,255,0.12), 0 8px 32px rgba(0,0,0,0.5)' }}
            >
                <div
                    ref={img1L3}
                    className="w-[333%] h-[333%] shrink-0"
                    style={imgBase(img1)}
                />
            </div>

        </div>
    );
};

export default Profile;