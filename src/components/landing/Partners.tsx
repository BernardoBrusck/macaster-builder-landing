const partners = [
  { name: "Gerdau", logo: "G" },
  { name: "ArcelorMittal", logo: "A" },
  { name: "Votorantim", logo: "V" },
  { name: "InterCement", logo: "I" },
  { name: "Duratex", logo: "D" },
  { name: "Eucatex", logo: "E" },
];

const Partners = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Parceiros
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trabalhamos com os melhores
          </h2>
          <p className="text-muted-foreground text-lg">
            Parcerias estratégicas com os principais fornecedores do mercado para garantir qualidade e competitividade.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="glass-card p-6 lg:p-8 flex items-center justify-center group cursor-pointer hover-lift"
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                  <span className="font-display text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {partner.logo}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
