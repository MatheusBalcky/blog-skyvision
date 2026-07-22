---
name: sky-vision-visual-identity
description: >
  Preserva e aplica a identidade visual oficial do blog Sky Vision em páginas,
  layouts, componentes Astro, interfaces React e estilos Tailwind/CSS. Usar ao
  criar ou revisar qualquer elemento visível do site, incluindo cabeçalho,
  rodapé, cards, navegação, páginas editoriais, temas claro/escuro, responsividade,
  ícones, tipografia, cores, espaçamento e estados interativos.
---

# Identidade Visual Sky Vision

## Princípio

Criar uma experiência editorial tecnológica clara, confiável e contemporânea.
Transmitir leveza no tema claro e profundidade no tema escuro, sempre usando o
azul-céu como assinatura visual.

Antes de implementar, inspecionar `src/styles/global.css`,
`src/components/layout/` e `src/layouts/BaseLayout.astro`. Reutilizar tokens e
componentes existentes. Não criar uma segunda fonte de verdade para a marca.

## Marca

- Nome: **Sky Vision**.
- Escrever `Sky` com o peso regular e `Vision` em negrito azul quando a marca
  aparecer como logotipo textual.
- Usar o símbolo orbital existente em `Header.astro`; não redesenhá-lo em cada
  página.
- Tom de voz: direto, acessível, objetivo e confiável.
- Conceito editorial: “tecnologia com clareza”.

## Paleta

Usar estes tokens sem substituir por hexadecimais dispersos nos componentes:

| Papel | Tema claro | Tema escuro |
|---|---:|---:|
| Primária | `#0EA5E9` | `#38BDF8` |
| Primária hover | `#0284C7` | `#7DD3FC` |
| Primária suave | `#E0F2FE` | `#0B3449` |
| Fundo | `#F6F9FC` | `#0B1218` |
| Superfície | `#FFFFFF` | `#111C24` |
| Superfície secundária | `#EDF4F8` | `#172731` |
| Texto | `#102331` | `#EEF8FC` |
| Texto secundário | `#587083` | `#9EB3C0` |
| Borda | `#D9E5EC` | `#263A46` |

Aplicar a cor primária em marca, links ativos, controles, pequenos destaques e
ações principais. Evitar grandes áreas totalmente azuis. Usar cores auxiliares
apenas em ilustrações, categorias ou dados sem competir com a marca.

## Tema

- Manter o tema claro como padrão.
- Controlar o tema com `data-theme="light|dark"` no elemento `<html>`.
- Persistir a escolha em `localStorage` com a chave `sky-vision-theme`.
- Definir as cores por variáveis CSS sem duplicar componentes entre os temas.
- Preservar contraste de texto, bordas e foco nos dois temas.
- Evitar flash de tema incorreto: aplicar a preferência no `<head>` antes do
  conteúdo visível.

## Tipografia

- Usar a pilha definida por `--font-sans`: Inter, Segoe UI e fontes do sistema.
- Títulos: peso forte, espaçamento levemente negativo e entrelinha compacta.
- Corpo: peso regular, entrelinha confortável e cor de texto secundária quando
  não for conteúdo principal.
- Usar caixa alta somente em etiquetas curtas, com tracking maior.
- Evitar excesso de pesos, fontes decorativas ou texto pequeno abaixo de `14px`.

## Layout e espaçamento

- Usar `.container-shell`: largura máxima de `72rem` e margens laterais fluidas.
- Manter bastante espaço vazio e hierarquia clara entre seções.
- Usar grid editorial de três colunas em desktop e uma coluna em telas estreitas.
- Adotar ritmo baseado principalmente em múltiplos de `4px`.
- Usar raios entre `8px` e `18px`; cards principais usam aproximadamente `18px`.
- Usar sombras suaves e azuladas no claro e sombras discretas no escuro.
- Não comprimir conteúdo para imitar portais densos; preservar leitura e clareza.

## Componentes

### Cabeçalho

- Manter duas faixas: marca e ações acima; categorias abaixo.
- Usar fundo translúcido, blur, borda sutil e comportamento sticky.
- Permitir rolagem horizontal da navegação em telas pequenas.
- Destacar a rota ativa com azul e borda inferior.

### Cards

- Usar superfície, borda sutil, raio consistente e sombra leve.
- Organizar conteúdo na ordem: contexto visual, categoria/metadados, título e resumo.
- Limitar efeitos decorativos; um glow suave ou detalhe cromático é suficiente.
- Garantir que o card inteiro ou sua ação principal tenha estado de hover e foco.

### Botões e ícones

- Usar botões circulares para ações compactas do cabeçalho.
- Usar ícones lineares, cantos arredondados e `stroke-width` próximo de `1.8`.
- Incluir `aria-label` em controles apenas com ícone.
- Reutilizar SVGs existentes ou um mesmo sistema de ícones; não misturar estilos.

### Rodapé

- Usar superfície distinta do fundo, borda superior e conteúdo contido.
- Repetir a assinatura textual da marca e oferecer links institucionais claros.

## Conteúdo visual

- Priorizar imagens de produto limpas, bem iluminadas e com fundo simples.
- Usar Astro Image para imagens editoriais e sempre fornecer texto alternativo.
- Manter proporções consistentes dentro de uma mesma grade.
- Não usar imagens genéricas sem relação com eletrônicos ou tecnologia.

## Interação e acessibilidade

- Criar primeiro com HTML e componentes Astro; usar React somente quando a
  interação justificar hidratação.
- Exibir foco visível com a cor primária.
- Manter alvos interativos próximos de `42px` ou maiores.
- Respeitar `prefers-reduced-motion`.
- Não comunicar estado apenas por cor.
- Preservar link “Pular para o conteúdo”, landmarks e labels de navegação.

## Checklist

Antes de concluir qualquer interface, confirmar:

1. O tema claro continua sendo o padrão e ambos os temas funcionam?
2. Foram reutilizados os tokens e componentes existentes?
3. O azul aparece como destaque, sem dominar toda a interface?
4. A largura, os espaços, raios, ícones e tipografia seguem este guia?
5. A interface responde bem em desktop e mobile?
6. Contraste, foco, labels e redução de movimento estão preservados?
7. A página continua leve e majoritariamente estática?
