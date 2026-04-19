import { useEffect } from 'react'
import { useLocation } from '@tanstack/react-router'
import { useLenis } from 'lenis/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const HashScroller = () => {
    const location = useLocation();
    const lenis = useLenis();

    useEffect(() => {
        // Disable browser's native scroll jumping to prevent it from fighting Lenis
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        const hash = location.hash || window.location.hash;
        if (!hash) return;

        const targetId = hash.replace(/^#/, '');

        // 1. Wait a tiny bit for images and CSS to finish painting their actual heights
        const timer = setTimeout(() => {
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // 2. Force GSAP to recalculate page height BEFORE scrolling
                ScrollTrigger.refresh();

                if (lenis) {
                    // 3. The magic property: `force: true`
                    // This prevents TanStack or the browser from canceling the scroll halfway
                    lenis.scrollTo(targetElement, {
                        offset: 0,
                        duration: 1.2,
                        force: true
                    });
                } else {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }, 300); // 300ms is the sweet spot for the DOM to settle

        return () => clearTimeout(timer);
    }, [location.hash, lenis]);

    return null;
}

export default HashScroller;