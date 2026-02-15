import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PhoneCallIcon, HardHat } from "lucide-react";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import gsap from "gsap";

export function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const badgeRef = useRef<HTMLAnchorElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const logosRef = useRef<HTMLDivElement>(null);
    const bordersRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Timeline for staggered entrance
            const tl = gsap.timeline({
                defaults: {
                    ease: "power4.out",
                    duration: 1.2,
                },
            });

            // Decorative borders fade in
            if (bordersRef.current) {
                tl.fromTo(
                    bordersRef.current.children,
                    { opacity: 0, scaleY: 0 },
                    { opacity: 1, scaleY: 1, duration: 1.5, stagger: 0.05, transformOrigin: "top" },
                    0
                );
            }

            // Badge slides in with blur
            if (badgeRef.current) {
                tl.fromTo(
                    badgeRef.current,
                    { opacity: 0, y: 30, filter: "blur(10px)" },
                    { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
                    0.3
                );
            }

            // Title words animate in
            if (titleRef.current) {
                tl.fromTo(
                    titleRef.current,
                    { opacity: 0, y: 60, filter: "blur(8px)" },
                    { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.4 },
                    0.5
                );
            }

            // Subtitle fades in
            if (subtitleRef.current) {
                tl.fromTo(
                    subtitleRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 1 },
                    0.9
                );
            }

            // Buttons slide up with stagger
            if (buttonsRef.current) {
                tl.fromTo(
                    buttonsRef.current.children,
                    { opacity: 0, y: 40, scale: 0.9 },
                    { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.8, ease: "back.out(1.4)" },
                    1.1
                );
            }

            // Logos section fades in
            if (logosRef.current) {
                tl.fromTo(
                    logosRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1 },
                    1.4
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);



    return (
        <section ref={sectionRef} className="relative w-full h-screen overflow-hidden flex flex-col">
            {/* Fixed Background Video */}
            <div className="fixed inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/background-video.mp4" type="video/mp4" />
                </video>
                {/* Dark Overlay - pure black, no blue tint */}
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content wrapper */}
            <div className="relative z-10 mx-auto w-full max-w-5xl flex-1 flex flex-col px-4">
                {/* Decorative Vertical Borders */}
                <div
                    ref={bordersRef}
                    aria-hidden="true"
                    className="absolute inset-0 mx-auto hidden h-full w-full max-w-5xl lg:block pointer-events-none"
                >
                    <div className="absolute inset-y-0 left-0 z-10 h-full w-px bg-white/10" style={{ maskImage: 'linear-gradient(to bottom, transparent 10%, white 40%, white 80%, transparent 100%)' }} />
                    <div className="absolute inset-y-0 right-0 z-10 h-full w-px bg-white/10" style={{ maskImage: 'linear-gradient(to bottom, transparent 10%, white 40%, white 80%, transparent 100%)' }} />
                    <div className="absolute inset-y-0 left-8 z-10 h-full w-px bg-white/[0.04] md:left-12" style={{ maskImage: 'linear-gradient(to bottom, transparent 20%, white 50%, white 70%, transparent 100%)' }} />
                    <div className="absolute inset-y-0 right-8 z-10 h-full w-px bg-white/[0.04] md:right-12" style={{ maskImage: 'linear-gradient(to bottom, transparent 20%, white 50%, white 70%, transparent 100%)' }} />
                </div>

                {/* Main content - centered */}
                <div className="relative flex flex-1 flex-col items-center justify-center gap-7">
                    {/* Badge */}
                    <a
                        ref={badgeRef}
                        className="group mx-auto flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.05] backdrop-blur-md px-3.5 py-1 opacity-0 transition-colors duration-300 hover:bg-white/[0.1] hover:border-white/[0.15]"
                        href="#solucoes"
                    >
                        <HardHat className="size-3 text-primary" />
                        <span className="text-[11px] text-white/70 font-medium tracking-wide">fornecimento estratégico para sua obra</span>
                        <span className="block h-4 border-l border-white/[0.1]" />
                        <ArrowRightIcon className="size-2.5 text-primary/80 duration-300 ease-out group-hover:translate-x-1 group-hover:text-primary" />
                    </a>

                    {/* Title */}
                    <h1
                        ref={titleRef}
                        className="text-balance text-center text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-white opacity-0 sm:text-4xl md:text-5xl lg:text-[3.5rem]"
                    >
                        Materiais que Constroem <br />
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: 'var(--gradient-primary)' }}
                        >
                            Resultados Sólidos
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        ref={subtitleRef}
                        className="mx-auto max-w-md text-center text-[0.875rem] leading-relaxed text-white/60 opacity-0 sm:text-base md:text-lg"
                    >
                        Conectando sua obra aos melhores fornecedores <br className="hidden sm:block" />
                        de concreto, madeiras e compensados
                    </p>

                    {/* Buttons with Liquid Glass Effect */}
                    <div ref={buttonsRef} className="flex flex-row flex-wrap items-center justify-center gap-3 pt-2 relative z-20">
                        {/* Define Shimmer Animation & Filter locally */}
                        <style>{`
                            @keyframes shimmer {
                                0% { transform: translateX(-150%); }
                                100% { transform: translateX(150%); }
                            }
                            .animate-shimmer {
                                animation: shimmer 2s infinite linear;
                            }
                        `}</style>

                        {/* SVG Filter for Button Refraction */}
                        <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
                            <defs>
                                <filter id="hero-liquid">
                                    <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
                                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
                                </filter>
                            </defs>
                        </svg>

                        {/* Button 1: Transparent Liquid Glass (Default) */}
                        <Button
                            className="group/btn relative overflow-hidden rounded-full border border-white/20 bg-transparent px-6 py-2.5 h-11 text-[13px] font-medium text-white opacity-0 transition-all duration-300 hover:scale-105 hover:bg-white/5 hover:border-white/40"
                            size="lg"
                            variant="secondary"
                        >
                            {/* Liquid Layer (Always visible for transparent button) */}
                            <div
                                className="absolute inset-0 bg-white/5 backdrop-blur-[3px] -z-10"
                                style={{ filter: 'url(#hero-liquid)' }}
                            />

                            {/* Shine Layer (On Hover) */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] skew-x-12 group-hover/btn:animate-[shimmer_1.5s_infinite] z-0 pointer-events-none" />

                            {/* Content */}
                            <span className="relative z-10 flex items-center gap-2.5">
                                <PhoneCallIcon className="size-4" />
                                Falar no WhatsApp
                            </span>
                        </Button>

                        {/* Button 2: Orange -> Liquid Glass (Hover) */}
                        <Button
                            className="group/btn relative overflow-hidden rounded-full border border-primary bg-primary px-6 py-2.5 h-11 text-[13px] font-bold text-secondary-foreground opacity-0 transition-all duration-500 hover:bg-transparent hover:text-white hover:border-white/50"
                            size="lg"
                        >
                            {/* Liquid Layer (Hidden Default, Visible Hover) */}
                            <div
                                className="absolute inset-0 bg-white/5 backdrop-blur-[3px] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 -z-10"
                                style={{ filter: 'url(#hero-liquid)' }}
                            />

                            {/* Shine Layer (Running on Hover) */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] skew-x-12 group-hover/btn:animate-[shimmer_1.5s_infinite] z-0 pointer-events-none" />

                            {/* Content */}
                            <span className="relative z-10 flex items-center gap-2.5">
                                Cotar Materiais
                                <ArrowRightIcon className="size-4" />
                            </span>
                        </Button>
                    </div>
                </div>

                {/* Logos Section - pinned at bottom */}
                <div ref={logosRef} className="relative z-10 pb-6 opacity-0">
                    <LogosSection />
                </div>
            </div>
        </section>
    );
}

export function LogosSection() {
    return (
        <div className="space-y-3 border-t border-white/[0.08] pt-5">
            <h2 className="text-center text-sm font-medium text-white/40 uppercase tracking-[0.15em]">
                Parceiros de <span className="text-white/70">confiança</span>
            </h2>
            <div className="relative z-10 mx-auto max-w-4xl">
                <LogoCloud logos={logos} />
            </div>
        </div>
    );
}

const logos = [
    {
        src: "https://storage.efferd.com/logo/nvidia-wordmark.svg",
        alt: "Gerdau",
    },
    {
        src: "https://storage.efferd.com/logo/supabase-wordmark.svg",
        alt: "ArcelorMittal",
    },
    {
        src: "https://storage.efferd.com/logo/openai-wordmark.svg",
        alt: "Votorantim",
    },
    {
        src: "https://storage.efferd.com/logo/turso-wordmark.svg",
        alt: "InterCement",
    },
    {
        src: "https://storage.efferd.com/logo/vercel-wordmark.svg",
        alt: "Duratex",
    },
    {
        src: "https://storage.efferd.com/logo/github-wordmark.svg",
        alt: "Eucatex",
    },
];
