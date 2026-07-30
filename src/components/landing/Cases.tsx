import {
  ClientsSection,
  type Stat,
  type Testimonial,
} from "@/components/ui/testimonial-card";

/* ─── Stats ─── */
const stats: Stat[] = [
  { value: "R$ 10M+", label: "Em representação" },
  { value: "500+", label: "Clientes atendidos" },
  { value: "5+", label: "Anos de mercado" },
];

/* ─── Testimonials ─── */
const testimonials: Testimonial[] = [
  {
    name: "Hélio Leutz",
    title: "Almoxarife",
    quote: "Sempre atencioso, disposto a ajudar e resolver alguma pendência ou situação. Super recomendo.",
    avatarSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5.0,
  },
  {
    name: "Julia",
    title: "Construtora Medeli",
    quote: "Foi ótima experiência trabalhando contigo como fornecedor, o que mais chama atenção é a rapidez no atendimento.",
    avatarSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    rating: 5.0,
  },
  {
    name: "Karem Naiara",
    title: "Vici Incorporadora",
    quote: "É um profissional excelente, sempre disponível para nos atender da melhor forma. Demonstra proatividade, conduz as negociações de maneira equilibrada, buscando soluções que sejam benéficas para ambas as partes. Além disso, está sempre focado em oferecer o que há de melhor para o cliente, com comprometimento, agilidade e atenção às necessidades apresentadas.",
    avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5.0,
  },
];

/* ─── Component ─── */
export default function Cases() {
  return (
    <ClientsSection
      tagLabel="Depoimentos Reais"
      title="Quem constrói com a Macaster, recomenda"
      description="Depoimentos reais de clientes que confiam na Macaster para fornecer materiais com qualidade, agilidade e excelência no atendimento."
      stats={stats}
      testimonials={testimonials}
      id="cases"
      primaryActionLabel="Solicitar Cotação"
      onPrimaryClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
      secondaryActionLabel="Falar no WhatsApp"
      onSecondaryClick={() => window.open('https://wa.me/5547997027016?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista.', '_blank')}
      className="bg-white"
    />
  );
}
