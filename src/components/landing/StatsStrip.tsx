import { TrendingUp, Building2, Users, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "R$ 10M+",
    label: "em fornecimentos negociados",
  },
  {
    icon: Users,
    value: "1.000+",
    label: "clientes atendidos",
  },
  {
    icon: Building2,
    value: "100%",
    label: "foco em reduzir custos",
  },
  {
    icon: Award,
    value: "5+",
    label: "anos de mercado",
  },
];

const StatsStrip = () => {
  return (
    <section className="relative py-16 border-y border-white/10 bg-secondary/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Placeholder note */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
        <span className="text-xs text-muted-foreground/50 bg-background px-3 py-1 rounded-full border border-white/5">
          *Valores ilustrativos
        </span>
      </div>
    </section>
  );
};

export default StatsStrip;
