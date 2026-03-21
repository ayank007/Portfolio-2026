import './App.scss'
import { useState, createContext, useContext, useEffect, useRef } from 'react'
import { Outlet, Link } from '@tanstack/react-router'
import contentRaw from './content/lang.json'
import gsap from 'gsap'
import FluidCursor from './utils/FluideCursor'
import { ReactLenis, type LenisRef } from 'lenis/react'

// 1. Define valid language keys based on your JSON
type LangCode = 'eng' | 'ben' | 'hi' | 'ta' | 'es' | 'ja'

// 2. Cast the JSON to a Record to fix the indexing error
const content = contentRaw as Record<LangCode, typeof contentRaw['eng']>

interface LangContextType {
  lang: LangCode
  setLang: (l: LangCode) => void
  data: typeof contentRaw['eng']
}

export const LangContext = createContext<LangContextType | null>(null)

export const useLang = () => {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error("useLang must be used within Provider")
  return ctx
}

function App() {
  const lenisRef = useRef<LenisRef>(null)
  const [lang, setLang] = useState<LangCode>('eng')
  const data = content[lang]

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
    <LangContext.Provider value={{ lang, setLang, data }}>
      <ReactLenis root ref={lenisRef} options={{ lerp: 0.1, duration: 1.5, autoRaf: false }}>
        {/* 'relative' is fine, but NO 'h-screen' here or scroll breaks */}
        <div className="relative w-full text-white">
          <nav className="fixed top-0 w-full z-50 flex justify-between p-6 bg-black/40 backdrop-blur-md">
            <Link to="/">Home</Link>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as LangCode)}
              className="bg-transparent border border-white rounded px-2"
            >
              {Object.keys(content).map(code => (
                <option key={code} value={code} className="text-black">{code.toUpperCase()}</option>
              ))}
            </select>
          </nav>

          <main className='bg-theme'>
            <FluidCursor />
            <Outlet />
          </main>
        </div>
      </ReactLenis>
    </LangContext.Provider >
  )
}

export default App