const solutions = [
  {
    title: "Madeiras para Construção",
    description: "Qualidade estrutural para todas as etapas da obra. Fornecemos madeiras certificadas com a melhor relação custo-benefício.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    features: ["Eucalipto tratado", "Pinus serrado", "Madeira de lei"],
  },
  {
    title: "Concreto Usinado",
    description: "Entrega programada com precisão logística. Parcerias com as melhores usinas para garantir qualidade e pontualidade.",
    image: "https://images.unsplash.com/photo-1590767950092-42b8362368da?w=600&q=80",
    features: ["Bombeável", "Convencional", "Especial"],
  },
  {
    title: "Compensados",
    description: "Plastificados, resinados, estruturais e especiais. Variedade completa para cada necessidade do seu projeto.",
    image: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?w=600&q=80",
    features: ["Plastificado", "Resinado", "Naval"],
  },
];

const Solutions = () => {
  return (
    <section id="solucoes" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nossas Soluções
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Materiais de qualidade para sua obra
          </h2>
          <p className="text-muted-foreground text-lg">
            Representamos os melhores fornecedores do mercado, garantindo qualidade, preço e pontualidade.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card hover-lift cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                
                {/* Description - shows on hover */}
                <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100">
                  <p className="text-sm text-muted-foreground mb-4">
                    {solution.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
