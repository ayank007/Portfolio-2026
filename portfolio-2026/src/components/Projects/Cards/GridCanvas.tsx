import { useRef, useEffect, Children } from 'react';

interface Point {
    x: number;
    y: number;
    color: string;
    minSize: number;
    maxSize: number;
    currSize: number;
}

interface Props {
    height: number;
    width: number;
}

const GridCanvas = (data: any) => {
    const height = data.height;
    const width = data.width;
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesArrayRef = useRef<Point[]>([]);
    const mouseDotXRef = useRef<number | undefined>(undefined);
    const mouseDotYRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const canvasRect = canvas.getBoundingClientRect();
        const canvasTop = canvasRect.top + window.pageYOffset;
        const ctx: any = canvas.getContext('2d');
        const gap = 20;
        const cols = Math.ceil(width / gap);
        const rows = Math.ceil(height / gap);

        const createGrid = () => {
            let x = 0;
            let y = 0;
            for (let i = 0; i < rows; i++) {
                x = 0;
                for (let j = 0; j < cols; j++) {
                    particlesArrayRef.current.push({
                        x,
                        y,
                        color: 'white',
                        minSize: 1,
                        maxSize: 8,
                        currSize: 1,
                    });
                    x += gap;
                }
                y += gap;
            }
        };

        const updatePoint = (point: Point, size: number) => {
            if (size < point.minSize) {
                point.currSize = point.minSize;
            } else {
                point.currSize = size;
            }
            ctx.beginPath();
            ctx.fillStyle = point.color;
            ctx.arc(point.x, point.y, point.currSize, 0, Math.PI * 2);
            ctx.fill();
        };

        const drawPoint = (point: Point, size = point.minSize) => {
            ctx.beginPath();
            ctx.fillStyle = point.color;
            ctx.arc(point.x, point.y, point.minSize, 0, Math.PI * 2);
            ctx.fill();
        };

        const updateAll = () => {
            for (let i = 0; i < particlesArrayRef.current.length; i++) {
                const point = particlesArrayRef.current[i];
                // Calculate distance between mouse and points
                const x_diff = mouseDotXRef.current! - point.x;
                const y_diff = mouseDotYRef.current! - point.y;
                const dist = Math.sqrt(x_diff * x_diff + y_diff * y_diff);
                if (dist < 300) {
                    updatePoint(point, 8 - dist / 20);
                } else {
                    updatePoint(point, 1);
                }
            }
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(27, 182, 209, 0.5)';
            ctx.fillRect(0, 0, width, height);
            updateAll(); // animate
            requestAnimationFrame(animate);
        };

        canvas.height = height;
        canvas.width = width;
        createGrid();
        animate();

        const handleMouseMove = (e: MouseEvent) => {
            mouseDotXRef.current = e.clientX - canvasRect.left;
            mouseDotYRef.current = e.clientY - canvasTop;
        };
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [height, width]);

    return (
        <div className={data.class1}>
            <canvas ref={canvasRef} id="GridCanvas" className='absolute inset-0' />
            {data.children}
        </div>
    );
};

export default GridCanvas;
//
// const updateall = () => {
//     for (let i = 0; i < particlesArray.length; i++) {
//         // Calculate distance between mouse and points
//         const x_diff = mouseDotX - particlesArray[i].x;
//         const y_diff = mouseDotY - particlesArray[i].y;
//         const dist = Math.sqrt(x_diff * x_diff + y_diff * y_diff);
//         if (dist < 300) {
//             particlesArray[i].update(8 - dist / 20);
//         } else {
//             particlesArray[i].update(1);
//         }
//     }
// };

// const animate = () => {
//     gridCtx.fillStyle = "rgba(27, 182, 209, 0.5)";
//     gridCtx.fillRect(0, 0, gridCanvas.width, gridCanvas.height);
//     updateall();
//     requestAnimationFrame(animate);
// };

// useEffect(() => {
//     const gridCanvas = canvasRef.current!;
//     gridCanvas.height = 400;
//     gridCanvas.width = 300;

//     const gridCanvasRect = gridCanvas.getBoundingClientRect();
//     const gridCanvasTop = gridCanvasRect.top + window.pageYOffset;
//     const gridCtx = gridCanvas.getContext("2d")!;

//     let mouseDotX = undefined;
//     let mouseDotY = undefined;

//     let particlesArray: Point[] = [];

//     const newDotGrid = new Grid(gridCanvas);
//     newDotGrid.draw();

//     document.addEventListener("mousemove", (mouse) => {
//         mouseDotX = mouse.x - gridCanvasRect.left;
//         mouseDotY = mouse.y - gridCanvasTop;
//     });

//     animate();

//     return () => {
//         document.removeEventListener("mousemove", () => { });
//     };
// }, []);
// 