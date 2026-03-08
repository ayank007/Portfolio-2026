import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/all';

gsap.registerPlugin(Observer);

interface CardData {
    id: number;
    title: string;
    bg: string;
    text: string;
}

const VSCodePortfolio: React.FC = () => {
    const sliderAreaRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const cardsElementsRef = useRef<(HTMLDivElement | null)[]>([]);
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const navContainerRef = useRef<HTMLDivElement>(null);

    const isAnimating = useRef(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [cardData] = useState<CardData[]>([
        { id: 1, title: "UX Strategy.", bg: "bg-[#8e66ff]", text: "text-white" },
        { id: 2, title: "Marketing.", bg: "bg-[#f3f3f3]", text: "text-black" },
        { id: 3, title: "Branding.", bg: "bg-[#ffb443]", text: "text-black" },
        { id: 4, title: "Visual Design.", bg: "bg-[#2dd4bf]", text: "text-black" },
    ]);

    const [gapX, setGapX] = useState(35);
    const [gapY, setGapY] = useState(20);
    const scaleStep = 0.06;

    const toggleNavLock = (lock: boolean) => {
        gsap.to(navContainerRef.current, {
            opacity: lock ? 0.3 : 1,
            pointerEvents: lock ? "none" : "auto",
            duration: 0.2,
        });
    };

    const refreshLayout = (currentCards: HTMLDivElement[], immediate = false) => {
        currentCards.forEach((card, i) => {
            card.style.zIndex = String(currentCards.length - i);
            gsap.to(card, {
                x: i * gapX,
                y: i * gapY,
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
        toggleNavLock(true);

        const outgoing = cards[0];
        const xMove = direction === "right" ? 400 : -400;

        const tl = gsap.timeline({
            onComplete: () => {
                const first = cards.shift();
                if (first) cards.push(first);
                cardsElementsRef.current = cards;
                refreshLayout(cards, false);
                gsap.delayedCall(0.6, () => {
                    isAnimating.current = false;
                    toggleNavLock(false);
                });
            }
        });

        // Smooth exit
        tl.to(outgoing, { x: xMove, opacity: 0, duration: 0.4, ease: "power2.inOut" })
            .to(outgoing, { y: 500, duration: 0.3, ease: "power2.in" }, "-=0.1");

        // Smooth shift
        cards.slice(1).forEach((card, i) => {
            tl.to(card, {
                x: i * gapX,
                y: i * gapY,
                scale: 1 - (i * scaleStep),
                duration: 0.5,
                ease: "power3.out"
            }, 0.1);
        });
    };

    const movePrev = () => {
        if (isAnimating.current) return;
        const cards = cardsElementsRef.current.filter((el): el is HTMLDivElement => el !== null);
        if (cards.length === 0) return;

        isAnimating.current = true;
        toggleNavLock(true);

        const incoming = cards.pop();
        if (incoming) {
            cards.unshift(incoming);
            cardsElementsRef.current = cards;
            gsap.set(incoming, { x: 0, y: -500, scale: 1.1, opacity: 0, zIndex: 100 });

            const tl = gsap.timeline({
                onComplete: () => {
                    refreshLayout(cards, false);
                    gsap.delayedCall(0.6, () => {
                        isAnimating.current = false;
                        toggleNavLock(false);
                    });
                }
            });

            tl.to(incoming, { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.2)" });
            cards.slice(1).forEach((card, i) => {
                tl.to(card, {
                    x: (i + 1) * gapX,
                    y: (i + 1) * gapY,
                    scale: 1 - ((i + 1) * scaleStep),
                    duration: 0.5,
                    ease: "power3.out"
                }, "<");
            });
        }
    };

    const jumpToPage = (id: number) => {
        if (isAnimating.current) return;
        const cards = cardsElementsRef.current.filter((el): el is HTMLDivElement => el !== null);
        const targetIdx = cards.findIndex(el => el.getAttribute('data-id') === String(id));
        if (targetIdx <= 0) return;

        isAnimating.current = true;
        toggleNavLock(true);
        const outgoing = cards.slice(0, targetIdx);
        const remaining = cards.slice(targetIdx);

        const tl = gsap.timeline({
            onComplete: () => {
                const newOrder = [...remaining, ...outgoing];
                cardsElementsRef.current = newOrder;
                refreshLayout(newOrder, false);
                gsap.delayedCall(0.6, () => {
                    isAnimating.current = false;
                    toggleNavLock(false);
                });
            }
        });

        tl.to(outgoing, { x: 400, opacity: 0, stagger: 0.08, duration: 0.4, ease: "power2.inOut" })
            .to(outgoing, { y: 500, duration: 0.3, ease: "power2.in" }, "-=0.2");

        remaining.forEach((card, i) => {
            tl.to(card, {
                x: i * gapX,
                y: i * gapY,
                scale: 1 - (i * scaleStep),
                duration: 0.6,
                ease: "power3.out"
            }, 0.1);
        });

        if (window.innerWidth < 1024) setIsSidebarOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setGapX(15); setGapY(10);
            } else {
                setGapX(35); setGapY(20);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        const ctx = gsap.context(() => {
            const cards = cardsElementsRef.current.filter((el): el is HTMLDivElement => el !== null);
            refreshLayout(cards, true);

            const onGlobalMouseMove = (e: MouseEvent) => {
                if (window.innerWidth < 1024) return;
                gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
                buttonRefs.current.forEach((btn) => {
                    if (!btn) return;
                    const rect = btn.getBoundingClientRect();
                    const dist = Math.hypot(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));
                    if (dist < 180) {
                        gsap.to(btn, { x: (e.clientX - (rect.left + rect.width / 2)) * 0.5, y: (e.clientY - (rect.top + rect.height / 2)) * 0.5, duration: 0.3 });
                    } else {
                        gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
                    }
                });
            };

            window.addEventListener('mousemove', onGlobalMouseMove);

            Observer.create({
                target: window,
                type: "wheel,touch,pointer",
                onLeft: () => moveNext("left"),
                onRight: () => moveNext("right"),
                tolerance: 50,
                preventDefault: false
            });

            return () => window.removeEventListener('mousemove', onGlobalMouseMove);
        });
        return () => {
            window.removeEventListener('resize', handleResize);
            ctx.revert();
        };
    }, [gapX, gapY]);

    return (
        <section className="min-h-screen bg-[#FFEDD5] flex items-center justify-center p-4 md:p-10 select-none z-10 relative overflow-hidden font-sans text-white">
            <div ref={cursorRef} className="fixed top-0 left-0 w-20 h-20 border border-black rounded-full hidden lg:flex items-center justify-center text-black text-[10px] font-bold uppercase pointer-events-none z-9999 opacity-0 -translate-x-1/2 -translate-y-1/2">
                Drag
            </div>

            <div className="w-full max-w-6xl h-auto md:h-[750px] bg-[#121214] rounded-3xl md:rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row overflow-hidden border border-white/5 relative">

                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="absolute top-14 left-6 z-110 hidden md:flex lg:hidden w-10 h-10 bg-[#1e1e1e] rounded-md flex-col items-center justify-center gap-1 border border-white/10 shadow-lg active:scale-95 transition-transform"
                >
                    <div className={`w-5 h-0.5 bg-white transition-transform ${isSidebarOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                    <div className={`w-5 h-0.5 bg-white transition-opacity ${isSidebarOpen ? 'opacity-0' : ''}`} />
                    <div className={`w-5 h-0.5 bg-white transition-transform ${isSidebarOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </button>

                <aside
                    className={`
                        bg-[#18181b] border-white/5 transition-transform duration-500 ease-in-out z-100
                        lg:relative lg:w-72 lg:translate-x-0 lg:border-r lg:p-12 lg:flex lg:flex-col
                        md:absolute md:inset-y-0 md:left-0 md:w-72 md:p-12 md:border-r md:flex-col md:shadow-2xl
                        max-md:w-full max-md:relative max-md:p-6 max-md:border-b max-md:flex-col
                        ${isSidebarOpen ? 'translate-x-0' : 'md:-translate-x-full lg:translate-x-0'}
                        flex flex-col gap-6 md:gap-10
                    `}
                >
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <nav className="flex flex-row md:flex-col gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
                        <p className="hidden md:block text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">Project Index</p>
                        {cardData.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => jumpToPage(item.id)}
                                className="text-white/40 hover:text-white text-sm md:text-xl font-bold transition-all text-left flex items-center gap-2 md:gap-4 group shrink-0"
                            >
                                <span className="text-[10px] opacity-10 group-hover:opacity-100 font-mono">0{item.id}</span>
                                {item.title.split('.')[0]}
                            </button>
                        ))}
                    </nav>
                </aside>

                {isSidebarOpen && (
                    <div onClick={() => setIsSidebarOpen(false)} className="absolute inset-0 bg-black/40 z-90 hidden md:block lg:hidden backdrop-blur-sm" />
                )}

                <div className="flex-1 flex flex-col bg-[#1e1e1e] relative overflow-hidden">
                    <div className="w-full flex flex-col border-b border-white/5 bg-[#1e1e1e]">
                        <div className="flex items-center justify-between px-4 py-1 text-[11px] text-white/50 bg-[#18181b]">
                            <div className="flex gap-4"><span>File</span><span>Edit</span><span>View</span><span>Run</span><span>Terminal</span><span>Help</span></div>
                            <div className="hidden md:flex flex-1 justify-center opacity-80"><span>experiences — index.tsx — Ayan Koley</span></div>
                            <div className="flex gap-4 px-2"><span className="hover:text-white">−</span><span className="hover:text-white">□</span><span className="hover:text-red-500">×</span></div>
                        </div>
                        <div className="flex bg-[#18181b] overflow-x-auto">
                            <div className="flex items-center px-4 py-2 bg-[#1e1e1e] border-r border-white/5 min-w-[140px] text-[12px] text-white">
                                <span className="mr-2 text-cyan-400">TSX</span><span>index.tsx</span><span className="ml-4 opacity-30 text-[10px]">×</span>
                            </div>
                            <div className="flex items-center px-4 py-2 opacity-40 border-r border-white/5 min-w-[140px] text-[12px]">
                                <span className="mr-2 text-yellow-400">JSON</span><span>data.json</span>
                            </div>
                        </div>
                        <div className="flex items-center px-4 py-1 text-[11px] text-white/40 bg-[#1e1e1e] gap-1">
                            <span>Ayan</span><span className="opacity-20">&gt;</span><span>projects</span><span className="opacity-20">&gt;</span><span>portfolio</span><span className="opacity-20">&gt;</span><span>src</span><span className="opacity-20">&gt;</span><span>components</span><span className="opacity-20">&gt;</span><span className="text-white/60">experiences</span><span className="opacity-20">&gt;</span><span className="text-white/80">index.tsx</span>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative overflow-visible">
                        <div
                            ref={sliderAreaRef}
                            className="relative w-full max-w-sm md:max-w-xl h-[300px] md:h-[450px] perspective-distant lg:cursor-none"
                            onMouseEnter={() => window.innerWidth >= 1024 && gsap.to(cursorRef.current, { opacity: 1 })}
                            onMouseLeave={() => window.innerWidth >= 1024 && gsap.to(cursorRef.current, { opacity: 0 })}
                        >
                            {cardData.map((card, i) => (
                                <div
                                    key={card.id}
                                    data-id={card.id}
                                    ref={(el) => { cardsElementsRef.current[i] = el; }}
                                    className={`absolute top-0 left-0 w-full h-64 md:h-80 card ${card.bg} ${card.text} shadow-2xl p-6 md:p-12 rounded-4xl md:rounded-[3rem] will-change-transform flex flex-col`}
                                >
                                    <h2 className="text-3xl md:text-5xl font-black mt-auto tracking-tighter leading-tight">{card.title}</h2>
                                </div>
                            ))}
                        </div>

                        <div ref={navContainerRef} className="flex gap-6 md:gap-10 mt-8 md:mt-16">
                            <button ref={(el) => { buttonRefs.current[0] = el; }} onClick={movePrev} className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white text-black flex items-center justify-center text-xl md:text-3xl shadow-2xl active:scale-90 transition-transform">❮</button>
                            <button ref={(el) => { buttonRefs.current[1] = el; }} onClick={() => moveNext("right")} className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white text-black flex items-center justify-center text-xl md:text-3xl shadow-2xl active:scale-90 transition-transform">❯</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VSCodePortfolio;