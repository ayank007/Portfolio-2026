import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import snow1 from "../../../assets/snowfall/img-snow (1).png";
import snow2 from "../../../assets/snowfall/img-snow (2).png";
import snow3 from "../../../assets/snowfall/img-snow (3).png";
import snow4 from "../../../assets/snowfall/img-snow (4).png";
import snow5 from "../../../assets/snowfall/img-snow (5).png";
import snow6 from "../../../assets/snowfall/img-snow (6).png";
import snow7 from "../../../assets/snowfall/img-snow (7).png";
import snow8 from "../../../assets/snowfall/img-snow (8).png";

const Snowfall = ({ children, class1 }: { children?: React.ReactNode, class1?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const sources = [snow1, snow2, snow3, snow4, snow5, snow6, snow7, snow8];

        imagesRef.current = sources.map((src) => {
            const img = new Image();
            img.src = src;
            return img;
        });

        let width = 0;
        let height = 0;
        const particles: any[] = [];
        // 1. INCREASED QUANTITY: Doubled from 60 to 120
        const particleCount = 120;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;

            if (particles.length === 0) {
                for (let i = 0; i < particleCount; i++) {
                    particles.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        size: Math.random() * 12 + 8,
                        // 2. FASTER SPEED: Increased base from 0.5-1.5 to 1.5-3.0
                        speed: Math.random() * 1.5 + 1.5,
                        sway: Math.random() * 100,
                        imgIndex: Math.floor(Math.random() * sources.length),
                        rotation: Math.random() * 360,
                        spin: Math.random() * 3 - 1.5, // Faster rotation too
                        opacity: Math.random() * 0.4 + 0.4
                    });
                }
            }
        };

        window.addEventListener('resize', resize);
        resize();

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                const img = imagesRef.current[p.imgIndex];

                if (img.complete && img.naturalWidth !== 0) {
                    ctx.save();
                    ctx.globalAlpha = p.opacity;
                    ctx.translate(p.x, p.y);
                    ctx.rotate(p.rotation * Math.PI / 180);
                    ctx.drawImage(img, -p.size / 2, -p.size / 2, p.size, p.size);
                    ctx.restore();
                }

                // Apply movement
                p.y += p.speed;
                p.x += Math.sin(p.sway) * 0.5;
                p.sway += 0.02; // Slightly more frequent swaying
                p.rotation += p.spin;

                // Reset logic
                if (p.y > height + 20) {
                    p.y = -30;
                    p.x = Math.random() * width;
                    // Randomize speed slightly on reset for variety
                    p.speed = Math.random() * 1.5 + 1.5;
                }
            });
        };

        gsap.ticker.add(render);

        return () => {
            gsap.ticker.remove(render);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div className={`${class1} overflow-hidden`}>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none z-10 block invert"
            />
            {children}
        </div>
    );
};

export default Snowfall;