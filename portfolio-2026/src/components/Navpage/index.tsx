import { useRef } from 'react'
import gsap from "gsap"
import { useIsomorphicLayoutEffect } from "../../useIsomorphicLayoutEffect"

import './style.scss'
import RollingText from '../../utils/RollingText'

import { NavpageToggler } from '../../context/openNavpage'
import Link2 from '../../utils/CustomLinks/Link2'
import Sphere from './TagCloud'
import MagneticElement from '../../utils/magneticElement'

function Navpage({ data }: any) {
    const { navpageStatus }: any = NavpageToggler()
    const containerRef = useRef<HTMLDivElement>(null)


    useIsomorphicLayoutEffect(() => {
        // Create a GSAP Context to handle all scoped animations and cleanups
        let ctx = gsap.context(() => {
            const follower = document.querySelector('.cursor-follower');
            const workItems = document.querySelectorAll('.work-item');
            const workList = document.querySelector('.work-list');
            const hoverBg = document.querySelector('.hover-reveal-bg');
            const images = document.querySelectorAll('.cursor-follower img');
            let activeImage: HTMLElement | null = null;

            // Initialize images
            gsap.set(images, { yPercent: 101 });

            // QuickTo is great for mouse followers
            const xTo = gsap.quickTo(follower, "x", { duration: 0.5, ease: "power3" });
            const yTo = gsap.quickTo(follower, "y", { duration: 0.5, ease: "power3" });

            const onMouseMove = (e: MouseEvent) => {
                xTo(e.clientX);
                yTo(e.clientY);
            };

            window.addEventListener("mousemove", onMouseMove);

            workItems.forEach((item: any) => {
                const handleMouseEnter = () => {
                    const imgId = item.getAttribute('data-img');
                    const nextImg = document.getElementById(imgId);

                    // Reveal background pill
                    gsap.to(hoverBg, {
                        top: item.offsetTop,
                        height: item.offsetHeight,
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out"
                    });

                    // Reveal image follower
                    gsap.to(follower, { autoAlpha: 1, scale: 1, duration: 0.3 });

                    if (nextImg && activeImage !== nextImg) {
                        gsap.fromTo(nextImg,
                            { yPercent: 101, zIndex: 2 },
                            { yPercent: 0, duration: 0.4, ease: "power2.out" }
                        );
                        if (activeImage) {
                            gsap.to(activeImage, { yPercent: -101, zIndex: 1, duration: 0.4, ease: "power2.out" });
                        }
                        activeImage = nextImg;
                    }
                };

                item.addEventListener('mouseenter', handleMouseEnter);
            });

            const handleMouseLeave = () => {
                gsap.to(hoverBg, { opacity: 0, duration: 0.3 });
                gsap.to(follower, { autoAlpha: 0, scale: 0.8, duration: 0.3 });
            };

            workList?.addEventListener('mouseleave', handleMouseLeave);

        }, containerRef); // Scope everything to this component

        return () => ctx.revert(); // Cleanup EVERYTHING (listeners, animations) on unmount
    }, []);

    return (
        <section id='Navpage' ref={containerRef} className={navpageStatus ? 'active' : ''}>
            <div className="cursor-follower">
                <img id="img-1" className="absolute w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" alt="" />
                <img id="img-2" className="absolute w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" alt="" />
                <img id="img-3" className="absolute w-full h-full object-cover" src="https://images.unsplash.com/photo-1574169208507-84376194878b?q=80&w=1000&auto=format&fit=crop" alt="" />
                <img id="img-4" className="absolute w-full h-full object-cover" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop" alt="" />
            </div>
            <div className="menu w-1/2 flex1 flex-col">
                <ul className='work-list'>
                    <div className="hover-reveal-bg"></div>
                    <li className='work-item' data-img="img-1">
                        <Link2 to={'Home'}>
                            <span>01.</span>
                            <RollingText title={data.home} />
                        </Link2>
                    </li>
                    <li className='work-item' data-img="img-4">
                        <Link2 to={'#Projects'}>
                            <span>02.</span>
                            <RollingText title={data.projects} />
                        </Link2>
                    </li>
                    <li className='work-item' data-img="img-2">
                        <Link2 to={'#Experience'}>
                            <span>03.</span>
                            <RollingText title={data.experience} />
                        </Link2>
                    </li>
                    <li className='work-item' data-img="img-3">
                        <Link2 to={"#About"}>
                            <span>04.</span>
                            <RollingText title={data.about} />
                        </Link2>
                    </li>
                </ul>
                <div className='mt-10 mb-14'>
                    <MagneticElement>
                        <Link2 to="#Contact">
                            <div className='bg-white text-[#181818] px-10 py-3 font-semibold text-xl rounded-full'>{data.contact}</div>
                        </Link2>
                    </MagneticElement>
                </div>
            </div>
            <div className="skills w-1/2 flex1">
                <div className="filter"></div>
                <Sphere />
            </div>
        </section>
    )
}

export default Navpage