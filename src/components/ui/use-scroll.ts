import React from 'react';

export function useScroll(threshold: number) {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        let rafId = 0;
        let ticking = false;

        const checkScroll = () => {
            if (!ticking) {
                ticking = true;
                rafId = requestAnimationFrame(() => {
                    const isScrolled = window.scrollY > threshold;
                    setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
                    ticking = false;
                });
            }
        };

        window.addEventListener('scroll', checkScroll, { passive: true });
        checkScroll();

        return () => {
            window.removeEventListener('scroll', checkScroll);
            cancelAnimationFrame(rafId);
        };
    }, [threshold]);

    return scrolled;
}
