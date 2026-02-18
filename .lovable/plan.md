
# Animacoes de Entrada e Saida em Todos os Elementos

## Objetivo
Fazer com que todos os elementos animados tenham animacao de **entrada** ao aparecer e **saida** ao sair da viewport, e que ao voltar (scroll para cima), a animacao de entrada se repita.

## Como Funciona
No GSAP ScrollTrigger, a propriedade `toggleActions` controla o comportamento em 4 momentos:
- `onEnter` (scroll para baixo, elemento entra)
- `onLeave` (scroll para baixo, elemento sai)
- `onEnterBack` (scroll para cima, elemento volta)
- `onLeaveBack` (scroll para cima, elemento sai por cima)

O valor `"play reverse play reverse"` faz exatamente o que voce quer:
- Entra: anima para o estado final (play)
- Sai: volta ao estado inicial (reverse)
- Volta: anima de novo (play)
- Sai por cima: volta ao estado inicial (reverse)

## Situacao Atual

| Componente | Comportamento atual | Animacoes |
|---|---|---|
| AboutUs | Toca uma vez | Heading, content fade, image reveal, stats, pillar cards |
| Methodology | `once: true` | Header, step cards, icons, numbers |
| Solutions | `once: true` | Header, panel content |
| Differentials | `once: true` | Stat items + counters |
| ContactCTA | `once: true` | Heading, form, trust badges |
| testimonial-card | `once: true` (stats), `toggleActions` (cards) | Cards ja funcionam corretamente |

## Alteracoes por Arquivo

### 1. `src/components/landing/AboutUs.tsx`
- Em todas as 5 animacoes ScrollTrigger (heading, content, image reveal, stats, pillars):
  - Adicionar `toggleActions: "play reverse play reverse"`
- O counter de stats precisa resetar: ao `onLeaveBack`/`onLeave`, setar `countersActive = false`; ao entrar de novo, reativar

### 2. `src/components/landing/Methodology.tsx`
- Em todas as 4 animacoes ScrollTrigger (header, step cards, icons, numbers):
  - Remover `once: true`
  - Adicionar `toggleActions: "play reverse play reverse"`

### 3. `src/components/landing/Solutions.tsx`
- Na animacao do header:
  - Remover `once: true`
  - Adicionar `toggleActions: "play reverse play reverse"`
- Nas animacoes dentro do horizontal scroll (paineis): manter `once: true` pois sao animacoes dentro de um scroll horizontal pinned e reverter causaria problemas visuais

### 4. `src/components/landing/Differentials.tsx`
- Na animacao dos stat items:
  - Remover `once: true`
  - Adicionar `toggleActions: "play reverse play reverse"`
- O counter precisa re-executar ao entrar de novo: usar `onEnterBack` para chamar `animateValue` novamente e resetar os valores ao sair

### 5. `src/components/landing/ContactCTA.tsx`
- Em todas as 3 animacoes ScrollTrigger (heading, form, trust badges):
  - Remover `once: true`
  - Adicionar `toggleActions: "play reverse play reverse"`

### 6. `src/components/ui/testimonial-card.tsx`
- Na animacao dos stats/counters:
  - Remover `once: true`
  - Adicionar `toggleActions: "play reverse play reverse"`
  - Adicionar `onEnterBack` para re-executar os counters
- Cards ja estao corretos com `toggleActions: "play none none reverse"`

## Tratamento Especial: Counters

Os contadores numericos (AboutUs, Differentials, testimonial-card) precisam de logica extra:
- Ao sair da tela: resetar o texto para "0"
- Ao entrar novamente: re-executar a animacao de contagem
- Isso sera feito usando os callbacks `onEnter`, `onEnterBack`, `onLeave` e `onLeaveBack` do ScrollTrigger

## Detalhes Tecnicos

Exemplo da mudanca padrao (antes/depois):

```text
ANTES:
scrollTrigger: {
    trigger: el,
    start: "top 85%",
    once: true,
}

DEPOIS:
scrollTrigger: {
    trigger: el,
    start: "top 85%",
    end: "bottom 15%",
    toggleActions: "play reverse play reverse",
}
```

O `end: "bottom 15%"` define quando o elemento "saiu" da viewport, ativando o reverse. Valores serao ajustados por componente para timing natural.
