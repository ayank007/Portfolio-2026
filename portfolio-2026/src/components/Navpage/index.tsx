import {useRef} from 'react'
import gsap from "gsap"
import { useIsomorphicLayoutEffect } from "../../useIsomorphicLayoutEffect"

import './style.scss'
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud"
import RollingText from '../../utils/RollingText'

import { NavpageToggler } from '../../context/openNavpage'
import Link2 from '../../utils/CustomLinks/Link2'

function Navpage() {
    const { navpageStatus }:any = NavpageToggler()
    const menu:any = useRef()

    useIsomorphicLayoutEffect(()=>{
        let menuTL = gsap.timeline().set(".menu ul", {
            autoAlpha: 1,
        })

        const menuItems = menu.current.querySelectorAll('li')
        menuItems.forEach((item:any) => {
            const imgWrapper = item.querySelector('.imgWrapper')
            const imgWrapperBounds = imgWrapper.getBoundingClientRect()
            const itemBounds = item.getBoundingClientRect()

            const mouseEnter = () => {
                gsap.set(imgWrapper, {
                    scale: 0.8,
                    xPercent: 25,
                    yPercent: 50,
                    opacity: 0,
                    rotation: -15,
                })
                gsap.to(imgWrapper, {
                    opacity: 1,
                    scale: 1,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                })
            }

            const mouseLeave = () => {
                gsap.to(imgWrapper, {
                    opacity: 0,
                    scale: 0.8,
                    xPercent: 25,
                    yPercent: 50,
                    rotation: -15,
                })
            }
            const mouseMove = ({x, y}:any) => {
                let yOffset = itemBounds.top / imgWrapperBounds.height
                yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset)
                
                gsap.to(imgWrapper, {
                    duration: 1.25,
                    x: Math.abs(x - itemBounds.left) - imgWrapperBounds.width / 1.55,
                    y: Math.abs(y - itemBounds.top) - 420 + yOffset / 1.1,
                    // y: Math.abs(y - itemBounds.top) - imgWrapperBounds.height / 3 - yOffset,
                })
            }

            item.addEventListener('mouseenter', mouseEnter)
            item.addEventListener('mouseleave', mouseLeave)
            item.addEventListener('mousemove', mouseMove)
        })
    }, [])

    return (
        <section id='Navpage' className={navpageStatus ? 'active' : ''}>
            <div className="menu w-1/2 flex1" ref={menu}>
                <ul>
                    <li>
                        <div className='imgWrapper'>
                            <div className="imgBg">
                                <img src="/projects/portfolio.png" alt="" />
                            </div>
                        </div>
                        <Link2 to={'Home'}>
                            <span>01.</span>
                            <RollingText title="Home" />
                        </Link2>
                    </li>
                    <li>
                        <div className='imgWrapper'>
                            <div className="imgBg">
                                <img src="./skillsandexperience.png" alt="" />
                            </div>
                        </div>
                        <Link2 to={'#SkillsAndExperience'}>
                            <span>02.</span> 
                            <RollingText title="Skills &nbsp; &&nbsp;  Experience" />
                        </Link2>
                    </li>
                    <li>
                        <div className='imgWrapper'>
                            <div className="imgBg">
                                <img src="./about.png" alt="" />
                            </div>
                        </div>
                        <Link2 to={"#About"}>
                            <span>03.</span> 
                            <RollingText title="About&nbsp;  Me" />
                        </Link2>
                    </li>
                    <li>
                        <div className='imgWrapper'>
                            <div className="imgBg">
                                <img src="./cv.png" alt="" />
                            </div>
                        </div>
                        <Link2 to={"#CV"}>
                            <span>04.</span> 
                            <RollingText title="Download&nbsp;  CV" />
                        </Link2>
                    </li>
                    <li>
                        <div className='imgWrapper'>
                            <div className="imgBg">
                                <img src="./contact.png" alt="" />
                            </div>
                        </div>
                        <Link2 to={"#Contact"}>
                            <span>05.</span> 
                            <RollingText title="Contact" />
                        </Link2>
                    </li>
                </ul>
            </div>
            <div className="skills w-1/2 flex1">
                <div className="filter"></div>
                <TagCloud
                    options={(w: Window & typeof globalThis): TagCloudOptions => ({
                        radius: 200,
                        maxSpeed: "fast",
                    })}
                >
                    {[
                        "SASS",
                        "TypeScript",
                        "React",
                        "Vue",
                        "Vite",
                        "PHP",
                        "Next",
                        "Redux",
                        "JQuery",
                        "C",
                        "REST",
                        "Lighthouse",
                        "Svelte",
                        "GIT",
                        "JavaScript",
                        "Photoshop",
                        "Python",
                        "GSAP",
                        "Figma",
                        "Svelte",
                        "Excel",
                        "SEO",
                        "Tailwind",
                        "XD",
                        "SQL",
                        "Powerpoint",
                        "Flutter",
                    ]}
                </TagCloud>
            </div>
        </section>
    )
}

export default Navpage
