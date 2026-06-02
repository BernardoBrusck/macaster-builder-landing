const partners = [
  { name: "Sinercon", fullName: "Sinercon Construtora", logo: "S" },
  { name: "Alicerce", fullName: "Alicerce Empreend.", logo: "A" },
  { name: "Medeli", fullName: "Construtora Medeli", logo: "M" },
  { name: "Stein", fullName: "Construtora Stein", logo: "S" },
  { name: "Embracol", fullName: "Embracol Construtora", logo: "E" },
  { name: "Xpcon", fullName: "Xpcon Empreend.", logo: "X" },
  { name: "Inovar", fullName: "Construtora Inovar", logo: "I" },
  { name: "Viplan", fullName: "Construtora Viplan", logo: "V" },
  { name: "Isensee", fullName: "Isensee Empreend.", logo: "I" },
  { name: "Gart", fullName: "Gart Empreend.", logo: "G" },
  { name: "Estrutura", fullName: "Grupo Estrutura", logo: "E" },
  { name: "Torresani", fullName: "Torresani", logo: "T" },
  { name: "Trapp", fullName: "Trapp Ferreira", logo: "T" },
  { name: "Copas", fullName: "Copas Engenharia", logo: "C" },
  { name: "Granada", fullName: "Granada Construtora", logo: "G" },
];

const Partners = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Nossos Clientes
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Clientes renomados do mercado
          </h2>
          <p className="text-muted-foreground text-lg">
            Garantindo a base de grandes obras em Joinville e região.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors block">
                  {partner.name}
                </span>
                <span className="text-xs text-muted-foreground/50 hidden group-hover:block transition-all mt-1">
                  {partner.fullName}
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
