import './heading2.scss'
import { useRef } from 'react'
import SplitText from './SplitText'
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'
// import { LangToggler } from "../context/language"

const Heading2 = (props: any) => {
    const rubberText: any = useRef(null)
    const rubberWholeText: any = useRef(null)
    // const { lang }: any = LangToggler(null)
    const lang = 'eng'

    useIsomorphicLayoutEffect(() => {
        if (rubberText.current) {
            rubberText.current.querySelectorAll('.letter').forEach((letter: HTMLElement) => {
                letter.addEventListener('mouseenter', () => {
                    letter.classList.add('rubberBand')
                    setTimeout(() => {
                        letter.classList.remove('rubberBand')
                    }, 500)
                })
            })
        }

        if (rubberWholeText.current) {
            rubberWholeText.current.addEventListener('mouseenter', () => {
                rubberWholeText.current.classList.add('rubberBand')
                setTimeout(() => {
                    rubberWholeText.current.classList.remove('rubberBand')
                }, 500)
            })
        }
    }, [lang])
    return (
        <div className="heading2" data-theme={props.theme || "dark"}>
            <h2>
                {props.children}
            </h2>
            {lang == 'eng' || lang == 'ja' || lang == 'es' ?
                <p ref={rubberText}>
                    <SplitText layer={2}>
                        {props.title}
                    </SplitText>
                </p>
                : <p className='text-themeGreen' ref={rubberWholeText}>{props.title}</p>}
        </div>
    )
}

export default Heading2