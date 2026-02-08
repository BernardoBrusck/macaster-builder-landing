import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground font-light leading-relaxed mb-8 mt-4">
              "A parceria com a Macaster transformou nossa gestão de compras. A proximidade no atendimento e a qualidade das negociações nos trouxeram economia real e previsibilidade que não tínhamos antes."
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">RC</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">Ricardo Carvalho</div>
                <div className="text-sm text-muted-foreground">Diretor Técnico — BuildCorp Engenharia</div>
              </div>
            </div>
          </div>

          {/* Placeholder note */}
          <p className="text-center text-xs text-muted-foreground/50 mt-4">
            *Depoimento ilustrativo
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
