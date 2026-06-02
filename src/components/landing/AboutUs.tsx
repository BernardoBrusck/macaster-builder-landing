import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Handshake, TrendingUp, ShieldCheck } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

gsap.registerPlugin(ScrollTrigger);

/* ─── Counter hook ─── */
function useCounter(end: number, suffix = "", trigger?: boolean) {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (trigger) {
            const obj = { val: 0 };
            gsap.to(obj, {
                val: end,
                duration: 2,
                ease: "power2.out",
                onUpdate: () => setValue(Math.round(obj.val)),
            });
        } else {
            setValue(0);
        }
    }, [trigger, end]);

    return { ref, display: `${value}${suffix}` };
}

function StatCounter({ end, suffix = "", trigger = false }: { end: number, suffix?: string, trigger?: boolean }) {
    const { ref, display } = useCounter(end, suffix, trigger);
    return <span ref={ref}>{display}</span>;
}

/* ─── Mouse Trail Component Removed (Moved to Global) ─── */

/* ─── Spotlight Card Component ─── */
function SpotlightCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FF9D0A] to-[#E07E00] p-8 text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/20"
        >
            {/* Spotlight Gradient */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`,
                }}
            />

            {/* Icon */}
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/25">
                <Icon className="h-7 w-7 text-white" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="mb-3 text-xl font-bold tracking-tight text-white">
                    {title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-white/90">
                    {description}
                </p>
            </div>

            {/* Decorative white line that expands on hover */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-white/40 transition-all duration-500 group-hover:w-full" />
        </div>
    );
}

/* ─── Data ─── */
const stats = [
    { value: 10, suffix: "M+", prefix: "R$ ", label: "em materiais negociados" },
    { value: 1000, suffix: "+", prefix: "", label: "clientes atendidos" },
    { value: 100, suffix: "%", prefix: "", label: "foco em resultado" },
    { value: 5, suffix: "+", prefix: "", label: "anos de mercado" },
];

const pillars = [
    {
        icon: Handshake,
        title: "Parceria Estratégica",
        description:
            "Atuamos como extensão da sua equipe de compras, negociando diretamente com os maiores fornecedores.",
    },
    {
        icon: TrendingUp,
        title: "Economia Real",
        description:
            "Nosso poder de negociação gera condições comerciais que construtoras individuais dificilmente alcançam.",
    },
    {
        icon: Building2,
        title: "Foco em Construção",
        description:
            "Especializados exclusivamente no setor de construção civil — concreto, madeiras e compensados.",
    },
    {
        icon: ShieldCheck,
        title: "Confiança Comprovada",
        description:
            "Relacionamentos de longo prazo baseados em transparência, entrega de resultado e pontualidade.",
    },
];

const productImages = [
    { src: "/produtos/plywood_forms_1780405839039.png", alt: "Compensados para formas de concreto" },
    { src: "/produtos/wood_beams_1780405855627.png", alt: "Madeira para construção civil" },
    { src: "/produtos/treated_eucalyptus_1780405868029.png", alt: "Pinus e eucalipto tratado" },
    { src: "/produtos/hoarding_better_1780415767982.png", alt: "Tapumes e palanques especiais" },
    { src: "/produtos/concrete_pouring_1780405893312.png", alt: "Concreto usinado" },
    { src: "/produtos/paint_buckets_1780405907370.png", alt: "Tintas e acabamentos" },
    { src: "/produtos/mortar_bags_1780405920116.png", alt: "Impermeabilizantes e argamassas" },
];

export default function AboutUs() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const pillarsRef = useRef<HTMLDivElement>(null);
    // Removed lineRef since we moved the accent to the text border
    const imageRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const [countersActive, setCountersActive] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // ── Heading blur-reveal stagger ──
            if (headingRef.current) {
                gsap.fromTo(
                    headingRef.current.children,
                    { opacity: 0, y: 50, filter: "blur(0px)" }, // Simplified blur to prevent potential perf issues
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: headingRef.current,
                            start: "top 80%",
                            end: "bottom 15%",
                            toggleActions: "play reverse play reverse",
                        },
                    }
                );
            }

            // ── Content fade-up ──
            if (contentRef.current) {
                gsap.fromTo(
                    contentRef.current,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: contentRef.current,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play reverse play reverse",
                        },
                    }
                );
            }

            // ── Image parallax + reveal ──
            if (imageRef.current) {
                const img = imageRef.current.querySelector("img");
                // Container clip reveal
                gsap.fromTo(
                    imageRef.current,
                    { clipPath: "inset(100% 0 0 0)" },
                    {
                        clipPath: "inset(0% 0 0 0)",
                        duration: 1.4,
                        ease: "power4.inOut",
                        scrollTrigger: {
                            trigger: imageRef.current,
                            start: "top 80%",
                            end: "bottom 15%",
                            toggleActions: "play reverse play reverse",
                        },
                    }
                );
                // Adjusted Parallax: subtle movement to avoid clipping
                if (img) {
                    gsap.fromTo(
                        img,
                        { scale: 1.4, y: 0 },
                        {
                            scale: 1.1,
                            y: 0,
                            ease: "none",
                            scrollTrigger: {
                                trigger: imageRef.current,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: 1,
                            },
                        }
                    );
                }
            }

            // ── Stats counter trigger ──
            if (statsRef.current) {
                gsap.fromTo(
                    statsRef.current.children,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: statsRef.current,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play reverse play reverse",
                            onEnter: () => setCountersActive(true),
                            onEnterBack: () => setCountersActive(true),
                            onLeave: () => setCountersActive(false),
                            onLeaveBack: () => setCountersActive(false),
                        },
                    }
                );
            }

            // ── Pillar cards stagger ──
            if (pillarsRef.current) {
                gsap.fromTo(
                    pillarsRef.current.children,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: pillarsRef.current,
                            start: "top 80%",
                            end: "bottom 15%",
                            toggleActions: "play reverse play reverse",
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="sobre"
            data-header-theme="light"
            className="relative z-10 overflow-hidden bg-white select-none"
        >


            {/* ─── Subtle background decoration ─── */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-black/[0.04] blur-[100px]" />
                <div className="absolute -left-60 bottom-20 h-[500px] w-[500px] rounded-full bg-black/[0.03] blur-[100px]" />
            </div>

            {/* ─── Main content block ─── */}
            <div className="relative mx-auto max-w-5xl px-6 lg:px-8 pt-20 md:pt-28 lg:pt-32">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* ── Left: Text ── */}
                    <div>
                        <div ref={headingRef}>
                            <div className="mb-6">
                                <span className="inline-block border-b-4 border-zinc-900 pb-1.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-900">
                                    Sobre Nós
                                </span>
                            </div>

                            <h2 className="text-balance text-2xl font-bold leading-[1.12] tracking-[-0.03em] text-gray-900 sm:text-3xl lg:text-[2.25rem]">
                                Conectamos quem constrói{" "}
                                <span className="text-gray-500">
                                    a quem fornece
                                </span>
                            </h2>
                        </div>

                        <div ref={contentRef} className="mt-8 space-y-5">
                            <p className="text-[0.9rem] leading-relaxed text-gray-600">
                                A{" "}
                                <strong className="font-semibold text-gray-900">
                                    Macaster Gestor
                                </strong>{" "}
                                é especialista em suprimentos para a construção civil. Atuamos como ponte entre construtoras, incorporadoras, engenheiros, arquitetos e os melhores fornecedores.
                            </p>
                            <p className="text-[0.9rem] leading-relaxed text-gray-600">
                                Minha atuação vai além da venda: trabalho na identificação das necessidades reais de cada obra para entregar soluções que gerem resultado, evitando problemas comuns como retrabalho, atrasos de cronograma, desperdícios e compras inadequadas.
                            </p>
                            <p className="text-[0.9rem] leading-relaxed text-gray-600">
                                Acredito que o melhor fornecedor não é o que vende mais barato, mas o que entrega a solução certa para que a obra avance com segurança, eficiência e previsibilidade.
                            </p>
                        </div>
                    </div>

                    {/* ── Right: Image with parallax ── */}
                    <div
                        ref={imageRef}
                        className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/10 aspect-[4/3] bg-gray-100"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                            alt="Canteiro de obras moderno com equipe profissional"
                            width={800}
                            height={600}
                            loading="lazy"
                            className="h-full w-full object-cover"
                        />
                        {/* Gradient overlay at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* ─── Stats counter strip ─── */}
                <div className="relative mx-auto max-w-5xl px-6 lg:px-8 mt-10 md:mt-12 mb-16">
                    <div
                        ref={statsRef}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-y border-gray-100"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="text-2xl md:text-3xl font-bold text-gray-900 tabular-nums tracking-tight group-hover:text-gray-500 transition-colors duration-300">
                                    {stat.prefix}
                                    <StatCounter end={stat.value} suffix={stat.suffix} trigger={countersActive} />
                                </div>
                                <div className="mt-1.5 text-xs font-medium text-gray-500 uppercase tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── Products Carousel ─── */}
            <div className="relative w-full overflow-hidden pb-20">
                <div className="mb-8 text-center">
                    <span className="inline-block border-b-4 border-zinc-900 pb-1.5 text-xs font-bold uppercase tracking-[0.2em] text-zinc-900">
                        Nossos Produtos
                    </span>
                </div>
                <div className="[mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]">
                    <InfiniteSlider gap={24} speed={40}>
                            {productImages.map((product, idx) => (
                                <div key={idx} className="relative group w-[280px] h-[320px] md:w-[320px] md:h-[380px] rounded-2xl overflow-hidden shrink-0 shadow-lg">
                                    <img 
                                        src={product.src} 
                                        alt={product.alt} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                                        <h3 className="text-white font-semibold text-lg leading-tight">
                                            {product.alt}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </InfiniteSlider>
                    </div>
                </div>
        </section>
    );
}
