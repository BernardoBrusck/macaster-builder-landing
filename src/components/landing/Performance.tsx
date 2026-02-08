const Performance = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Performance
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Resultados que impactam sua obra
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Nossa metodologia gera economia real e previsibilidade no cronograma. Acompanhe a evolução dos resultados ao longo do tempo.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-5">
                <div className="text-3xl font-display font-bold text-primary mb-1">18%</div>
                <div className="text-sm text-muted-foreground">economia média por obra</div>
              </div>
              <div className="glass-card p-5">
                <div className="text-3xl font-display font-bold text-primary mb-1">99.2%</div>
                <div className="text-sm text-muted-foreground">precisão de cronograma</div>
              </div>
            </div>
          </div>

          {/* SVG Chart */}
          <div className="glass-card p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-foreground">Economia Gerada (R$ mil)</h3>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Economia</span>
                </div>
              </div>
            </div>

            <svg viewBox="0 0 400 200" className="w-full h-auto">
              {/* Grid Lines */}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(36 100% 48%)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(36 100% 48%)" stopOpacity="1" />
                  <stop offset="100%" stopColor="hsl(28 100% 55%)" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(36 100% 48%)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(36 100% 48%)" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Horizontal Grid */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1="40"
                  y1={30 + i * 35}
                  x2="380"
                  y2={30 + i * 35}
                  stroke="white"
                  strokeOpacity="0.1"
                  strokeDasharray="4 4"
                />
              ))}

              {/* Y-axis Labels */}
              {["500", "400", "300", "200", "100", "0"].map((label, i) => (
                <text
                  key={i}
                  x="32"
                  y={35 + i * 35}
                  fill="white"
                  fillOpacity="0.4"
                  fontSize="10"
                  textAnchor="end"
                >
                  {label}
                </text>
              ))}

              {/* X-axis Labels */}
              {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"].map((month, i) => (
                <text
                  key={i}
                  x={60 + i * 60}
                  y="195"
                  fill="white"
                  fillOpacity="0.4"
                  fontSize="10"
                  textAnchor="middle"
                >
                  {month}
                </text>
              ))}

              {/* Area Fill */}
              <path
                d="M60,150 L120,130 L180,100 L240,80 L300,50 L360,30 L360,170 L60,170 Z"
                fill="url(#areaGradient)"
              />

              {/* Main Line */}
              <path
                d="M60,150 L120,130 L180,100 L240,80 L300,50 L360,30"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data Points */}
              {[
                { x: 60, y: 150 },
                { x: 120, y: 130 },
                { x: 180, y: 100 },
                { x: 240, y: 80 },
                { x: 300, y: 50 },
                { x: 360, y: 30 },
              ].map((point, i) => (
                <g key={i}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="6"
                    fill="hsl(217 58% 9%)"
                    stroke="hsl(36 100% 48%)"
                    strokeWidth="2"
                  />
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
