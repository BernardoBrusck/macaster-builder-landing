import {
  ClientsSection,
  type Stat,
  type Testimonial,
} from "@/components/ui/testimonial-card";

/* ─── Stats ─── */
const stats: Stat[] = [
  { value: "R$ 150M+", label: "Em materiais negociados" },
  { value: "200+", label: "Obras atendidas" },
  { value: "98%", label: "Clientes recorrentes" },
];

/* ─── Testimonials ─── */
const testimonials: Testimonial[] = [
  {
    name: "Carlos Eduardo",
    title: "Diretor de Obras — Construtora Aliança",
    quote: "A Macaster transformou nossa cadeia de suprimentos. Reduzimos custos em 25% e nunca mais tivemos atraso por falta de material na obra.",
    avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5.0,
  },
  {
    name: "Fernanda Ribeiro",
    title: "Engenheira Civil — FR Engenharia",
    quote: "O acompanhamento contínuo e a transparência nos orçamentos são diferenciais que não encontramos em nenhum outro fornecedor.",
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5.0,
  },
  {
    name: "Roberto Almeida",
    title: "Gerente de Compras — Grupo Patriani",
    quote: "Parceria sólida há mais de 3 anos. A escala de compra que a Macaster negocia é impossível de conseguir sozinho.",
    avatarSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 4.9,
  },
  {
    name: "Ana Paula Costa",
    title: "Sócia — Costa & Martins Construções",
    quote: "Desde que começamos com a Macaster, a qualidade dos materiais melhorou e o preço caiu. É exatamente o que uma construtora precisa.",
    avatarSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5.0,
  },
  {
    name: "Marcos Henrique",
    title: "CEO — MH Incorporadora",
    quote: "Atendimento dedicado de verdade. Tenho um canal direto no WhatsApp e qualquer problema é resolvido em horas, não dias.",
    avatarSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    rating: 4.8,
  },
  {
    name: "Juliana Santos",
    title: "Coordenadora de Projetos — Habitat Engenharia",
    quote: "A logística pontual da Macaster é impressionante. Em 15 obras simultâneas, zero atrasos por conta de entrega de material.",
    avatarSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    rating: 5.0,
  },
];

/* ─── Component ─── */
export default function Cases() {
  return (
    <ClientsSection
      tagLabel="Clientes Satisfeitos"
      title="Quem constrói com a Macaster, recomenda"
      description="Mais de 200 construtoras confiam na Macaster para fornecer materiais com qualidade, preço e pontualidade."
      stats={stats}
      testimonials={testimonials}
      id="cases"
      primaryActionLabel="Solicitar Cotação"
      onPrimaryClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
      secondaryActionLabel="Ver Todos os Cases"
      onSecondaryClick={() => document.querySelector('#testimonial-cards')?.scrollIntoView({ behavior: 'smooth' })}
      className="bg-white"
    />
  );
}
