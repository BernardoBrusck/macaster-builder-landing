import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Construção civil"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Representação Comercial em Materiais</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            CONTROLE, PROXIMIDADE.{" "}
            <span className="gradient-text">RESULTADO NA OBRA.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Conectamos construtoras, incorporadoras e engenheiros aos melhores fornecedores do mercado com atendimento personalizado e negociações estratégicas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg"
              onClick={() => scrollToSection("#contato")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl btn-glow text-base px-8 h-14"
            >
              Cotar Materiais
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#cases")}
              className="border-white/20 text-foreground hover:bg-white/10 rounded-xl text-base px-8 h-14"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Portfólio
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
