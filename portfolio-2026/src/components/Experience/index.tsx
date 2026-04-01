import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/all';
import BubbleButton from '../../utils/BubbleButton';
import "./style.scss";
import Heading3 from '../../utils/Heading3';

gsap.registerPlugin(Observer);

interface CardData {
    id: number;
    title: string;
    title2: string;
    timeline: string;
    content: string[];
    bg: string;
    text: string;
}

const Experiences = ({ data }: any) => {
    const sliderAreaRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const cardsElementsRef = useRef<(HTMLDivElement | null)[]>([]);
    const navContainerRef = useRef<HTMLDivElement>(null);

    const isAnimating = useRef(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // YOUR UPDATED STYLES
    const styles = [
        { bg: "bg-[#8e66ff]", text: "text-white card-white-text" },
        { bg: "bg-[#f3f3f3]", text: "text-black" },
        { bg: "bg-[#ffb443]", text: "text-black" },
        { bg: "bg-[#2dd4bf]", text: "text-black" },
        { bg: "bg-[#ff6b6b]", text: "text-white card-white-text" },
        { bg: "bg-[#4ecdc4]", text: "text-black" },
    ];

    const [cardData] = useState<CardData[]>(() =>
        data.data.map((item: any, index: number) => {
            const style = styles[index % styles.length];
            return { ...item, id: index + 1, bg: style.bg, text: style.text };
        })
    );

    const [gapX, setGapX] = useState(35);
    const [gapY, setGapY] = useState(20);
    const scaleStep = 0.06;

    const onGlobalMouseMove = (e: MouseEvent) => {
        if (window.innerWidth < 1024 || !sliderAreaRef.current || !cursorRef.current) return;
        const target = e.target as HTMLElement;
        const isInsideSection = sliderAreaRef.current.contains(target);
        const card = target.closest('.card') as HTMLElement;
        const scrollArea = target.closest('.card-content-area') as HTMLElement;

        let isOverScrollbar = false;
        if (card && scrollArea) {
            const rect = card.getBoundingClientRect();
            if ((e.clientX - rect.left) > rect.width - 20) isOverScrollbar = true;
        }

        if (isInsideSection && card && !isOverScrollbar) {
            gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, opacity: 1, duration: 0.1 });
            document.body.style.cursor = "none";
        } else {
            gsap.to(cursorRef.current, { opacity: 0, duration: 0.1 });
            document.body.style.cursor = isOverScrollbar ? "pointer" : "auto";
        }
    };

    const handleMouseEnter = () => {
        if ((window as any).lenis) (window as any).lenis.stop();
    };

    const handleMouseLeave = () => {
        if ((window as any).lenis) (window as any).lenis.start();
        gsap.to(cursorRef.current, { opacity: 0 });
        document.body.style.cursor = "auto";
    };

    const refreshLayout = (currentCards: HTMLDivElement[], immediate = false) => {
        currentCards.forEach((card, i) => {
            if (!card) return;
            card.style.zIndex = String(currentCards.length - i);
            gsap.to(card, {
                x: i * gapX, y: i * gapY,
                scale: 1 - (i * scaleStep),
                opacity: 1,
                duration: immediate ? 0 : 0.5,
                ease: "power2.out"
            });
        });
    };

    const moveNext = (direction: "left" | "right" = "right") => {
        if (isAnimating.current) return;
        const cards = cardsElementsRef.current.filter((el): el is HTMLDivElement => el !== null);
        if (cards.length === 0) return;
        isAnimating.current = true;
        const outgoing = cards[0];
        const xMove = direction === "right" ? 400 : -400;
        const tl = gsap.timeline({
            onComplete: () => {
                const first = cards.shift();
                if (first) cards.push(first);
                cardsElementsRef.current = cards;
                refreshLayout(cards, false);
                gsap.delayedCall(0.6, () => { isAnimating.current = false; });
            }
        });
        tl.to(outgoing, { x: xMove, opacity: 0, duration: 0.4, ease: "power2.inOut" })
            .to(outgoing, { y: 500, duration: 0.3, ease: "power2.in" }, "-=0.1");
        cards.slice(1).forEach((card, i) => {
            tl.to(card, { x: i * gapX, y: i * gapY, scale: 1 - (i * scaleStep), duration: 0.5, ease: "power3.out" }, 0.1);
        });
    };

    const movePrev = () => {
        if (isAnimating.current) return;
        const cards = cardsElementsRef.current.filter((el): el is HTMLDivElement => el !== null);
        if (cards.length === 0) return;
        isAnimating.current = true;
        const incoming = cards.pop();
        if (incoming) {
            cards.unshift(incoming);
            cardsElementsRef.current = cards;
            gsap.set(incoming, { x: 0, y: -500, scale: 1.1, opacity: 0, zIndex: 100 });
            const tl = gsap.timeline({ onComplete: () => { refreshLayout(cards, false); gsap.delayedCall(0.6, () => { isAnimating.current = false; }); } });
            tl.to(incoming, { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.2)" });
            cards.slice(1).forEach((card, i) => { tl.to(card, { x: (i + 1) * gapX, y: (i + 1) * gapY, scale: 1 - ((i + 1) * scaleStep), duration: 0.5, ease: "power3.out" }, "<"); });
        }
    };

    const jumpToPage = (id: number) => {
        if (isAnimating.current) return;
        const cards = cardsElementsRef.current.filter((el): el is HTMLDivElement => el !== null);
        const targetIdx = cards.findIndex(el => el.getAttribute('data-id') === String(id));
        if (targetIdx <= 0) return;
        isAnimating.current = true;
        const outgoing = cards.slice(0, targetIdx);
        const remaining = cards.slice(targetIdx);
        const tl = gsap.timeline({
            onComplete: () => {
                const newOrder = [...remaining, ...outgoing];
                cardsElementsRef.current = newOrder;
                refreshLayout(newOrder, false);
                gsap.delayedCall(0.6, () => { isAnimating.current = false; });
            }
        });
        tl.to(outgoing, { x: 400, opacity: 0, stagger: 0.08, duration: 0.4, ease: "power2.inOut" })
            .to(outgoing, { y: 500, duration: 0.3, ease: "power2.in" }, "-=0.2");
        remaining.forEach((card, i) => {
            tl.to(card, { x: i * gapX, y: i * gapY, scale: 1 - (i * scaleStep), duration: 0.6, ease: "power3.out" }, 0.1);
        });
        if (window.innerWidth < 1024) setIsSidebarOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            window.innerWidth < 768 ? (setGapX(15), setGapY(10)) : (setGapX(35), setGapY(20));
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', onGlobalMouseMove);
        const ctx = gsap.context(() => {
            const cards = cardsElementsRef.current.filter((el): el is HTMLDivElement => el !== null);
            refreshLayout(cards, true);
            Observer.create({
                target: sliderAreaRef.current, type: "touch,pointer",
                onLeft: () => moveNext("left"), onRight: () => moveNext("right"),
                tolerance: 50, preventDefault: false
            });
        });
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onGlobalMouseMove);
            ctx.revert();
        };
    }, [gapX, gapY]);

    return (
        <section id='Experience' className="bg-[#FFEDD5] flex flex-col gap-16 items-center justify-center p-4 md:p-10 select-none z-10 relative overflow-hidden font-sans text-white py-12 lg:py-16">
            <div className='text-[#181818] font-bold text-2xl md:text-3xl max-w-7xl leading-none text-center'>
                <Heading3 data={data.title2} />
            </div>
            <div ref={cursorRef} className="fixed top-0 left-0 w-20 h-20 border border-black rounded-full hidden lg:flex items-center justify-center text-black text-[10px] font-bold uppercase pointer-events-none z-9999 opacity-0 -translate-x-1/2 -translate-y-1/2">
                Drag
            </div>

            <div className="w-full max-w-6xl h-auto md:h-[750px] bg-[#121214] rounded-3xl md:rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row overflow-hidden border border-white/5 relative">

                {/* HAMBURGER TOGGLE */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="absolute top-22 left-6 z-110 flex lg:hidden w-10 h-10 bg-[#1e1e1e] rounded-md flex-col items-center justify-center gap-1 border border-white/10 shadow-lg active:scale-95 transition-transform"
                >
                    <div className={`w-5 h-0.5 bg-white transition-transform ${isSidebarOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                    <div className={`w-5 h-0.5 bg-white transition-opacity ${isSidebarOpen ? 'opacity-0' : ''}`} />
                    <div className={`w-5 h-0.5 bg-white transition-transform ${isSidebarOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </button>

                {/* ASIDE / SIDEBAR - FIXED: REMOVED EXTRA BLACK BAR */}
                <aside className={`
                    bg-[#18181b] border-white/5 transition-transform duration-500 z-100
                    lg:relative lg:w-72 lg:translate-x-0 lg:border-r lg:p-12 lg:flex lg:flex-col
                    absolute inset-y-0 left-0 w-72 p-12 shadow-2xl
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                    flex flex-col gap-10
                `}>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <nav className="flex flex-col gap-8">
                        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">Career Index</p>
                        {cardData.map((item) => (
                            <button key={item.id} onClick={() => jumpToPage(item.id)} className="text-white/40 hover:text-white text-xl font-bold transition-all text-left flex items-center gap-4 group cursor-pointer">
                                <span className="text-[10px] opacity-10 group-hover:opacity-100 font-mono">0{item.id}</span>
                                {item.title}
                            </button>
                        ))}
                    </nav>
                </aside>

                {isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="absolute inset-0 bg-black/60 z-90 lg:hidden backdrop-blur-sm" />}

                <div className="flex-1 flex flex-col bg-[#1e1e1e] relative overflow-hidden w-full">
                    {/* VS CODE HEADER */}
                    <div className="w-full flex flex-col border-b border-white/5 bg-[#1e1e1e]">
                        <div className="flex items-center justify-between px-4 py-1 text-[11px] text-white/50 bg-[#18181b]">
                            <div className="flex gap-4"><span>File</span><span>Edit</span><span>View</span><span>Run</span><span>Terminal</span><span>Help</span></div>
                            <div className="hidden md:flex flex-1 justify-center opacity-80 font-mono"><span>experiences — index.tsx — Ayan Koley</span></div>
                            <div className="flex gap-4 px-2"><span className="hover:text-white">−</span><span className="hover:text-white">□</span><span className="hover:text-red-500">×</span></div>
                        </div>
                        <div className="flex bg-[#18181b] overflow-x-auto">
                            <div className="flex items-center px-4 py-2 bg-[#1e1e1e] border-r border-white/5 min-w-[140px] text-[12px] text-white font-bold">
                                <span className="mr-2 text-cyan-400 font-bold">TSX</span><span>index.tsx</span><span className="ml-4 opacity-30 text-[10px]">×</span>
                            </div>
                            <div className="flex items-center px-4 py-2 opacity-40 border-r border-white/5 min-w-[140px] text-[12px] font-bold">
                                <span className="mr-2 text-yellow-400 font-bold">JSON</span><span>data.json</span>
                            </div>
                        </div>
                        <div className="flex items-center px-4 py-1 text-[11px] text-white/40 bg-[#1e1e1e] gap-1 font-mono">
                            <span>Ayan</span><span className="opacity-20">&gt;</span><span>projects</span><span className="opacity-20">&gt;</span><span>portfolio</span><span className="opacity-20">&gt;</span><span>src</span><span className="opacity-20">&gt;</span><span className="text-white/60">experiences</span><span className="opacity-20">&gt;</span><span className="text-white/80">index.tsx</span>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative overflow-visible">
                        <div
                            ref={sliderAreaRef}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            // YOUR UPDATED HEIGHT
                            className="relative w-full max-w-sm md:max-w-xl h-[300px] lg:h-[450px] perspective-distant lg:cursor-none"
                        >
                            {cardData.map((card, i) => (
                                <div
                                    key={card.id}
                                    data-id={card.id}
                                    ref={(el) => { cardsElementsRef.current[i] = el; }}
                                    className={`absolute top-0 left-0 w-full h-80 lg:h-[450px] card ${card.bg} ${card.text} shadow-2xl p-3 rounded-xl will-change-transform pointer-events-auto overflow-hidden`}
                                >
                                    <div className="p-6 flex flex-col h-full text-base card-content-area overflow-y-auto" onWheel={(e) => e.stopPropagation()}>
                                        <h2 className="text-3xl font-bold tracking-tight">{card.title}</h2>
                                        <p className="mt-1 font-semibold opacity-80">{card.title2} ● {card.timeline}</p>

                                        <ul className="mt-6 space-y-4 pb-8 list-none">
                                            {card.content.map((line: string, idx: number) => {
                                                const isSub = line.startsWith("- ");
                                                const clean = isSub ? line.substring(2) : line;
                                                const formatted = clean.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
                                                return (
                                                    <li key={idx} className={`text-sm leading-relaxed relative pl-6 ${isSub ? "ml-6 opacity-80" : "font-medium opacity-100"} before:absolute before:left-0 ${isSub ? "before:content-['○'] before:text-[10px] before:top-1" : "before:content-['•'] before:text-xl before:-top-1"}`} dangerouslySetInnerHTML={{ __html: formatted }} />
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div ref={navContainerRef} className="flex items-center gap-10 mt-16">
                            <button onClick={movePrev} className="text-white text-4xl cursor-pointer hover:scale-110 transition-transform">❮</button>
                            <div className="hidden md:block"><BubbleButton text={data.button} link="./Ayan-CV.pdf" /></div>
                            <button onClick={() => moveNext("right")} className="text-white text-4xl cursor-pointer hover:scale-110 transition-transform">❯</button>
                        </div>
                        <div className="md:hidden mt-8">
                            <BubbleButton text={data.button} link="./Ayan-CV.pdf" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;