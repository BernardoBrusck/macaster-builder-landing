import { Search, Scale, Clock, Handshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Análise de Projeto",
    description: "Entendimento completo das necessidades específicas de cada obra para oferecer soluções personalizadas.",
  },
  {
    icon: Scale,
    step: "02",
    title: "Escala de Compra",
    description: "Negociações estratégicas com os melhores fornecedores, aproveitando volume para melhores condições.",
  },
  {
    icon: Clock,
    step: "03",
    title: "Acompanhamento Contínuo",
    description: "Controle de orçamentos e pedidos em tempo real, garantindo transparência em todas as etapas.",
  },
  {
    icon: Handshake,
    step: "04",
    title: "Entrega de Resultado",
    description: "Relacionamento de longo prazo focado em vendas recorrentes e satisfação contínua.",
  },
];

const Methodology = () => {
  return (
    <section id="metodologia" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Como Trabalhamos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Processo Macaster
          </h2>
          <p className="text-muted-foreground text-lg">
            Uma metodologia comprovada para garantir os melhores resultados em cada projeto.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 lg:p-8 hover-lift group"
            >
              {/* Step Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-display text-4xl font-bold text-white/10 group-hover:text-primary/20 transition-colors">
                  {item.step}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
