

# Melhorar Carregamento do Video de Fundo no Hero

## Problema
O video de fundo começa com tela preta e depois "pisca" ao aparecer, criando uma experiencia visual ruim.

## Solucao

Implementar um sistema de **fade-in suave** no video, onde:

1. O video comeca com `opacity: 0`
2. Quando o evento `canplay` do video dispara (indicando que ele esta pronto para reproduzir), fazemos uma transicao suave de opacidade para 1
3. Enquanto o video carrega, o overlay escuro (bg-black/70) ja esta visivel, entao o usuario ve o fundo escuro da pagina ao inves de uma tela preta piscando

## Alteracoes Tecnicas

### Arquivo: `src/components/ui/hero-1.tsx`

- Adicionar um `ref` para o elemento `<video>`
- Adicionar estado `videoLoaded` (useState)
- No `useEffect`, escutar o evento `canplay` do video para setar `videoLoaded = true`
- Aplicar classe CSS condicional no video: `opacity-0` quando nao carregado, `opacity-100` quando carregado
- Adicionar `transition-opacity duration-1000` para o fade-in suave
- Mover o overlay escuro para **fora** do container do video (para que ele seja visivel independente do estado do video)

Resultado: o usuario vera o fundo escuro com o conteudo aparecendo normalmente, e o video surgira suavemente por tras quando estiver pronto.
