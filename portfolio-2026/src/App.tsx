import './App.scss'
import { useState, createContext, useContext, useEffect, useRef } from 'react'
import { Outlet } from '@tanstack/react-router'
import contentRaw from './content/lang.json'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FluidCursor from './utils/FluideCursor'
import { ReactLenis, type LenisRef } from 'lenis/react'
import Navbar from './components/Navbar'
import { NavCtxProvider } from './context/openNavpage'
import Navpage from './components/Navpage'
import PageLoader from './Loader'
interface ProjectItem {
  title: string
  desc: string
}

interface CareerItem {
  title: string
  title2: string
  timeline: string
  content: string[]
}
export interface ContentSchema {
  nav: any
  hero: {
    name: string;
    title: string;
    action: string;
    intro: string[];
  };
  projects: {
    title: string;
    skills: string[];
    // This allows project1, project2, project8, etc. 
    [key: `project${number}`]: ProjectItem;
  };
  career: {
    title: string;
    title2: string;
    data: CareerItem[];
  };
  about: {
    title: string;
    desc1: string;
    desc2: string;
    title2: string;
    title3: string;
    title4: string;
    diery: {
      intro: string;
      [key: string]: string; // Allows chess, reading, football, etc.
    };
  };
  contact: {
    title: string;
    title2: string;
    heading: string;
    heading2: string[];
    name: string;
    desc: string;
    contact: string;
    reason: {
      title: string;
      option: string[];
    };
    submit: string;
    ending: string;
  };
  footer: string;
}

// 1. Define valid language keys based on your JSON
type LangCode = 'eng' | 'ben' | 'hi' | 'ta' | 'te' | 'kn' | 'spa' | 'ja' | 'nl' | 'de'

// 2. Cast the JSON to a Record to fix the indexing error
const content = contentRaw as unknown as Record<LangCode, ContentSchema>

interface LangContextType {
  lang: LangCode
  setLang: (l: LangCode) => void
  data: ContentSchema
}

export const LangContext = createContext<LangContextType | null>(null)

export const useLang = () => {
  return useContext(LangContext)
}

gsap.registerPlugin(ScrollTrigger)
function App() {
  const lenisRef = useRef<LenisRef>(null)
  const [lang, setLang] = useState<LangCode>('eng')
  const data = content[lang]

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;

    if (lenis) {
      // 1. Stop immediately on mount
      lenis.stop();

      // 2. Start only after the window has fully loaded
      const handleLoad = () => {
        lenis.start();
      };

      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
    }
  }, []);

  const FONT_URLS: Partial<Record<LangCode, string>> = {
    ben: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;600&display=swap',
    hi: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600&display=swap',
    ta: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;600&display=swap',
    te: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;600&display=swap',
    kn: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Kannada:wght@400;600&display=swap',
  };

  useEffect(() => {
    const fontUrl = FONT_URLS[lang];

    if (!fontUrl) return;
    if (!document.querySelector(`link[href="${fontUrl}"]`)) {
      const link = document.createElement('link');
      link.href = fontUrl;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, [lang]);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)
    return () => gsap.ticker.remove(update)
  }, [])

  // Force ScrollTrigger to ignore extension-injected height
  useEffect(() => {
    const refreshTrigger = () => {
      ScrollTrigger.refresh();
    };
    // Refresh after a small delay to ensure extensions have finished injecting
    const timer = setTimeout(refreshTrigger, 500);
    window.addEventListener('resize', refreshTrigger);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', refreshTrigger);
    }
  }, []);

  return (
    <>
      <PageLoader />
      <LangContext.Provider value={{ lang, setLang, data }}>
        <ReactLenis root ref={lenisRef} options={{ lerp: 0.1, duration: 1.5, autoRaf: false }}>
          <div className="relative w-full text-white">

            <NavCtxProvider>
              <Navbar data={data.nav} />
              <Navpage data={data.nav} />
            </NavCtxProvider>

            <main className='bg-theme'>
              <FluidCursor />
              <Outlet />
            </main>
          </div>
        </ReactLenis>
      </LangContext.Provider >
    </>
  )
}

export default App