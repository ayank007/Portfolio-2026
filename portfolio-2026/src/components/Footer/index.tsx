import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './style.scss'

import './aquarium.scss'
import './desk.scss'
import './watch.scss'
import './cat.scss'

import football from '../../assets/footer/football.png'
import ronaldo from '../../assets/footer/cr7.png'
import messi from '../../assets/footer/messi.png'
import virat from '../../assets/footer/virat kohli.png'
import { useIsomorphicLayoutEffect } from '../../useIsomorphicLayoutEffect'

gsap.registerPlugin(ScrollTrigger);

const Footer = ({ data }: any) => {
    const deg = 6
    const hour: any = useRef(null)
    const min: any = useRef(null)
    const sec: any = useRef(null)

    useIsomorphicLayoutEffect(() => {

        const setClock = () => {
            let day = new Date()
            let hh = day.getHours() * 30
            let mm = day.getMinutes() * deg
            let ss = day.getSeconds() * deg

            // if (hour.current == null || min.current == null || sec.current == null) {
            //     return
            // }
            if (hour.current && min.current && sec.current) {
                hour.current.style.transform = `rotateZ(${hh + mm / 12}deg)`
                min.current.style.transform = `rotateZ(${mm}deg)`
                sec.current.style.transform = `rotateZ(${ss}deg)`
            }
        }

        // first time
        setClock()

        const intervalId = setInterval(setClock, 1000);

        // CLEANUP: Stop the interval when the component is destroyed
        return () => clearInterval(intervalId);

    }, []);

    const container = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Adjusting start/end for a footer reveal effect
            gsap.fromTo(".footerContainer",
                { y: -150, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: true,
                        pinSpacing: false,
                        invalidateOnRefresh: true,
                    }
                }
            );
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <footer id="Footer" className="z-10 bg-gray-950 overflow-hidden" ref={container}>
            <div className='mainContainer px-base footerContainer h-full w-full'>
                <div id="Aquarium" className='hidden md:flex'>
                    <div className="window">
                        <div className="fishtank_wrap">
                            <div className="fishtank">
                                <div className="bubble_wrap">
                                    <div className="bubbles b0"></div>
                                    <div className="bubbles b1"></div>
                                    <div className="bubbles b2"></div>
                                    <div className="bubbles b3"></div>
                                    <div className="bubbles b4"></div>
                                    <div className="bubbles b5"></div>
                                </div>
                                <div className="bubble_wrap bw2">
                                    <div className="bubbles b6"></div>
                                    <div className="bubbles b7"></div>
                                    <div className="bubbles b8"></div>
                                </div>
                                <div className="water"></div>
                                <div className="fish_wrap">
                                    <div className="fred">
                                        <div className="top_fin"></div>
                                        <div className="tail_fin"></div>
                                        <div className="fish_body">
                                            <div className="eye"></div>
                                            <div className="scale_1"></div>
                                            <div className="scale_2"></div>
                                            <div className="scale_3"></div>
                                            <div className="scale_4"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="fish">
                                    <div className="top-fin"></div>
                                    <div className="fish-body"></div>
                                    <div className="tail-fin"></div>
                                    <div className="side-fin"></div>
                                    <div className="scale scale-1"></div>
                                    <div className="scale scale-2"></div>
                                    <div className="scale scale-3"></div>
                                </div>
                                <div className="fish blue-fish">
                                    <div className="top-fin"></div>
                                    <div className="fish-body"></div>
                                    <div className="tail-fin"></div>
                                    <div className="side-fin"></div>
                                    <div className="scale scale-1"></div>
                                    <div className="scale scale-2"></div>
                                    <div className="scale scale-3"></div>
                                </div>
                                <div className="ground"></div>
                                <div className="rock_1"></div>
                                <div className="rock_2"></div>
                                <div className="rock_3"></div>
                                <div className="rock_4"></div>
                                <div className="rock_5"></div>
                                <div className="plant_1_wrap">
                                    <div className="plant_1"></div>
                                    <div className="plant_2"></div>
                                    <div className="plant_3"></div>
                                </div>
                                <div className="plant_2_wrap">
                                    <div className="plant_4"></div>
                                    <div className="plant_5"></div>
                                </div>
                                <div className="long_plant">
                                    <div className="l_plant_1"></div>
                                    <div className="l_plant_2"></div>
                                    <div className="l_plant_3"></div>
                                </div>
                                <div className="long_plant2">
                                    <div className="l_plant_2"></div>
                                    <div className="l_plant_3"></div>
                                </div>
                                <div className="water"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="desk-container">
                    <div className="cat">
                        <div className="body"></div>
                        <div className="head">
                            <div className="ear"></div>
                            <div className="ear"></div>
                        </div>
                        <div className="face">
                            <div className="nose"></div>
                            <div className="whisker-container">
                                <div className="whisker"></div>
                                <div className="whisker"></div>
                            </div>
                            <div className="whisker-container">
                                <div className="whisker"></div>
                                <div className="whisker"></div>
                            </div>
                        </div>
                        <div className="tail-container">
                            <div className="tail">
                                <div className="tail">
                                    <div className="tail">
                                        <div className="tail">
                                            <div className="tail">
                                                <div className="tail">
                                                    <div className="tail"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="desk">
                        <div className="longer"></div>
                        <div className="slide">
                            <div className="slide-one"></div>
                            <div className="slide-two"></div>
                        </div>
                        <div className="flower">
                            <div className="bud">
                                <div className="bud-inside"></div>
                            </div>
                            <div className="stem">
                                <div className="leaf-row-one"></div>
                                <div className="leaf-row-two"></div>
                            </div>
                            <div className="pot"></div>
                        </div>
                        <div className="chair"></div>
                        <div className="chair-holder"></div>
                        <div className="imac">
                            <div className="black-side">
                                <div className="goodbyeMsg">{data}</div>
                            </div>
                            <div className="butt"></div>
                            <div className="holder"></div>
                            <div className="note"></div>
                        </div>
                        <div className="kettle">
                            <div className="top"></div>
                            <div className="bottom"></div>
                            <div className="handle"></div>
                            <div className="other-stuff"></div>
                        </div>
                        <div className="cup">
                            <div className="vapour">
                                <span style={{ "--v": 1 } as React.CSSProperties}></span>
                                <span style={{ "--v": 2 } as React.CSSProperties}></span>
                                <span style={{ "--v": 5 } as React.CSSProperties}></span>
                                <span style={{ "--v": 4 } as React.CSSProperties}></span>
                                <span style={{ "--v": 6 } as React.CSSProperties}></span>
                                <span style={{ "--v": 19 } as React.CSSProperties}></span>
                                <span style={{ "--v": 7 } as React.CSSProperties}></span>
                                <span style={{ "--v": 8 } as React.CSSProperties}></span>
                                <span style={{ "--v": 9 } as React.CSSProperties}></span>
                                <span style={{ "--v": 10 } as React.CSSProperties}></span>
                                <span style={{ "--v": 11 } as React.CSSProperties}></span>
                                <span style={{ "--v": 18 } as React.CSSProperties}></span>
                            </div>
                        </div>
                        <div className="board">
                            Today jobs
                            <ul>
                                <li>Watch football</li>
                                <li>Learn new stuff</li>
                                <li>finish that book</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="library absolute bottom-0 left-0 hidden md:flex">
                    <div></div>
                </div>
                <img src={football} alt="" className='football' />
                <div id="Window"><div></div></div>
                <div className="clock right-4 lg:right-[200px] hidden md:flex">
                    <div className="hour" ref={hour}></div>
                    <div className="min" ref={min}></div>
                    <div className="sec" ref={sec}></div>
                </div>
                <div className="messi">
                    <img src={messi} alt="" />
                </div>
                <div className="ronaldo">
                    <img src={ronaldo} alt="" />
                </div>
                <div className='viratKohli'>
                    <img src={virat} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
