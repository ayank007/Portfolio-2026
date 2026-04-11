import './heading2.scss'
import { useRef } from 'react'
import SplitText from './SplitText'
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'
import { useLang } from "../App";

const Heading2 = (props: any) => {
    const rubberText = useRef<HTMLParagraphElement>(null)
    const rubberWholeText = useRef<HTMLParagraphElement>(null)

    const { lang } = useLang() || { lang: 'eng' };

    useIsomorphicLayoutEffect(() => {
        const textEl = rubberText.current;
        const wholeTextEl = rubberWholeText.current;

        // 1. Use animationend instead of setTimeout
        const handleAnimationEnd = (e: Event) => {
            (e.target as HTMLElement).classList.remove('rubberBand');
        };

        const handleMouseEnter = (e: Event) => {
            (e.target as HTMLElement).classList.add('rubberBand');
        };

        const letters = textEl?.querySelectorAll('.letter');

        // 2. Attach listeners safely
        letters?.forEach((letter) => {
            letter.addEventListener('mouseenter', handleMouseEnter);
            letter.addEventListener('animationend', handleAnimationEnd);
        });

        if (wholeTextEl) {
            wholeTextEl.addEventListener('mouseenter', handleMouseEnter);
            wholeTextEl.addEventListener('animationend', handleAnimationEnd);
        }

        // 3. Cleanup to prevent memory leaks and stacked listeners
        return () => {
            letters?.forEach((letter) => {
                letter.removeEventListener('mouseenter', handleMouseEnter);
                letter.removeEventListener('animationend', handleAnimationEnd);
            });
            if (wholeTextEl) {
                wholeTextEl.removeEventListener('mouseenter', handleMouseEnter);
                wholeTextEl.removeEventListener('animationend', handleAnimationEnd);
            }
        };
    }, [lang])

    return (
        <div className="heading2" data-theme={props.theme || "dark"}>
            <h2>{props.children}</h2>
            {lang === 'eng' || lang === 'ja' || lang === 'spa' ? (
                <p ref={rubberText}>
                    <SplitText layer={2}>
                        {props.title}
                    </SplitText>
                </p>
            ) : (
                <p className="text-themeGreen" ref={rubberWholeText}>
                    {props.title}
                </p>
            )}
        </div>
    )
}

export default Heading2