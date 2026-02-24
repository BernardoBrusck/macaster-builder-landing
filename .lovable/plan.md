

## Reduzir o comprimento do scroll horizontal na seção de Soluções

### Problema
A seção de Soluções usa scroll horizontal com GSAP onde o `end` do ScrollTrigger e calculado como `track.offsetWidth - window.innerWidth`. Como o track tem `width: 300vw` (3 paineis x 100vw), isso cria uma area de scroll muito longa (~200vh de scroll vertical para percorrer todo o conteudo horizontal).

### Solucao
Reduzir o multiplicador do scroll para que a transicao entre os cards exija menos scroll vertical.

### Mudancas tecnicas

**`src/components/landing/Solutions.tsx`** (1 alteracao):
- Linha 86: Alterar o calculo do `end` do ScrollTrigger para usar um multiplicador menor, reduzindo o scroll necessario:
  ```typescript
  // De:
  end: () => "+=" + (track.offsetWidth - window.innerWidth),
  // Para:
  end: () => "+=" + (track.offsetWidth - window.innerWidth) * 0.5,
  ```
- Aplicar o mesmo multiplicador na linha 98 (progress bar end) para manter a barra de progresso sincronizada.
- Ajustar o `scrub` de `1` para `0.5` para uma resposta mais rapida ao scroll.

Isso reduz pela metade a quantidade de scroll vertical necessaria para percorrer todos os 3 cards.

