import { useRef, useEffect } from "react";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Solution Data ─── */
const solutions = [
  {
    number: "01",
    title: "Madeiras para Construção",
    description:
      "Qualidade estrutural para todas as etapas da obra. Fornecemos madeiras certificadas com a melhor relação custo-benefício, direto dos melhores produtores do país.",
    image: "/01.Madeiras_para_Construção.webp",
    features: ["Eucalipto tratado", "Pinus serrado", "Madeira de lei"],
  },
  {
    number: "02",
    title: "Concreto Usinado",
    description:
      "Entrega programada com precisão logística absoluta. Nossas parcerias estratégicas com as melhores usinas garantem qualidade constante e pontualidade.",
    image: "/02.Concreto_Usinado.webp",
    features: ["Bombeável", "Convencional", "Especial"],
  },
  {
    number: "03",
    title: "Compensados Especiais",
    description:
      "Plastificados, resinados, estruturais e navais. Variedade completa para cada necessidade e fase do seu projeto, com garantia de procedência.",
    image: "/03.Compensados_Especiais.webp",
    features: ["Plastificado", "Resinado", "Naval"],
  },
];

/* ─── Component ─── */
export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      /* ── Header entrance ── */
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      /* ── Horizontal scroll ── */
      const panels = gsap.utils.toArray<HTMLElement>(".solution-panel");
      const totalPanels = panels.length;

      const scrollTween = gsap.to(panels, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (totalPanels - 1),
            duration: { min: 0.2, max: 0.6 },
            ease: "power2.inOut",
          },
          end: () => "+=" + (track.offsetWidth - window.innerWidth),
          invalidateOnRefresh: true,
        },
      });

      /* ── Progress bar ── */
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + (track.offsetWidth - window.innerWidth),
            scrub: 1,
          },
        });
      }

      /* ── Per-panel content and card reveal ── */
      panels.forEach((panel) => {
        const card = panel.querySelector(".solution-card");
        const content = panel.querySelector("[data-content]");
        const img = panel.querySelector("img");

        if (card) {
          gsap.fromTo(card,
            { clipPath: "inset(100% 0 0 0)" },
            {
              clipPath: "inset(0% 0 0 0)",
              duration: 0.7,
              ease: "power4.inOut",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left 65%", // Slightly earlier
                once: true,
              }
            }
          );
        }

        if (img) {
          gsap.fromTo(img,
            { scale: 1.4 },
            {
              scale: 1.0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left 65%",
                once: true,
              }
            }
          );
        }

        if (content) {
          gsap.fromTo(
            content.children,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.05,
              duration: 0.4,
              delay: 0.1, // Faster follow-up
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left 65%",
                once: true,
              },
            }
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="solucoes"
      className="relative overflow-hidden h-screen flex flex-col"
    >
      {/* ── Video Overlay (video is fixed from hero, we just add a dark tint) ── */}
      <div className="absolute inset-0 bg-black/60 z-0" />


      {/* ── Header ── */}
      <div className="relative z-20 pt-10 md:pt-14 pb-6 md:pb-8 px-6 lg:px-12 flex-shrink-0">
        <div ref={headerRef} className="max-w-5xl mx-auto">
          <span className="inline-block border-b-4 border-[#F39200] pb-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F39200] mb-4">
            Soluções
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-[1.12] tracking-[-0.03em] text-white">
            Materiais que movem{" "}
            <span className="text-[#F39200]">sua obra</span>
          </h2>
        </div>
      </div>

      {/* ── Progress Bar ── */}
      <div className="relative z-20 mx-6 lg:mx-12 mb-4 flex-shrink-0">
        <div className="max-w-5xl mx-auto">
          <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              ref={progressRef}
              className="h-full bg-[#F39200] origin-left rounded-full"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>

      {/* ── Horizontal Track ── */}
      <div
        ref={trackRef}
        className="relative z-10 flex flex-1 min-h-0"
        style={{ width: `${solutions.length * 100}vw` }}
      >
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="solution-panel relative flex-shrink-0 w-screen h-full flex items-center justify-center px-6 lg:px-12 pb-12"
          >
            <div className="solution-card relative w-full max-w-[1200px] h-[55vh] min-h-[450px] max-h-[550px] mx-auto rounded-[15px] overflow-hidden border border-white/[0.08] backdrop-blur-md bg-white/[0.02] shadow-2xl">
              {/* ── Card Layout ── */}
              <div className="flex h-full">
                {/* Image Side */}
                <div className="relative w-full md:w-[50%] flex-shrink-0 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="800"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                  />
                  {/* Gradient blending into content side */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Large number */}
                  <span className="absolute bottom-4 left-6 text-[6rem] md:text-[9rem] font-black leading-none text-white/[0.15] tracking-tighter select-none pointer-events-none z-10">
                    {solution.number}
                  </span>
                </div>

                {/* Content Side (desktop) */}
                <div className="hidden md:flex w-[50%] items-center bg-white/[0.03] backdrop-blur-xl border-l border-white/[0.05]">
                  <div
                    data-content
                    className="px-8 lg:px-16 py-8 flex flex-col justify-center h-full w-full"
                  >
                    <h3 className="text-2xl lg:text-4xl font-bold text-white tracking-[-0.03em] leading-[1.1] mb-5">
                      {solution.title}
                    </h3>

                    <p className="text-base leading-relaxed text-white/70 mb-8 max-w-md">
                      {solution.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {solution.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1.5 rounded-full bg-white/[0.08] text-white/90 border border-white/10 font-medium backdrop-blur-sm shadow-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div>
                      <Button
                        variant="ghost"
                        className="group/cta pl-0 hover:bg-transparent text-white text-sm font-semibold transition-all duration-300"
                        asChild
                      >
                        <a
                          href={`https://wa.me/5511999999999?text=${encodeURIComponent(`Olá, gostaria de cotar ${solution.title}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="border-b border-white/30 pb-0.5 group-hover/cta:border-[#F39200] group-hover/cta:text-[#F39200] transition-colors duration-300">
                            Solicitar cotação
                          </span>
                          <ArrowRightIcon className="size-4 ml-2 text-[#F39200] transition-transform duration-300 group-hover/cta:translate-x-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Mobile Content Overlay ── */}
              <div className="absolute inset-0 flex items-end md:hidden pointer-events-none">
                <div
                  data-content
                  className="w-full p-6 pt-20 pointer-events-auto"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 40%, transparent 100%)",
                  }}
                >
                  <h3 className="text-xl font-bold text-white tracking-[-0.02em] leading-tight mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/50 mb-4">
                    {solution.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {solution.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.06] text-white/80 border border-white/10 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="group/cta rounded-full border-white/15 bg-white/[0.05] text-white px-5 h-9 text-xs font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                    asChild
                  >
                    <a
                      href={`https://wa.me/5511999999999?text=${encodeURIComponent(`Olá, gostaria de cotar ${solution.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar cotação
                      <ArrowRightIcon className="size-3 ml-1.5 transition-transform duration-300 group-hover/cta:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
