# Projeto

Blog de tecnologia sobre produtos eletrônicos, reviews, notícias e guias de compra.

## Stack

- Astro
- TypeScript em modo strict
- MDX para artigos
- Astro Content Collections
- Tailwind CSS
- React apenas para componentes interativos
- Astro Image para imagens
- Pagefind para pesquisa
- Site estático, sem banco de dados

## Regras de desenvolvimento

- Priorizar componentes `.astro`.
- Usar React apenas quando houver interatividade no navegador.
- Evitar JavaScript no cliente sem necessidade.
- Manter componentes pequenos e reutilizáveis.
- Utilizar TypeScript sem `any`.
- Não adicionar dependências sem explicar a necessidade.
- Não alterar muitos arquivos de uma vez sem necessidade.
- Preservar SEO, responsividade, acessibilidade e desempenho.
- Todas as imagens devem possuir texto alternativo.
- Links de afiliados serão postos por mim em campos indicados por você.

## Organização planejada

- `src/components`: componentes reutilizáveis.
- `src/layouts`: layouts gerais e de artigos.
- `src/content/articles`: artigos MDX.
- `src/content/products`: dados dos produtos.
- `src/pages`: rotas do site.
- `src/assets`: imagens processadas pelo Astro.
- `public`: arquivos públicos que não precisam de processamento.

## Fluxo de trabalho

Antes de editar:
1. Analise os arquivos e skills relacionados (skills se encontra em "./skills").
2. Explique resumidamente o que será alterado.
3. Faça mudanças pequenas.
4. Execute verificação de tipos e build.
5. Informe os arquivos modificados.