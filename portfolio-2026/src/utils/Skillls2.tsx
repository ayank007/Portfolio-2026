import React, { useEffect, useRef } from 'react';
import {
    Engine,
    Render,
    Runner,
    Bodies,
    Composite,
    Mouse,
    MouseConstraint,
    Events,
    Body,
    Query
} from 'matter-js';

interface TextBody extends Body {
    text?: string;
    textColor?: string;
}

const PhysicsTags: React.FC = ({ data }: any) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const spawnedRef = useRef(false);

    useEffect(() => {
        if (!containerRef.current || !canvasRef.current) return;

        const container = containerRef.current;
        const canvas = canvasRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        const engine = Engine.create();
        const render = Render.create({
            canvas: canvas,
            engine: engine,
            options: {
                width,
                height,
                wireframes: false,
                background: 'transparent',
                pixelRatio: window.devicePixelRatio,
            },
        });

        // Walls
        const wallOptions = { isStatic: true, render: { visible: false } };
        const ground = Bodies.rectangle(width / 2, height + 25, width, 50, wallOptions);
        const leftWall = Bodies.rectangle(-25, height / 2, 50, height, wallOptions);
        const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, wallOptions);
        Composite.add(engine.world, [ground, leftWall, rightWall]);

        const colors = [
            { c: '#f3f4f6' }, { c: '#e9d5ff' }, { c: '#ffedd5' },
            { c: '#fef3c7' }, { c: '#ccfbf1' }, { c: '#a855f7', tc: '#fff' },
            { c: '#fef9c3' }, { c: '#bbf7d0' }, { c: '#bfdbfe' }
        ];

        const tagData = data.map((skill: string, index: number) => {
            const color = colors[index % colors.length];
            return {
                t: skill,
                c: color.c,
                tc: color.tc || '#1f2937' // Default dark text if tc is missing
            };
        });

        const dropTags = () => {
            if (spawnedRef.current) return;
            spawnedRef.current = true;
            tagData.forEach((tag: any, i: number) => {
                const x = Math.random() * (width - 200) + 100;
                const y = -100 - (i * 150);
                const body = Bodies.rectangle(x, y, tag.t.length * 10 + 40, 45, {
                    chamfer: { radius: 22 },
                    render: { fillStyle: tag.c },
                    restitution: 0.5,
                    friction: 0.1
                }) as TextBody;
                body.text = tag.t;
                body.textColor = tag.tc || '#1f2937';
                Composite.add(engine.world, body);
            });
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) dropTags();
        }, { threshold: 0.2 });
        observer.observe(container);

        // --- MANUALLY CONTROLLED MOUSE ---
        const mouse = Mouse.create(canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: { stiffness: 0.2, render: { visible: false } }
        });
        Composite.add(engine.world, mouseConstraint);

        // Proxy events from window to the non-interactive canvas
        const handleWindowEvent = (e: MouseEvent | TouchEvent) => {
            const rect = container.getBoundingClientRect();
            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

            // Update Matter mouse position
            mouse.position.x = clientX - rect.left;
            mouse.position.y = clientY - rect.top;

            const isInside = clientX >= rect.left && clientX <= rect.right &&
                clientY >= rect.top && clientY <= rect.bottom;

            const bodies = Composite.allBodies(engine.world);
            const isOverTag = Query.point(bodies, mouse.position).length > 0;

            if (isInside && isOverTag) {
                document.body.style.cursor = 'grab';
                // If the user clicks, "tell" Matter.js the button is down
                if (e.type === 'mousedown' || e.type === 'touchstart') {
                    (mouse as any).button = 0;
                    document.body.style.cursor = 'grabbing';
                }
            } else {
                if (!mouseConstraint.body) document.body.style.cursor = 'default';
            }

            // Release button
            if (e.type === 'mouseup' || e.type === 'touchend') {
                (mouse as any).button = -1;
            }

            // Boundary release
            if (!isInside && (mouseConstraint as any).body) {
                (mouseConstraint as any).body = null;
                (mouse as any).button = -1;
            }
        };

        window.addEventListener('mousedown', handleWindowEvent);
        window.addEventListener('mousemove', handleWindowEvent);
        window.addEventListener('mouseup', handleWindowEvent);
        window.addEventListener('touchstart', handleWindowEvent);
        window.addEventListener('touchmove', handleWindowEvent);
        window.addEventListener('touchend', handleWindowEvent);

        // Text Rendering
        Events.on(render, 'afterRender', () => {
            const ctx = render.context;
            ctx.font = '600 15px Inter, system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            engine.world.bodies.forEach((body: TextBody) => {
                if (body.text) {
                    ctx.save();
                    ctx.translate(body.position.x, body.position.y);
                    ctx.rotate(body.angle);
                    ctx.fillStyle = body.textColor || '#1f2937';
                    ctx.fillText(body.text, 0, 0);
                    ctx.restore();
                }
            });
        });

        const runner = Runner.create();
        Runner.run(runner, engine);
        Render.run(render);

        return () => {
            observer.disconnect();
            window.removeEventListener('mousedown', handleWindowEvent);
            window.removeEventListener('mousemove', handleWindowEvent);
            window.removeEventListener('mouseup', handleWindowEvent);
            window.removeEventListener('touchstart', handleWindowEvent);
            window.removeEventListener('touchmove', handleWindowEvent);
            window.removeEventListener('touchend', handleWindowEvent);
            document.body.style.cursor = 'default';
            Render.stop(render);
            Runner.stop(runner);
            Engine.clear(engine);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[600px] flex flex-col items-center justify-start pt-24 overflow-hidden pointer-events-none"
        >
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 z-10 w-full h-full pointer-events-none"
            />
        </div>
    );
};

export default PhysicsTags;