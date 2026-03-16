import React, { useRef, useState, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';

const Page = React.forwardRef<HTMLDivElement, { children: React.ReactNode; color?: string; isLeft?: boolean }>((props, ref) => {

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center overflow-hidden ${props.color || 'bg-[#0c0c0c]'}`}
      ref={ref}
      style={{
        // Subtle gradient to simulate the book's fold/spine
        backgroundImage: props.isLeft
          ? 'linear-gradient(to right, rgba(0,0,0,0) 95%, rgba(0,0,0,0.1) 100%)'
          : 'linear-gradient(to left, rgba(0,0,0,0) 95%, rgba(0,0,0,0.1) 100%)'
      }}
    >
      {props.children}
    </div>
  );
});

export default function About() {
  const bookRef = useRef<any>(null);
  const [activePage, setActivePage] = useState(0);

  const onFlip = useCallback((e: any) => {
    setActivePage(e.data);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFEDD5] z-10 flex items-center justify-center overflow-hidden font-sans antialiased p-6">
      <div className="w-full max-w-[1600px] flex flex-col xl:flex-row items-center xl:items-stretch justify-center gap-8 xl:gap-0">

        {/* LEFT SECTION: PURPLE CARD */}
        <div className="z-20 w-full md:w-[450px] shrink-0 bg-[#6344ff] rounded-[50px] aspect-4/5 p-12 flex flex-col justify-between items-center relative shadow-2xl">
          <div className="text-white">
            <p className="italic font-serif text-2xl opacity-80">Created by</p>
            <h1 className="text-8xl font-black tracking-tighter leading-[0.8] mt-4">Ayan<br />Koley</h1>
          </div>
          <div className="relative grow flex items-center justify-center">
            <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-white/10 bg-white/5 p-4 flex items-center justify-center">
              <div className="w-full h-full bg-[#34d399] rounded-sm flex items-center justify-center shadow-lg">
                <span className="text-white text-7xl font-bold">AK</span>
              </div>
            </div>
          </div>
          <button className="w-full py-5 bg-white text-black font-black uppercase rounded-2xl hover:bg-[#96ff00] transition-all text-xl shadow-lg active:scale-95">
            About us
          </button>
        </div>

        {/* RIGHT SECTION: PILL SHAPE */}
        <div className="grow w-full max-w-[1000px] flex items-center justify-center">
          <div className="relative w-full aspect-[1.6/1] bg-[#0c0c0c] rounded-[50px] md:rounded-[150px] flex items-center justify-center overflow-hidden shadow-2xl border border-white/5">


            {/* THE BOOK CONTAINER */}
            <div
              className={`relative z-10 transition-all duration-700 ease-in-out ${activePage === 0 ? "translate-x-0" : "translate-x-0"
                }`}
              style={{ width: '85%', height: '70%' }}
            >
              {/* @ts-ignore */}
              <HTMLFlipBook
                width={350}
                height={400}
                size="stretch"
                showCover={true}
                ref={bookRef}
                onFlip={onFlip}
                useMouseEvents={true}
                flippingTime={1000}
                drawShadow={true}
                maxShadowOpacity={0.3}
                style={{ backgroundColor: 'transparent' }}
                startPage={0}
              >
                {/* PAGE 1: COVER (Right side of first spread) */}
                <Page color="bg-[#96ff00]">
                  <div className="text-black p-12 w-full h-full flex flex-col justify-between items-start text-left shadow-[inset_10px_0_20px_rgba(0,0,0,0.05)]">
                    <span className="bg-black text-white text-[10px] px-3 py-1 font-bold rounded-full">NEW RESOURCE</span>
                    <div>
                      <h1 className="text-6xl font-black leading-[0.85] tracking-tighter">Sticky Steps<br />(Basic)</h1>
                      <p className="text-[11px] font-bold opacity-40 uppercase tracking-widest mt-4">Sections & Layouts</p>
                    </div>
                  </div>
                </Page>

                {/* PAGE 2 & 3: OPEN SPREAD */}
                <Page color="bg-white" isLeft={true}>
                  <div className="text-black p-10 text-left w-full h-full flex flex-col justify-center">
                    <h3 className="text-5xl font-black tracking-tighter italic text-[#6344ff]">Hybrid</h3>
                    <p className="text-zinc-400 mt-6 text-sm leading-relaxed">Seamless integration of GSAP animations with Tailwind CSS layouts.</p>
                  </div>
                </Page>
                <Page color="bg-white">
                  <div className="p-8 h-full w-full">
                    <div className="w-full h-full bg-zinc-100 rounded-[40px] flex items-center justify-center border border-zinc-200 shadow-inner">
                      <span className="text-zinc-300 font-bold text-3xl italic">Visual 01</span>
                    </div>
                  </div>
                </Page>

                {/* PAGE 4 & 5: DARK PAGES */}
                <Page color="bg-[#181818]" isLeft={true}>
                  <div className="p-12 text-left w-full">
                    <h3 className="text-[#96ff00] text-6xl font-black italic tracking-tighter">04.</h3>
                    <p className="text-white/30 mt-4 uppercase tracking-[0.4em] text-xs">Modern Stacks</p>
                  </div>
                </Page>
                <Page color="bg-[#181818]">
                  <div className="p-12 text-right w-full">
                    <h3 className="text-[#96ff00] text-6xl font-black italic tracking-tighter">05.</h3>
                    <p className="text-white/30 mt-4 uppercase tracking-[0.4em] text-xs">Core Logic</p>
                  </div>
                </Page>

                {/* PAGE 6: BACK COVER */}
                <Page color="bg-[#0c0c0c]">
                  <div className="text-[#96ff00] text-xl font-serif italic border-b-2 border-[#96ff00] tracking-tighter px-4">
                    Koley.dev
                  </div>
                </Page>
              </HTMLFlipBook>
            </div>

            {/* Footer Text */}
            <div className="absolute bottom-[8%] italic font-serif text-[#96ff00] text-2xl z-20 drop-shadow-lg">
              New stuff is added every week!
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}