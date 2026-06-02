
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";

const footerLinks = {
    institucional: [
        { label: "Sobre Nós", href: "#sobre" },
        { label: "Soluções", href: "#solucoes" },
        { label: "Metodologia", href: "#metodologia" },
        { label: "Cases", href: "#cases" },
    ],
    contato: [
        { icon: Phone, text: "(47) 99702-7016", href: "https://wa.me/5547997027016" },
        { icon: Mail, text: "macaster.representacoes@gmail.com", href: "mailto:macaster.representacoes@gmail.com" },
        { icon: MapPin, text: "Joinville, SC", href: "https://www.google.com/maps/search/?api=1&query=Joinville,+SC" },
    ],
    social: [
        { icon: Instagram, href: "https://instagram.com/macastergroup" },
        { icon: Linkedin, href: "#" },
        { icon: Facebook, href: "#" },
    ],
};

export default function Footer() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement> | React.FormEvent<HTMLFormElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="text-white pt-80 pb-8 border-t border-white/10 relative z-0" data-header-theme="dark">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-2xl font-display font-bold tracking-wider">MACASTER</h2>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Transformando a cadeia de suprimentos da construção civil com tecnologia, economia e transparência.
                        </p>
                        <div className="flex gap-4">
                            {footerLinks.social.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Institucional</h3>
                        <ul className="flex flex-col gap-3">
                            {footerLinks.institucional.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleScroll(e, link.href)}
                                        className="text-white/60 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm cursor-pointer"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Fale Conosco</h3>
                        <ul className="flex flex-col gap-4">
                            {footerLinks.contato.map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={item.href}
                                        className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
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

                    {/* Newsletter Column (Optional) */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg mb-2 text-white">Novidades</h3>
                        <p className="text-white/60 text-sm">Receba notícias do mercado de construção.</p>
                        <form
                            className="flex flex-col gap-3 mt-2"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleScroll(e, '#contato');
                            }}
                        >
                            <input
                                type="email"
                                placeholder="Seu e-mail"
                                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="group/btn relative overflow-hidden bg-white text-black font-bold text-sm py-3 rounded-lg border border-white mix-blend-screen transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white hover:backdrop-blur-md"
                            >
                                {/* Shimmer on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] skew-x-12 group-hover/btn:animate-[shimmer_1.5s_infinite] z-0 pointer-events-none" />
                                <span className="relative z-10">Inscrever-se</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <p>© {new Date().getFullYear()} Macaster. Todos os direitos reservados.</p>
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
