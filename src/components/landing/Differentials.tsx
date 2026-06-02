import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Stats ─── */
const stats = [
    { value: "500+", label: "Obras atendidas" },
    { value: "15", label: "Anos no mercado" },
    { value: "30%", label: "Economia média" },
    { value: "98%", label: "De satisfação" },
];

/* ─── Counter Helper ─── */
function animateValue(el: HTMLElement, target: string) {
    const num = parseInt(target);
    if (isNaN(num)) return;
    const suffix = target.replace(String(num), "");
    const obj = { val: 0 };
    gsap.to(obj, {
        val: num,
        duration: 1.8,
        ease: "power2.out",
        onUpdate: () => {
            el.textContent = Math.floor(obj.val) + suffix;
        },
    });
}

/* ─── Component ─── */
export default function Differentials() {
    const sectionRef = useRef<HTMLElement>(null);
    const statsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            if (statsContainerRef.current) {
                const items = statsContainerRef.current.querySelectorAll("[data-stat]");
                const counters = statsContainerRef.current.querySelectorAll("[data-val]");

                gsap.fromTo(
                    items,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.08,
                        duration: 0.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play reverse play reverse",
                            onEnter: () => {
                                counters.forEach((el, i) => {
                                    animateValue(el as HTMLElement, stats[i].value);
                                });
                            },
                            onEnterBack: () => {
                                counters.forEach((el, i) => {
                                    animateValue(el as HTMLElement, stats[i].value);
                                });
                            },
                            onLeave: () => {
                                counters.forEach((el) => {
                                    (el as HTMLElement).textContent = "0";
                                });
                            },
                            onLeaveBack: () => {
                                counters.forEach((el) => {
                                    (el as HTMLElement).textContent = "0";
                                });
                            },
                        },
                    }
                );
            }
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="diferenciais"
            className="relative overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #111111 0%, #222222 50%, #111111 100%)",
            }}
        >
            {/* Diagonal accent line */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.07]"
                style={{
                    backgroundImage: "repeating-linear-gradient(120deg, transparent, transparent 60px, white 60px, white 61px)",
                }}
            />

            <div
                ref={statsContainerRef}
                className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 py-10 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-y-6"
            >
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        data-stat
                        className={`text-center px-4 ${index < stats.length - 1 ? "md:border-r md:border-white/20" : ""}`}
                    >
                        <span
                            data-val
                            className="block text-3xl md:text-4xl font-black text-white tracking-tight leading-none mb-1"
                        >
                            0
                        </span>
                        <span className="text-[11px] md:text-xs text-white/70 font-semibold uppercase tracking-widest">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
