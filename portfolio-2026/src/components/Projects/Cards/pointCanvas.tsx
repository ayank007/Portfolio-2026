import { useRef } from "react"
import { useIsomorphicLayoutEffect } from "../../../useIsomorphicLayoutEffect"

const PointCanvas = (props: any) => {
    const pointCanvas1 = useRef(null)
    const pointCanvas: any = pointCanvas1.current
    if (pointCanvas == null) {
        return
    }
    // const pointCanvas:any = document.getElementById('PointCanvas')

    const pointCanvasRect = pointCanvas.getBoundingClientRect()

    console.log(pointCanvasRect);

    const pointCanvasTop = pointCanvasRect.top + 0
    // const pointCanvasTop = pointCanvasRect.top + window.pageYOffset


    let mouseDotX: any = undefined
    let mouseDotY: any = undefined

    let particlesArray: any = []

    interface Point {
        x: any,
        y: any,
        color: any,
        minSize: any,
        currSize: any,
        maxSize: any
    }

    class Point {
        constructor(x: any, y: any) {
            this.x = x
            this.y = y
            this.color = 'white'
            this.minSize = 1
            this.maxSize = 8
            this.currSize = 1
        }

        update(size: any) {
            if (size < this.minSize) {
                this.currSize = this.minSize
            } else {
                this.currSize = size
            }
            gridCtx.beginPath()
            gridCtx.fillStyle = this.color
            gridCtx.arc(this.x, this.y, this.currSize, 0, Math.PI * 2)
            gridCtx.fill()
        }

        draw(size = this.minSize) {
            gridCtx.beginPath()
            gridCtx.fillStyle = this.color
            gridCtx.arc(this.x, this.y, this.minSize, 0, Math.PI * 2)
            gridCtx.fill()
        }
    }

    interface Grid {
        x: any,
        y: any,
        gap: any,
        cols: any,
        rows: any,
    }
    class Grid {
        constructor(pointCanvas: any) {
            this.x = 0
            this.y = 0
            this.gap = 20
            this.cols = Math.ceil(pointCanvas.width / this.gap)
            this.rows = Math.ceil(pointCanvas.height / this.gap)
            this.#createGrid();
        }

        #createGrid() {
            for (let i = 0; i < this.rows; i++) {
                this.x = 0
                for (let j = 0; j < this.cols; j++) {
                    particlesArray.push(new Point(this.x, this.y))
                    this.x += this.gap
                }
                this.y += this.gap
            }
        }

        draw() {
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].draw();
            }
        }
    }

    const newDotGrid = new Grid(pointCanvas);
    newDotGrid.draw();

    document.addEventListener('mousemove', (mouse) => {
        mouseDotX = mouse.x - pointCanvasRect.left
        mouseDotY = mouse.y - pointCanvasTop
    });

    function updateall() {
        for (let i = 0; i < particlesArray.length; i++) {
            // Calculate distance between mouse and points
            let x_diff = mouseDotX - particlesArray[i].x
            let y_diff = mouseDotY - particlesArray[i].y
            let dist = Math.sqrt(x_diff * x_diff + y_diff * y_diff)
            if (dist < 300) {
                particlesArray[i].update(8 - (dist / 20))
            } else {
                particlesArray[i].update(1)
            }
        }
    }
    const gridCtx = pointCanvas.getContext('2d')
    useIsomorphicLayoutEffect(() => {
        function animate() {
            gridCtx.fillStyle = 'rgba(27, 182, 209, 0.5)'
            // gridCtx.fillStyle = 'rgba(0,0,0,1)'
            gridCtx.fillRect(0, 0, pointCanvas.width, pointCanvas.height)
            updateall(); // animate
            requestAnimationFrame(animate)
        }

        animate()
    }, [])

    return (
        <div id="PointCanvas" ref={pointCanvas1} className={props.class1}></div>
    )
}

export default PointCanvas