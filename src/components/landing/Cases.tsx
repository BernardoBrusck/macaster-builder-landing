const cases = [
  {
    title: "Nexus Business Tower",
    location: "Joinville, SC",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    materials: "Concreto, Aço, Compensados",
  },
  {
    title: "Residencial Vista Mar",
    location: "Balneário Camboriú, SC",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    materials: "Madeiras, Concreto Usinado",
  },
  {
    title: "Centro Logístico ABC",
    location: "Itajaí, SC",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    materials: "Estrutura Metálica, Concreto",
  },
  {
    title: "Shopping Park Center",
    location: "Florianópolis, SC",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    materials: "Compensados, Madeiras",
  },
];

const Cases = () => {
  return (
    <section id="cases" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Cases
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Obras que construímos juntos
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça alguns dos projetos onde a Macaster contribuiu com soluções em materiais.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cases.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span className="inline-block text-xs text-primary font-semibold mb-2">
                  {project.materials}
                </span>
                <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.location}
                </p>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-colors" />
            </div>
          ))}
        </div>

        {/* Placeholder note */}
        <p className="text-center text-xs text-muted-foreground/50 mt-8">
          *Projetos ilustrativos
        </p>
      </div>
    </section>
  );
};

export default Cases;
