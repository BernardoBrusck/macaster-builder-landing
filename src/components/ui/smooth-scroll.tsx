import { useEffect } from 'react';
import Lenis from 'lenis';

export const SmoothScroll = () => {
    useEffect(() => {
        // Em dispositivos móveis ou telas touch/menores, a rolagem nativa do sistema operacional (iOS/Android) 
        // é 100x mais fluida e leve, evitando travamentos, lag e conflito de eventos de toque.
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (window.innerWidth < 1024 || isTouchDevice) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.0,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 2,
        });

        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return null;
};

