import { useRef, useEffect, useState } from "react";
import {
    ArrowRightIcon,
    Building2,
    Phone,
    User,
    CheckCircle2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
gsap.registerPlugin(ScrollTrigger);

const obraTypes = [
    "Residencial",
    "Comercial",
    "Industrial",
    "Infraestrutura",
    "Reforma",
    "Outro",
];

export default function ContactCTA() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const trustRef = useRef<HTMLDivElement>(null);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Headline slide-in from left
            if (headlineRef.current) {
                gsap.fromTo(
                    headlineRef.current.children,
                    { opacity: 0, x: -40 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            end: "bottom 15%",
                            toggleActions: "play reverse play reverse",
                        },
                    }
                );
            }

            // Form slide-in from right
            if (formRef.current) {
                gsap.fromTo(
                    formRef.current,
                    { opacity: 0, x: 40 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        delay: 0.3,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            end: "bottom 15%",
                            toggleActions: "play reverse play reverse",
                        },
                    }
                );
            }

            // Trust items stagger
            if (trustRef.current) {
                gsap.fromTo(
                    trustRef.current.children,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        stagger: 0.12,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: trustRef.current,
                            start: "top 85%",
                            end: "bottom 15%",
                            toggleActions: "play reverse play reverse",
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Gather form data
        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get('name') as string;
        // Phone isn't strictly needed for the link itself if we are opening their WP, 
        // but good to capture if we were sending to a backend. 
        // For the WP message, we can just use name and type.
        const type = formData.get('type') as string;

        // Construct message
        const message = `Olá, me chamo ${name}, gostaria de cotar para obra ${type}.`;
        const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Show success state
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);

        // Reset form
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section
            ref={sectionRef}
            className="w-full pt-16 pb-0 md:pt-20 md:pb-0 relative z-20 -mb-56"
            id="contato"
            style={{ background: "linear-gradient(to bottom, white 50%, transparent 50%)" }}
            data-header-theme="dark"
        >

            <div className="mx-auto max-w-6xl px-4 lg:px-8">
                {/* ... card ... */}
                <div
                    className="relative overflow-hidden rounded-[2.5rem] shadow-2xl"
                    style={{
                        background:
                            "linear-gradient(135deg, #F39200 0%, #FFAB2E 50%, #F39200 100%)",
                    }}
                >
                    {/* ... pattern ... */}
                    <div
                        className="absolute inset-0 opacity-[0.04] pointer-events-none"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                            backgroundSize: "32px 32px",
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 px-8 py-8 md:px-16 md:py-10 lg:px-20 lg:py-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                            {/* Left Column: Headline */}
                            <div ref={headlineRef} className="flex flex-col gap-3">
                                {/* Headline */}
                                <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.1] tracking-[-0.03em]">
                                    Pronto para construir
                                    <br />
                                    com{" "}
                                    <span className="relative">
                                        mais economia
                                        <svg
                                            className="absolute -bottom-1 left-0 w-full"
                                            viewBox="0 0 200 8"
                                            fill="none"
                                        >
                                            <path
                                                d="M1 5.5C40 2 80 2 100 3.5C120 5 160 5 199 2"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeOpacity="0.4"
                                            />
                                        </svg>
                                    </span>
                                    ?
                                </h2>

                                {/* Subtitle */}
                                <p className="text-base text-white/75 leading-relaxed max-w-sm">
                                    Solicite uma cotação sem compromisso e descubra
                                    quanto está deixando de economizar nos materiais
                                    da sua obra.
                                </p>
                            </div>

                            {/* Right Column: Form */}
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-6"
                            >
                                <h3 className="text-lg font-bold text-white mb-0.5">
                                    Solicitar Cotação
                                </h3>

                                {/* Nome */}
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/50 pointer-events-none z-10" />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Seu nome"
                                        required
                                        className="w-full h-10 pl-10 pr-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-medium focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300"
                                    />
                                </div>

                                {/* WhatsApp */}
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/50 pointer-events-none z-10" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="WhatsApp (11) 99999-9999"
                                        required
                                        className="w-full h-10 pl-10 pr-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-medium focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300"
                                    />
                                </div>

                                {/* Tipo de obra */}
                                <div className="relative">
                                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/50 pointer-events-none z-10" />
                                    <Select required name="type">
                                        <SelectTrigger className="w-full h-10 pl-10 pr-4 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium focus:outline-none focus:ring-0 focus:border-white/50 focus:bg-white/15 transition-all duration-300">
                                            <SelectValue placeholder="Tipo de obra" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-black/40 backdrop-blur-xl border-white/10 text-white rounded-[1.5rem] overflow-hidden p-1.5">
                                            {obraTypes.map((type) => (
                                                <SelectItem
                                                    key={type}
                                                    value={type}
                                                    className="focus:bg-white/20 focus:text-white text-white/80 cursor-pointer transition-colors duration-200 rounded-full px-4 py-2 my-0.5"
                                                >
                                                    {type}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={submitted}
                                    className="group/btn relative overflow-hidden w-full h-12 mt-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-sm transition-all duration-500 hover:bg-white/20 hover:border-white/50 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    {/* Shimmer */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-12 group-hover/btn:animate-[cta-shimmer_1.5s_infinite] z-0 pointer-events-none" />

                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {submitted ? (
                                            <>
                                                <CheckCircle2 className="size-4 text-green-600" />
                                                Enviado com sucesso!
                                            </>
                                        ) : (
                                            <>
                                                Solicitar Cotação Grátis
                                                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                            </>
                                        )}
                                    </span>
                                </button>

                                <p className="text-[11px] text-white/40 text-center mt-1">
                                    Sem compromisso · Resposta em até 2h úteis
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
