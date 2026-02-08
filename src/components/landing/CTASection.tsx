import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pronto para otimizar suas compras de obra?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Entre em contato e descubra como a Macaster pode ajudar sua construtora a economizar tempo e dinheiro.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl btn-glow text-base px-10 h-14"
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
