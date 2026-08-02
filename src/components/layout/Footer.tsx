import { useEffect, useRef } from "react";
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
    institucional: [
        { label: "Início", href: "#" },
        { label: "Sobre Nós", href: "#sobre" },
        { label: "Metodologia", href: "#metodologia" },
        { label: "Cases", href: "#cases" },
    ],
    contato: [
        { icon: Phone, text: "(47) 99702-7016", href: "https://wa.me/5547997027016" },
        { icon: Mail, text: "macaster.representacoes@gmail.com", href: "mailto:macaster.representacoes@gmail.com" },
        { icon: MapPin, text: "Joinville, SC", href: "https://www.google.com/maps/search/?api=1&query=Joinville,+SC" },
    ],
    social: [
        { icon: Instagram, href: "https://instagram.com/macastergroup", label: "Instagram da Macaster" },
        { icon: Linkedin, href: "#", label: "LinkedIn da Macaster" },
        { icon: Facebook, href: "#", label: "Facebook da Macaster" },
    ],
};

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!footerRef.current || !contentRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current!.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement> | React.FormEvent<HTMLFormElement>, href: string) => {
        e.preventDefault();
        if (href === "#") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer 
            ref={footerRef}
            className="text-white pt-16 md:pt-20 pb-8 border-t border-white/10 relative z-0 transform-gpu isolate bg-[#0a0a0a]" 
            data-header-theme="dark"
        >
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div ref={contentRef} className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-16">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-6 max-w-sm">
                        <h2 className="text-2xl font-display font-bold tracking-wider">MACASTER</h2>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Transformando a cadeia de suprimentos da construção civil com tecnologia, economia e transparência.
                        </p>
                        <div className="flex gap-4">
                            {footerLinks.social.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Links & Contact */}
                    <div className="flex flex-col sm:flex-row gap-12 lg:gap-24">
                        {/* Links Column */}
                        <div className="min-w-[140px]">
                            <h3 className="font-bold text-lg mb-6 text-white">Institucional</h3>
                            <ul className="flex flex-col gap-3">
                                {footerLinks.institucional.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleScroll(e, link.href)}
                                            className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm cursor-pointer"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div className="min-w-[280px]">
                            <h3 className="font-bold text-lg mb-6 text-white">Fale Conosco</h3>
                            <ul className="flex flex-col gap-4">
                                {footerLinks.contato.map((item, i) => (
                                    <li key={i}>
                                        <a
                                            href={item.href}
                                            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-colors">
                                                <item.icon size={14} />
                                            </div>
                                            <span className="text-sm">{item.text}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/70">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <p>© {new Date().getFullYear()} Macaster. Todos os direitos reservados.</p>
                        <p>CNPJ: 63.411.775/0001-70</p>
                    </div>
                    <div className="flex gap-6">
                        <a
                            href="https://brusck.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            Desenvolvido pela BRUSCK
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
