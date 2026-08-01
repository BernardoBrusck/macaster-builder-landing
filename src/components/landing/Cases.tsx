import {
  ClientsSection,
  type Stat,
  type Testimonial,
} from "@/components/ui/testimonial-card";

/* ─── Stats ─── */
const stats: Stat[] = [
  { value: "R$ 10M+", label: "Gerados em negócios" },
  { value: "500+", label: "Clientes atendidos" },
  { value: "5+", label: "Anos de mercado" },
];

/* ─── Testimonials ─── */
const testimonials: Testimonial[] = [
  {
    name: "Vetter Empreendimentos",
    title: "Construtora e Incorporadora",
    quote: "Sempre atencioso, disposto a ajudar e resolver alguma pendência ou situação. Super recomendo.",
    avatarSrc: "/logos-parceiros/logo-vetter.webp",
    rating: 5.0,
  },
  {
    name: "Construtora Medeli",
    title: "Construção Civil",
    quote: "Foi ótima experiência trabalhando contigo como fornecedor, o que mais chama atenção é a rapidez no atendimento.",
    avatarSrc: "/logos-parceiros/logo-medeli.webp",
    rating: 5.0,
  },
  {
    name: "Vici Incorporadora",
    title: "Construtora e Incorporadora",
    quote: "É um profissional excelente, sempre disponível para nos atender da melhor forma. Demonstra proatividade, conduz as negociações de maneira equilibrada, buscando soluções que sejam benéficas para ambas as partes. Além disso, está sempre focado em oferecer o que há de melhor para o cliente, com comprometimento, agilidade e atenção às necessidades apresentadas.",
    avatarSrc: "/logos-parceiros/logo-vici.webp",
    rating: 5.0,
  },
  {
    name: "Construtora Inovar",
    title: "Incorporadora e Construtora",
    quote: "Nossa experiência trabalhando em conjunto tem sido muito positiva. Sempre que precisamos, o atendimento é rápido e as solicitações são respondidas com agilidade. As negociações são conduzidas de forma transparente, buscando boas condições comerciais e de pagamento, o que contribui bastante para a nossa parceria. Outro ponto que merece destaque é a qualidade dos materiais fornecidos, que atende às nossas expectativas. Em alguns momentos tivemos intercorrências relacionadas às entregas, mas o diferencial foi a postura em buscar soluções e manter uma comunicação aberta, sem deixar nossas demandas sem retorno. Essa disponibilidade para resolver problemas, aliada ao comprometimento, à agilidade e à flexibilidade nas negociações, faz com que a parceria seja baseada em confiança e gere bons resultados para ambas as partes.",
    avatarSrc: "/logos-parceiros/logo-inovar.webp",
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
