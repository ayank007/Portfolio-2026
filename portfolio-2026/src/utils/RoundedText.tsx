import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect"
import gsap from "gsap"
import SplitText from './SplitText'

import './RoundedText.scss'

const RoundedText = (props: any) => {
    const titleRef: any = useRef(null)
    const rtRef: any = useRef(null)

    const brand = props.brand
    const roundedTextCon = `${brand} • ${brand} • ${brand} • ${brand} • `
    const deg = 360 / roundedTextCon.length

    useIsomorphicLayoutEffect(() => {
        titleRef.current.querySelectorAll('.letter').forEach((letter: HTMLElement, index: number) => {
            letter.style.transform = `rotate(${deg * index}deg)`
        })
    }, [])

    const rotateAnim = useRef<gsap.core.Tween | null>(null); const startRotating = () => {
        console.log("start");

        rotateAnim.current = gsap.to(titleRef.current, {
            rotation: "-=360",
            duration: 6,
            repeat: -1,
            ease: "none",
            overwrite: true
        });

    }
    const stopRotating = () => {
        console.log("stop");

        // clearInterval(interval)
        if (rotateAnim.current) rotateAnim.current.pause();
    }

    return (
        <div className={"roundedText " + brand} ref={rtRef} onMouseEnter={startRotating} onMouseLeave={stopRotating}>
            <a rel="noopener noreferrer" href={props.link} target="_blank">
                <div ref={titleRef} className='title'>
                    <SplitText>
                        {roundedTextCon}
                    </SplitText>
                </div>
                <div className="icon">
                    {props.children}
                </div>
            </a>
        </div>
    )
}

export default RoundedText