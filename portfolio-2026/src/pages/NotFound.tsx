import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import confetti from 'canvas-confetti';

const NotFound: React.FC = () => {
    const [isMissionSuccess, setIsMissionSuccess] = useState(false);
    const [hitIndices, setHitIndices] = useState<Set<number>>(new Set());

    const rocketRef = useRef<HTMLDivElement>(null);
    const slingshotRef = useRef<HTMLDivElement>(null);
    const targetRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const canvasRef = useRef<HTMLCanvasElement | null>(null); // Ref for custom canvas

    const isDragging = useRef(false);
    const startPos = useRef({ x: 0, y: 0 });
    const currentOffset = useRef({ x: 0, y: 0 });
    const MAX_RADIUS = 50;

    // Create a private confetti instance
    const fireConfetti = (options: confetti.Options) => {
        if (canvasRef.current) {
            const myConfetti = confetti.create(canvasRef.current, { resize: true });
            myConfetti({ ...options, zIndex: 9999 });
        }
    };

    // ... handleMouseDown remains the same ...
    const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
        isDragging.current = true;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        startPos.current = { x: clientX, y: clientY };
    };

    useEffect(() => {
        const handleMove = (e: MouseEvent | TouchEvent) => {
            if (!isDragging.current) return;
            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
            let dx = clientX - startPos.current.x;
            let dy = clientY - startPos.current.y;

            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > MAX_RADIUS) {
                const angle = Math.atan2(dy, dx);
                dx = Math.cos(angle) * MAX_RADIUS;
                dy = Math.sin(angle) * MAX_RADIUS;
            }

            currentOffset.current = { x: dx, y: dy };
            const angleRad = Math.atan2(-dy, -dx);
            const angleDeg = angleRad * (180 / Math.PI) + 45;
            gsap.set(rocketRef.current, { x: dx, y: dy, rotation: angleDeg });
        };

        const handleUp = () => {
            if (!isDragging.current) return;
            isDragging.current = false;
            const launchX = -currentOffset.current.x * 25;
            const launchY = -currentOffset.current.y * 25;

            gsap.to(rocketRef.current, {
                x: launchX, y: launchY, duration: 1, ease: "expo.out",
                onUpdate: checkCollision,
                onComplete: () => {
                    gsap.to(rocketRef.current, { x: 0, y: 0, rotation: 0, duration: 0.6, ease: "back.out" });
                }
            });
        };

        const checkCollision = () => {
            if (!rocketRef.current) return;
            const r = rocketRef.current.getBoundingClientRect();
            targetRefs.current.forEach((t, i) => {
                if (!t || hitIndices.has(i)) return;
                const tr = t.getBoundingClientRect();
                if (r.left < tr.right && r.right > tr.left && r.top < tr.bottom && r.bottom > tr.top) {
                    setHitIndices(prev => new Set(prev).add(i));
                    fireConfetti({
                        particleCount: 30,
                        spread: 50,
                        origin: { y: 0.5 },
                        colors: ['#333'],
                    });
                }
            });
        };

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', handleUp);
        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleUp);
        };
    }, [hitIndices]);

    useEffect(() => {
        if (hitIndices.size === 3) {
            fireConfetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
            setTimeout(() => setIsMissionSuccess(true), 500);
        }
    }, [hitIndices]);

    return (
        <div className="fixed inset-0 overflow-hidden bg-[#e0e0d1] flex items-center justify-center font-mono text-[#333] select-none touch-none">
            {/* The Magic Fix: A dedicated canvas for confetti */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-100 w-full h-full"
            />

            <div className="relative w-full h-full flex flex-col items-center justify-center z-10">
                <p className="text-xl mb-4 opacity-70">Page not found</p>
                <div className="flex gap-4 text-[12rem] font-black leading-none">
                    {['4', '0', '4'].map((num, i) => (
                        <span
                            key={i}
                            ref={(el) => { targetRefs.current[i] = el; }}
                            className={`inline-block transition-all duration-500 ${hitIndices.has(i) ? 'opacity-10 blur-sm scale-75' : 'opacity-100'}`}
                        >
                            {num}
                        </span>
                    ))}
                </div>

                <div className="absolute bottom-20 flex flex-col items-center">
                    <div
                        ref={slingshotRef}
                        onMouseDown={handleMouseDown}
                        className="w-20 h-20 border-2 border-dashed border-[#333] rounded-full flex items-center justify-center cursor-crosshair relative"
                    >
                        <div ref={rocketRef} className="text-4xl z-10">🚀</div>
                    </div>
                    <p className="mt-4 text-sm font-bold uppercase tracking-widest">Pull to Aim</p>
                </div>

                {isMissionSuccess && (
                    <div className="absolute bg-white p-10 rounded-2xl shadow-2xl text-center z-110 border-4 border-[#333]">
                        <h2 className="text-3xl font-bold mb-4">MISSION SUCCESS</h2>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-[#333] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                        >
                            REBOOT
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NotFound;