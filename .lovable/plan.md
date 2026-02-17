

# Diagnostico e Otimizacao de Performance - Macaster

## Problemas Identificados

### 1. Video de fundo pesado com `preload="auto"`
O video `/background-video.mp4` esta com `preload="auto"`, forcando o download completo antes de iniciar. Isso bloqueia o carregamento inicial e prejudica o LCP (Largest Contentful Paint). Alem disso, o `<link rel="preload">` no `index.html` duplica esse esforco.

### 2. Fontes bloqueantes via `@import` no CSS
A fonte Inter esta sendo carregada via `@import url(...)` no `index.css`, que e render-blocking. Isso atrasa o FCP (First Contentful Paint).

### 3. GSAP e Framer Motion carregados no bundle inicial
O Hero usa GSAP para animacoes de entrada, e o InfiniteSlider usa Framer Motion. Ambos sao bibliotecas pesadas carregadas no bundle principal.

### 4. Imagens externas sem dimensoes definidas
As imagens do Unsplash (AboutUs, testimonials) nao tem `width`/`height` definidos, causando CLS (Cumulative Layout Shift).

### 5. Scroll listener sem `passive` flag (useScroll)
O hook `useScroll` adiciona listener sem `{ passive: true }`, prejudicando a responsividade do scroll.

### 6. Header theme detection com scroll listener nao-otimizado
O `useHeaderTheme` usa `querySelectorAll` em cada scroll event sem throttle, causando trabalho excessivo na main thread.

### 7. Inline `<style>` tags em componentes
Hero e TestimonialCard injetam `<style>` com keyframes inline, recriando estilos a cada render.

---

## Plano de Otimizacao

### A. Video de fundo (impacto alto)
- Trocar `preload="auto"` por `preload="metadata"` no video
- Remover `<link rel="preload" href="/background-video.mp4">` do `index.html` (preload de videos grandes e desperdicio de banda)
- Adicionar `poster` attribute com um frame do video (ou cor solida) para exibir algo instantaneo

### B. Fontes (impacto alto)
- Mover a importacao de fontes do `@import` no CSS para `<link>` tags no `index.html` com `display=swap`
- Remover o `@import url(...)` do `index.css`
- Adicionar `<link rel="preload" as="style">` para as fontes

### C. Scroll listeners (impacto medio)
- Adicionar `{ passive: true }` ao `useScroll` hook
- Adicionar throttle simples (via `requestAnimationFrame`) ao `useHeaderTheme`

### D. Inline styles para CSS (impacto baixo-medio)
- Mover keyframes `shimmer` e `cta-shimmer` dos componentes para o `index.css`
- Remover as tags `<style>` inline do Hero e ContactCTA

### E. Imagens com dimensoes (impacto medio - CLS)
- Adicionar `width` e `height` explicitos nas imagens do AboutUs e testimonials
- Adicionar `loading="lazy"` nas imagens abaixo da dobra

### F. Acessibilidade e meta (impacto baixo)
- Adicionar `<meta name="description">` mais curta e focada (ja existe, apenas verificar)
- Garantir que botoes tenham `aria-label` adequados

---

## Detalhes Tecnicos

### Arquivos modificados:

1. **`index.html`** - Remover preload do video, mover fontes para `<link>` tags
2. **`src/index.css`** - Remover `@import url(...)`, adicionar keyframes shimmer/cta-shimmer
3. **`src/components/ui/hero-1.tsx`** - `preload="metadata"`, remover `<style>` inline
4. **`src/components/ui/use-scroll.ts`** - Adicionar `{ passive: true }`
5. **`src/components/ui/header-1.tsx`** - Throttle no useHeaderTheme com rAF
6. **`src/components/landing/AboutUs.tsx`** - `width`/`height` e `loading="lazy"` na imagem
7. **`src/components/ui/testimonial-card.tsx`** - Remover `<style>` inline (shimmer)
8. **`src/components/landing/ContactCTA.tsx`** - Remover `<style>` inline (cta-shimmer)

