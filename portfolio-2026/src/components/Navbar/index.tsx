import { useEffect, useRef, useState } from 'react'
import MagneticElement from '../../utils/magneticElement'
import './style.scss'
import { NavpageToggler } from '../../context/openNavpage'
import { useLang } from '../../App'
import Link2 from '../../utils/CustomLinks/Link2'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

gsap.registerPlugin(CustomEase);
if (!CustomEase.get("main")) {
    CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
    gsap.defaults({ ease: "main", duration: 0.7 });
}

// Full language mapping
const LANGUAGES = [
    { code: 'eng', label: 'English' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'ben', label: 'বাংলা' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'spa', label: 'Española' },
    { code: 'ja', label: '日本語' },
    { code: 'nl', label: 'Nederlands' },
    { code: 'de', label: 'Deutsch' }
];

const Navbar = ({ data }: any) => {
    // 1. Fixed Null Error: Safely access context without direct destructuring
    const langContext = useLang()
    const lang = langContext?.lang || 'eng'
    const setLang = langContext?.setLang || (() => { })

    // Safely destructure NavpageToggler just in case
    const navCtx: any = NavpageToggler() || {}
    const toggleNavpage = navCtx.toggleNavpage || (() => { })
    const navpageStatus = navCtx.navpageStatus || false

    const menubar: any = useRef(null)
    const menuClick = () => {
        toggleNavpage()
        if (menubar.current) menubar.current.classList.toggle('active')
    }

    useEffect(() => {
        if (!navpageStatus && menubar.current) {
            menubar.current.classList.remove('active')
        }
    }, [navpageStatus])

    // --- Sidebar Language Logic ---
    const [isSidenavOpen, setIsSidenavOpen] = useState(false)
    const toggleSidenav = () => setIsSidenavOpen(prev => !prev)

    const onLangChange = (value: string) => {
        setLang(value as any)
        setIsSidenavOpen(false) // Close sidebar immediately on selection
    }

    const sidenavContainer = useRef<HTMLDivElement>(null)
    const tl = useRef<gsap.core.Timeline | null>(null)
    const isMounted = useRef(false)

    // Escape key listener
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isSidenavOpen) setIsSidenavOpen(false)
        }
        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [isSidenavOpen])

    // Initialize timeline ONCE
    useEffect(() => {
        tl.current = gsap.timeline();
        return () => {
            tl.current?.kill();
        };
    }, []);

    // Trigger exact open/close sequences on state change
    useEffect(() => {
        if (!tl.current || !sidenavContainer.current) return;

        const q = gsap.utils.selector(sidenavContainer.current);
        const timeline = tl.current;

        if (isSidenavOpen) {
            // lenis?.stop();
            // document.body.style.overflowY = 'hidden';

            timeline.clear()
                // Hide links and overlay instantly
                .set(q("[data-sidenav-link]"), { yPercent: 140, rotate: 10, autoAlpha: 0 })
                .set(q("[data-sidenav-fade]"), { autoAlpha: 0, yPercent: 50 })
                .set(q("[data-sidenav-panel]"), { xPercent: 101 })
                .set(q("[data-sidenav-overlay]"), { autoAlpha: 0 })
                .set(q("[data-sidenav-menu]"), { xPercent: 0 })

                .set(q("[data-sidenav-wrap]"), { display: "block" })

                .to(q("[data-sidenav-overlay]"), { autoAlpha: 1 })
                .to(q("[data-sidenav-panel]"), { xPercent: 0, stagger: 0.12, duration: 0.575 }, "<")
                .to(q("[data-sidenav-link]"), { yPercent: 0, rotate: 0, autoAlpha: 1, stagger: 0.05 }, "<+=0.35")
                .to(q("[data-sidenav-fade]"), { autoAlpha: 1, yPercent: 0, stagger: 0.04 }, "<+=0.2");

        } else if (isMounted.current) {
            // document.body.style.overflowY = 'auto';
            // lenis?.start();

            timeline.clear()
                .to(q("[data-sidenav-overlay]"), { autoAlpha: 0 })
                .to(q("[data-sidenav-menu]"), { xPercent: 120 }, "<")
                .set(q("[data-sidenav-wrap]"), { display: "none" });
        } else {
            // document.body.style.overflowY = 'auto';
            // lenis?.start();
        }

        isMounted.current = true;
    }, [isSidenavOpen]);

    return (
        <div id="Navbar" data-scroll-sticky data-scroll-target="#Main"
            className="top-0 left-0 border-b border-solid border-light flex justify-between w-full fixed z-50">
            <div className="logo border-r border-solid border-light font-black">
                <Link2 to="#root" className='Link cursor-pointer'>
                    <MagneticElement velocity={80}>
                        <div className="nav pointer-events-none">AYAN</div>
                    </MagneticElement>
                </Link2>
            </div>
            <div className="navs flex font-semibold">
                <div className="border-l border-solid border-light">
                    <MagneticElement velocity={40}>
                        <div className='nav Link' onClick={menuClick}>
                            <svg className='menubar pointer-events-none' ref={menubar} width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='line1' d="M0 1L22.7555 1" stroke="white" strokeOpacity="0.96" strokeWidth="2" />
                                <path className='line2' d="M7.82239 9L32.0001 9" stroke="white" strokeOpacity="0.96" strokeWidth="2" />
                                <path className='line3' d="M0 17H22.4" stroke="white" strokeOpacity="0.96" strokeWidth="2" />
                            </svg>
                        </div>
                    </MagneticElement>
                </div>

                <div className="border-l border-solid border-light w-24 h-full relative">
                    <MagneticElement velocity={40}>
                        {/* Acts as the sidebar toggle */}
                        <div className='nav capitalize Link' onClick={toggleSidenav}>
                            _{isSidenavOpen ? 'close' : lang}
                        </div>
                    </MagneticElement>

                    {/* SIDENAV */}
                    <div className="sidenav" ref={sidenavContainer}>
                        <div data-sidenav-wrap data-nav-state={isSidenavOpen ? "open" : "closed"} className="sidenav__nav">
                            <div data-sidenav-overlay data-sidenav-toggle className="sidenav__overlay" onClick={toggleSidenav}></div>
                            <nav data-sidenav-menu data-nav-state={isSidenavOpen ? "open" : "closed"} className="sidenav__menu">
                                <div className="sidenav__menu-bg">
                                    <div className='z-100 absolute top-6 right-6 text-black cursor-pointer hover:scale-110 transition-all duration-300' onClick={toggleSidenav}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </div>
                                    <div data-sidenav-panel className="sidenav__menu-bg-panel is--first"></div>
                                    <div data-sidenav-panel className="sidenav__menu-bg-panel is--second"></div>
                                    <div data-sidenav-panel className="sidenav__menu-bg-panel"></div>
                                </div>
                                <div className="sidenav__menu-inner h-full max-h-dvh overflow-y-auto scrollbar-hide">
                                    <ul className="sidenav__menu-list">
                                        {LANGUAGES.map((item, i) => (
                                            <li className="sidenav__menu-list-item" key={item.code}>
                                                <a
                                                    data-sidenav-link
                                                    href="#"
                                                    className="sidenav__menu-link"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        onLangChange(item.code);
                                                    }}
                                                >
                                                    <p className="sidenav__menu-link-heading">{item.label}</p>
                                                    <p className="sidenav__menu-link-eyebrow">{(i + 1).toString().padStart(2, '0')}</p>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="border-l border-solid border-light hidden sm:block">
                    <Link2 to="#Contact">
                        <MagneticElement velocity={80}>
                            <div className="nav Link">
                                <div className="contactBtn pointer-events-none">
                                    {data.cta}
                                </div>
                            </div>
                        </MagneticElement>
                    </Link2>
                </div>
            </div>
        </div>
    )
}

export default Navbar