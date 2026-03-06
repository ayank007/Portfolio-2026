import { useRef } from 'react'
import { gsap, Power2 } from 'gsap'
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect"

import './magneticElement.scss'

const magneticEvent = (e: any, container: any, target: any, velocity: number = 100) => {
    var boundingRect = container.getBoundingClientRect()
    var relX = e.pageX - boundingRect.left
    var relY = e.pageY - window.scrollY - boundingRect.top
    gsap.to(target, {
        x: (relX - boundingRect.width / 2) / boundingRect.width * velocity,
        y: (relY - boundingRect.height / 2) / boundingRect.width * velocity,
        ease: Power2.easeOut,
        duration: 0.3,
    })
}

const MagneticElement = (props: any) => {

    const className = props.padding ? 'paddedElement' : ''

    const magneticBg: any = useRef(null)
    const magneticElement: any = useRef(null)

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (magneticBg == null || magneticBg.current == null) {
                return () => ctx.revert()
            }
            magneticBg.current.addEventListener('mouseleave', () => {
                gsap.to(magneticElement.current, {
                    x: 0,
                    y: 0,
                    ease: Power2.easeOut,
                    duration: 0.3,
                })
            })
            magneticBg.current.addEventListener('mousemove', (e: Event) => {
                magneticEvent(e, magneticBg.current, magneticElement.current, props.velocity)
            })

        })

        return () => ctx.revert()
    }, [])

    return (
        <div className={'magneticBg Link ' + className} ref={magneticBg}>
            <div ref={magneticElement} className='magneticElement'>
                {props.children}
            </div>
        </div>
    )
}

export default MagneticElement