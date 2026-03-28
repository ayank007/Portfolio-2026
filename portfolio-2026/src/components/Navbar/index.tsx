import {useEffect, useRef} from 'react'
import MagneticElement from '../../utils/magneticElement'
import './style.scss'
import { NavpageToggler } from '../../context/openNavpage'
import { LangToggler } from '../../context/language'
import Link2 from '../../utils/CustomLinks/Link2'

const Navbar = () => {
    const { lang, toggleLang }:any = LangToggler()
    const { toggleNavpage, navpageStatus }:any = NavpageToggler()

    const langMenu:any = useRef()
    const toggleLangMenu = () => {
        langMenu.current.classList.toggle('active')
    }

    const menubar:any = useRef()
    const menuClick = () => {
        toggleNavpage()
        menubar.current.classList.toggle('active')
    }

    useEffect(()=>{
        if (!navpageStatus) {
            menubar.current.classList.remove('active')
        }
    },[navpageStatus])

    const onLangChange = (value:String) => {
        setTimeout(() => {
            langMenu.current.classList.remove('active')
        }, 200)
        toggleLang(value)
    }

    return (
        <div id="Navbar" data-scroll-sticky data-scroll-target="#Main" 
        className="top-0 left-0 border-b border-solid border-light flex justify-between w-full fixed">
            <div className="logo border-r border-solid border-light font-black">
                <Link2 to="#root" className='Link cursor-pointer'>
                    <MagneticElement velocity={80}>
                        <div className="nav pointer-events-none">
                            AYAN
                        </div>
                    </MagneticElement>
                </Link2>
            </div>
            <div className="navs flex font-semibold">
                <div className="border-l border-solid border-light">
                    <MagneticElement velocity={40}>
                        <div className='nav Link' onClick={menuClick}>
                            <svg className='menubar pointer-events-none' ref={menubar} width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='line1' d="M0 1L22.7555 1" stroke="white" strokeOpacity="0.96" strokeWidth="2"/>
                                <path className='line2' d="M7.82239 9L32.0001 9" stroke="white" strokeOpacity="0.96" strokeWidth="2"/>
                                <path className='line3' d="M0 17H22.4" stroke="white" strokeOpacity="0.96" strokeWidth="2"/>
                            </svg>
                        </div>
                    </MagneticElement>
                </div>
                <div className="border-l border-solid border-light w-20 h-full">
                    <MagneticElement velocity={40}>
                        <div className='nav capitalize Link' onClick={toggleLangMenu}>_{lang}</div>
                    </MagneticElement>
                    <div className="languageMenu border-light border border-solid" ref={langMenu}>
                        <label>
                            <p>English</p>
                            <input 
                                type="radio" name="lang" value='eng'
                                checked={lang=='eng'}
                                onChange={()=>onLangChange('eng')} 
                            />
                            <div className='customRadio'></div>
                        </label>
                        <label>
                            <p>বাংলা</p>
                            <input 
                                type="radio" name="lang" 
                                value='ben' 
                                checked={lang=='ben'} 
                                onChange={()=>onLangChange('ben')} 
                            />
                            <div className='customRadio'></div>
                        </label>
                        {/* <label>
                            <p>Deutsch</p>
                            <input type="radio" name="lang" value='de' />
                            <div className='customRadio'></div>
                        </label> */}
                        <label>
                            <p>हिन्दी</p>
                            <input 
                                type="radio" name="lang" 
                                value='hi' 
                                checked={lang=='hi'}
                                onChange={()=>onLangChange('hi')} 
                            />
                            <div className='customRadio'></div>
                        </label>
                        <label>
                            <p>தமிழ்</p>
                            <input 
                                type="radio" name="lang"
                                value='ta'
                                checked={lang=='ta'}
                                onChange={()=>onLangChange('ta')} 
                            />
                            <div className='customRadio'></div>
                        </label>
                        {/* <label>
                            <p>Italiano</p>
                            <input type="radio" name="lang" value='it' />
                            <div className='customRadio'></div>
                        </label> */}
                        <label>
                            <p>日本語</p>
                            <input 
                                type="radio" name="lang" 
                                value='ja' 
                                checked={lang=='ja'} 
                                onChange={()=>onLangChange('ja')} 
                            />
                            <div className='customRadio'></div>
                        </label>
                        {/* <label>
                            <p>Português</p>
                            <input type="radio" name="lang" value='por' />
                            <div className='customRadio'></div>
                        </label> */}
                        <label>
                            <p>Española</p>
                            <input
                                type="radio" name="lang"
                                value='es'
                                checked={lang=='es'}
                                onChange={()=>onLangChange('es')} 
                            />
                            <div className='customRadio'></div>
                        </label>
                    </div>
                </div>
                <div className="border-l border-solid border-light">
                    <Link2 to="#Contact">
                    <MagneticElement velocity={80}>
                        <div className="nav Link">
                            <div className="contactBtn pointer-events-none">
                                _get in touch
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
