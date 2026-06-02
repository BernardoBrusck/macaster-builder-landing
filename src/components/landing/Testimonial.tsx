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

            <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground font-light leading-relaxed mb-8 mt-4">
              "Acredito que o melhor fornecedor não é o que vende mais barato, mas o que entrega a solução certa para que a obra avance com segurança, eficiência e previsibilidade."
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">KE</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">Kevin Eduardo</div>
                <div className="text-sm text-muted-foreground">Especialista — Macaster Gestor</div>
              </div>
            </div>
          </div>

          {/* End of Card */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
