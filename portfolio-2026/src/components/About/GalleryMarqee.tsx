import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';
import WordSlider from '../../utils/WordSlider';

interface SliderConfig {
    cardCount: number;
    baseSpeed: number;
    scrollBoost: number;
    spacing: number;
    radius: number;
    cardWidth: number;
    cardHeight: number;
    containerHeight: string;
    totalAngle: number;
}

const ArcSlider: React.FC = ({ data }: any) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const config = useRef<SliderConfig>({
        cardCount: 20,
        baseSpeed: 0.02,
        scrollBoost: 0.05,
        spacing: 0,
        radius: 0,
        cardWidth: 0,
        cardHeight: 0,
        containerHeight: '800px',
        totalAngle: 0,
    });

    const state = useRef({
        totalRotation: 0,
        direction: 1,
    });

    useLayoutEffect(() => {
        const updateLayout = () => {
            const isMobile = window.innerWidth < 768;
            const c = config.current;

            if (isMobile) {
                c.cardWidth = 200;
                c.cardHeight = 280;
                c.spacing = 10;
                c.radius = 1200;
                c.containerHeight = '550px';
            } else {
                c.cardWidth = 300;
                c.cardHeight = 420;
                c.spacing = 9;
                c.radius = 2500;
                c.containerHeight = '850px';
            }

            c.totalAngle = c.cardCount * c.spacing;

            if (containerRef.current) {
                containerRef.current.style.height = c.containerHeight;
            }

            cardsRef.current.forEach((card) => {
                if (!card) return;
                gsap.set(card, {
                    width: c.cardWidth,
                    height: c.cardHeight,
                    marginLeft: -c.cardWidth / 2,
                    transformOrigin: `50% ${c.radius}px`,
                });
            });
        };

        updateLayout();
        window.addEventListener('resize', updateLayout);
        return () => window.removeEventListener('resize', updateLayout);
    }, []);

    useLenis(({ velocity, direction }) => {
        const c = config.current;
        const s = state.current;
        const wrap = gsap.utils.wrap(0, c.totalAngle);

        if (velocity !== 0) s.direction = direction;

        const currentVelocity = Math.abs(velocity || 0);
        const speed = c.baseSpeed + (currentVelocity * c.scrollBoost);
        s.totalRotation -= speed * s.direction;

        cardsRef.current.forEach((card, i) => {
            if (!card) return;
            const rawAngle = (i * c.spacing) + s.totalRotation;
            const wrappedAngle = wrap(rawAngle);
            const centeredAngle = wrappedAngle - (c.totalAngle / 2);
            gsap.set(card, { rotation: centeredAngle });
        });
    });

    return (
        <div
            className="relative w-full overflow-hidden bg-[#FFEDD5] z-10">
            <div
                ref={containerRef} className='relative w-full overflow-hidden z-10'
            >
                {Array.from({ length: config.current.cardCount }).map((_, i) => (
                    <div
                        key={i}
                        ref={(el: HTMLDivElement | null) => { cardsRef.current[i] = el; }}
                        className="absolute left-1/2 top-[10%] bg-stone-200 rounded-2xl border border-black/5 overflow-hidden shadow-xl will-change-transform"
                    >
                        <img
                            src={`https://picsum.photos/400/600?random=${i + 120}`}
                            alt=""
                            className="w-full h-full object-cover opacity-95 pointer-events-none"
                        />
                    </div>
                ))}
            </div>
            <h3 className='absolute thunder left-1/2 -translate-x-1/2 bottom-4 sm:bottom-10 text-[55px] sm:text-7xl md:text-[90px] font-black text-[#a855f7] z-20 flex justify-center items-center flex-col gap-0 tracking leading-[0.9] w-full text-center'>
                <WordSlider data={data.desc1} />
                <span className='text-[#181818]'>{data.desc2}</span>
            </h3>
        </div>
    );
};

export default ArcSlider;