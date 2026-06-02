import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contato" className="py-16 lg:py-24 border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Column 1 - Logo & Description */}
          <div className="lg:col-span-1">
            <span className="font-display text-2xl font-bold text-foreground block mb-4">
              MACASTER
            </span>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Representação comercial em materiais para construção civil. Conectamos você aos melhores fornecedores do mercado.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { href: "#solucoes", label: "Soluções" },
                { href: "#metodologia", label: "Metodologia" },
                { href: "#cases", label: "Cases" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Joinville - SC
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="https://wa.me/5547997027016" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  (47) 99702-7016
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:macaster.representacoes@gmail.com" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  macaster.representacoes@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/macastergroup", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Facebook, href: "#", label: "Facebook" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Macaster. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/50">
            Desenvolvido com ❤️ em Joinville, SC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
