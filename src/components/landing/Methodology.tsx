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
              end: "bottom 15%",
              toggleActions: "play reverse play reverse",
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
              end: "bottom 15%",
              toggleActions: "play reverse play reverse",
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
              backgroundColor: "#ffffff",
              duration: 0.5,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                end: "bottom 15%",
                toggleActions: "play reverse play reverse",
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
                end: "bottom 15%",
                toggleActions: "play reverse play reverse",
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
      className="relative w-full overflow-hidden bg-white py-24 md:py-32"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div ref={headerRef} className="text-center max-w-xl mx-auto mb-14 md:mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-zinc-900 mb-4">
            Metodologia
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold leading-[1.12] tracking-[-0.03em] text-zinc-900 mb-4">
            Transformando o caos da <br className="hidden sm:block" />
            <span className="text-zinc-900">obra em resultado</span>
          </h2>
          <p className="text-[0.9rem] leading-relaxed text-gray-500">
            Uma metodologia comprovada em cada etapa, do orçamento à entrega final.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div ref={stepsContainerRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2">
            <div className="absolute inset-0 bg-gray-200 rounded-full" />
            <div
              ref={lineRef}
              className="absolute inset-0 bg-zinc-800 rounded-full origin-top"
              style={{
                transform: "scaleY(0)",
                boxShadow: "0 0 12px rgba(255, 255, 255, 0.3)",
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
                  {/* Dot */}
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
                      className="w-5 h-5 rounded-full bg-gray-700 border-[3px] border-[#050505] shadow-md ring-4 ring-transparent"
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
                    <div className="group relative rounded-2xl border border-zinc-800 bg-[#111111] p-7 md:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 border-l-[3px] border-l-white"
                         style={{ background: "linear-gradient(135deg, #111111 0%, #222222 50%, #111111 100%)" }}>
                      {/* Number + Icon row */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          ref={(el) => { iconsRef.current[index] = el; }}
                          className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300"
                        >
                          <step.icon className="w-5.5 h-5.5 text-white" />
                        </div>
                        <span className="text-5xl font-black text-white/10 group-hover:text-white/20 transition-colors duration-300 select-none tracking-tighter">
                          {step.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white tracking-[-0.02em] mb-2 group-hover:text-white transition-colors duration-300">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[13px] leading-relaxed text-gray-400 mb-6 line-clamp-2">
                        {step.description}
                      </p>

                      {/* Bullet points */}
                      <ul className="space-y-2">
                        {step.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-[13px] text-gray-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0" />
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
            className="group/cta rounded-full bg-[#111111] hover:bg-black text-white px-7 h-11 text-[13px] font-semibold shadow-lg shadow-black/10 hover:shadow-black/20 transition-all duration-300"
            asChild
          >
            <a
              href="https://wa.me/5547997027016?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20a%20metodologia%20Macaster."
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
