import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PhoneCallIcon, HardHat } from "lucide-react";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import gsap from "gsap";

export function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
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

            // Buttons slide up with stagger - Faster entrance
            if (buttonsRef.current) {
                tl.fromTo(
                    buttonsRef.current.children,
                    { opacity: 0, y: 40, scale: 0.9 },
                    { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.6, ease: "back.out(1.4)" },
                    0.4
                );
            }

            // Logos section fades in
            if (logosRef.current) {
                tl.fromTo(
                    logosRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    0.7
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);



    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const whatsappLink = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20no%20WhatsApp.";

    return (
        <section ref={sectionRef} className="relative w-full h-screen overflow-hidden flex flex-col">
            {/* Fixed Background Video */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Dark Overlay - always visible */}
                <div className="absolute inset-0 bg-black/70 z-10" />
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/poster.jpg"
                    onCanPlay={() => setVideoLoaded(true)}
                    className={cn(
                        "w-full h-full object-cover transition-opacity duration-1000 will-change-[opacity]",
                        videoLoaded ? "opacity-100" : "opacity-0"
                    )}
                >
                    <source src="/background-video.mp4" type="video/mp4" />
                </video>
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
                        className="group mx-auto flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.05] backdrop-blur-md px-3.5 py-1 opacity-0 transition-colors duration-300 hover:bg-white/[0.1] hover:border-white/[0.15] cursor-pointer relative z-30 pointer-events-auto"
                        href="#solucoes"
                        onClick={(e) => handleScroll(e, '#solucoes')}
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
                    <div className="relative z-30 flex flex-row flex-wrap items-center justify-center gap-3 pt-2">

                        <div ref={buttonsRef} className="contents">
                            {/* Button 1: Cotar Materiais (Glass Effect) */}
                            <Button
                                className="group/btn relative h-11 pointer-events-auto rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                                onClick={(e) => handleScroll(e, '#contato')}
                            >
                                <span className="flex items-center justify-center gap-2.5">
                                    <PhoneCallIcon className="size-4" />
                                    Falar no WhatsApp
                                </span>
                            </Button>

                            {/* Button 2: Cotar Materiais (Glass) */}
                            <Button
                                className="group/btn relative h-11 pointer-events-auto rounded-full border border-white bg-white px-6 py-2.5 text-sm font-bold text-black mix-blend-screen transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white hover:backdrop-blur-md"
                                onClick={(e) => handleScroll(e, '#contato')}
                            >
                                {/* Shimmer on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] skew-x-12 group-hover/btn:animate-[shimmer_1.5s_infinite] z-0 pointer-events-none rounded-full" />
                                <span className="relative z-10 flex items-center justify-center gap-2.5">
                                    Cotar Materiais
                                    <ArrowRightIcon className="size-4" />
                                </span>
                            </Button>
                        </div>
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
    { alt: "Sinercon Construtora", src: "/logos-parceiros/Sinercon-LogoB.png.webp", href: "https://sinerconconstrutora.com.br/", className: "h-10 md:h-12 rounded-lg", disableFilter: true },
    { alt: "Alicerce Empreendimentos", src: "/logos-parceiros/logo-intro.png", href: "#", className: "h-6 md:h-8" },
    { alt: "Construtora Medeli", src: "/logos-parceiros/Médeli.png", href: "https://www.construtoramedeli.com.br/", className: "h-7 md:h-9" },
    { alt: "Construtora Stein", src: "/logos-parceiros/logo-stein.png", href: "#", className: "h-8 md:h-10" },
    { alt: "Xpcon Empreendimentos", src: "/logos-parceiros/logo-xpcon-B6wVZoeV.png", href: "#", className: "h-8 md:h-10" },
    { alt: "Construtora Inovar", src: "/logos-parceiros/Inovar-Habitacional-Incorporacoes-Imob-Ltda.png", href: "https://inovaric.com.br/", className: "h-5 md:h-6", disableFilter: true },
    { alt: "Construtora Viplan", src: "/logos-parceiros/logo-2023.png", href: "https://viplan.com.br/", className: "h-10 md:h-12" },
    { alt: "Gart Empreendimentos", src: "/logos-parceiros/white-logo.webp", href: "#", className: "h-5 md:h-6" },
    { alt: "Grupo Estrutura", src: "/logos-parceiros/grupo estrutura.svg", href: "https://grupoestrutura.com.br/", className: "h-4 md:h-5" },
    { alt: "Torresani", src: "/logos-parceiros/torresani.webp", href: "https://torresani.com.br/", className: "h-10 md:h-12" },
    { alt: "Trapp Ferreira", src: "/logos-parceiros/TRAPP FERREIRA.png", href: "#", className: "h-10 md:h-12" },
    { alt: "Copas Engenharia", src: "/logos-parceiros/copas-logo.svg", href: "#", className: "h-10 md:h-12" },
    { alt: "Granada Construtora", src: "/logos-parceiros/logo-granada.png", href: "https://granadaconstrutora.com.br/", className: "h-8 md:h-10 invert hue-rotate-180", disableFilter: true },
];
