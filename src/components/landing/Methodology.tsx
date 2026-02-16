import { useRef, useEffect } from "react";
import { Search, Scale, Clock, Handshake, ArrowRightIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Step Data ─── */
const steps = [
  {
    icon: Search,
    number: "01",
    title: "Análise de Projeto",
    description:
      "Entendemos cada detalhe da sua obra para oferecer a solução mais adequada ao seu projeto.",
    bullets: [
      "Levantamento de materiais e volumes",
      "Análise de prazos e especificações",
      "Personalização por tipo de obra",
    ],
  },
  {
    icon: Scale,
    number: "02",
    title: "Negociação Estratégica",
    description:
      "Cotamos com os melhores fornecedores e negociamos condições exclusivas para sua obra.",
    bullets: [
      "Cotação com múltiplos fornecedores",
      "Escala de compra para melhor preço",
      "Condições exclusivas negociadas",
    ],
  },
  {
    icon: Clock,
    number: "03",
    title: "Acompanhamento Contínuo",
    description:
      "Controlamos cada etapa em tempo real, mantendo total transparência no processo.",
    bullets: [
      "Orçamentos em aberto monitorados",
      "Pedidos rastreados em tempo real",
      "Comunicação direta via WhatsApp",
    ],
  },
  {
    icon: Handshake,
    number: "04",
    title: "Entrega de Resultado",
    description:
      "Construímos parcerias de longo prazo com foco em economia real e recorrência.",
    bullets: [
      "Vendas recorrentes com condições fixas",
      "Economia comprovada por obra",
      "Relacionamento de confiança contínuo",
    ],
  },
];

/* ─── Component ─── */
export default function Methodology() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      /* ── Header entrance ── */
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      /* ── Timeline line draw ── */
      if (lineRef.current && stepsContainerRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: stepsContainerRef.current,
              start: "top 70%",
              end: "bottom 50%",
              scrub: 1,
            },
          }
        );
      }

      /* ── Per-step animations ── */
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        // Card fade-in
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              once: true,
            },
          }
        );

        // Dot activation
        const dot = dotsRef.current[i];
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0.4, backgroundColor: "#E5E7EB" },
            {
              scale: 1,
              backgroundColor: "#F39200",
              duration: 0.5,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                once: true,
              },
            }
          );
        }

        // Icon scale-in
        const icon = iconsRef.current[i];
        if (icon) {
          gsap.fromTo(
            icon,
            { scale: 0, rotation: -20 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.6,
              ease: "back.out(2.5)",
              scrollTrigger: {
                trigger: card,
                start: "top 78%",
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
      id="metodologia"
      data-header-theme="light"
      className="relative bg-white py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F39200]/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-100/80 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div ref={headerRef} className="text-center max-w-xl mx-auto mb-14 md:mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#F39200] mb-4">
            Metodologia
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold leading-[1.12] tracking-[-0.03em] text-gray-900 mb-4">
            Como transformamos sua{" "}
            <span className="text-[#F39200]">obra em resultado</span>
          </h2>
          <p className="text-[0.9rem] leading-relaxed text-gray-500">
            Uma metodologia comprovada em cada etapa, do orçamento à entrega final.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div ref={stepsContainerRef} className="relative">
          {/* Vertical line — thicker with glow */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[3px]">
            <div className="absolute inset-0 bg-gray-100 rounded-full" />
            <div
              ref={lineRef}
              className="absolute inset-0 bg-[#F39200] rounded-full origin-top"
              style={{
                transform: "scaleY(0)",
                boxShadow: "0 0 12px rgba(243, 146, 0, 0.3)",
              }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-10 md:space-y-14">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex items-start gap-8 md:gap-0"
                >
                  {/* Dot — larger with ring */}
                  <div
                    className={`
                                            absolute z-10
                                            left-6 -translate-x-1/2
                                            md:left-1/2 md:-translate-x-1/2
                                            top-8
                                        `}
                  >
                    <div
                      ref={(el) => { dotsRef.current[index] = el; }}
                      className="w-5 h-5 rounded-full bg-gray-200 border-[3px] border-white shadow-md ring-4 ring-transparent"
                      style={{ boxShadow: "0 0 0 4px rgba(243, 146, 0, 0.1), 0 2px 8px rgba(0,0,0,0.1)" }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    ref={(el) => { cardsRef.current[index] = el; }}
                    className={`
                                            ml-14 md:ml-0 md:w-[45%] opacity-0
                                            ${isEven ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}
                                        `}
                  >
                    <div className="group relative rounded-2xl border border-gray-100 bg-gray-50/60 p-7 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-200 hover:-translate-y-1 border-l-[3px] border-l-[#F39200]">
                      {/* Number + Icon row */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          ref={(el) => { iconsRef.current[index] = el; }}
                          className="w-12 h-12 rounded-xl bg-[#F39200]/10 flex items-center justify-center group-hover:bg-[#F39200]/20 transition-colors duration-300"
                        >
                          <step.icon className="w-5.5 h-5.5 text-[#F39200]" />
                        </div>
                        <span className="text-5xl font-black text-gray-200/80 group-hover:text-[#F39200]/20 transition-colors duration-300 select-none tracking-tighter">
                          {step.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 tracking-[-0.02em] mb-2 group-hover:text-[#F39200] transition-colors duration-300">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm leading-relaxed text-gray-500 mb-4">
                        {step.description}
                      </p>

                      {/* Bullet points */}
                      <ul className="space-y-2">
                        {step.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-[13px] text-gray-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F39200] flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Final CTA ── */}
        <div className="text-center mt-16 md:mt-20">
          <Button
            className="group/cta rounded-full bg-[#F39200] hover:bg-[#e08600] text-white px-7 h-11 text-[13px] font-semibold shadow-lg shadow-[#F39200]/20 hover:shadow-[#F39200]/30 transition-all duration-300"
            asChild
          >
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20a%20metodologia%20Macaster."
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com Especialista
              <ArrowRightIcon className="size-3.5 ml-2 transition-transform duration-300 group-hover/cta:translate-x-1" />
            </a>
          </Button>
          <p className="mt-3 text-xs text-gray-400">
            Resposta em até 2h • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
}
