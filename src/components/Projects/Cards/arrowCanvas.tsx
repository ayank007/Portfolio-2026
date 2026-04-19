import { useEffect } from "react"
import './arrowCanvas.scss'

const ArrowCanvas = (props: any) => {

    useEffect(() => {
        const ArrowCanvas = document.getElementById('ArrowCanvas')
        if (ArrowCanvas == null) {
            return
        }
        const ArrowCanvasRect = ArrowCanvas.getBoundingClientRect()

        let gap = 40
        let cols = Math.ceil(ArrowCanvasRect.width / gap);
        let rows = Math.ceil(ArrowCanvasRect.height / gap);

        let grid = ''
        for (let i = 0; i < rows; i++) {
            let row = ''
            for (let j = 0; j < cols; j++) {
                row += '<div class="arrow">←</div>'
            }
            grid += `<div>${row}</div>`
        }
        ArrowCanvas.innerHTML = grid

        function angle(cx: number, cy: number, ex: number, ey: number) {
            const dy = ey - cy
            const dx = ex - cx
            const rad = Math.atan2(dy, dx)
            const deg = rad * 180 / Math.PI
            return deg
        }

        // defining anchor 
        // const anchor = document.getElementById('anchor')

        const arrows = document.querySelectorAll<HTMLElement>('.arrow')

        let mouseX: any = undefined
        let mouseY: any = undefined

        document.addEventListener('mousemove', e => {
            mouseX = e.clientX
            mouseY = e.clientY

            arrows.forEach(arrow => {
                const arrowRekt = arrow.getBoundingClientRect()
                const anchorX = arrowRekt.left + arrowRekt.width / 2
                const anchorY = arrowRekt.top + arrowRekt.height / 2
                const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)
                arrow.style.transform = `rotate(${angleDeg}deg)`
            })
        })
    }, [])

    return (
        <div className={props.class1}>
            <div id="ArrowCanvas" className="absolute w-full h-full inset-0"></div>
            {props.children}
        </div>
    )
}

export default ArrowCanvas