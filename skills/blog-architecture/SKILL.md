---
name: blog-architecture
description: >
  Define a arquitetura, organização de arquivos, convenções e padrões de
  desenvolvimento para um blog de tecnologia construído com Astro.
---

# Astro Blog Architecture

## Objetivo

Esta skill define a arquitetura oficial do projeto.

Todo código gerado deve seguir esta organização, evitando duplicações,
componentes grandes e estruturas inconsistentes.

O projeto possui foco em:

- SEO
- Performance
- Conteúdo estático
- Reviews
- Guias de compra
- Links de afiliados
- Escalabilidade

---

# Stack oficial

Framework:
- Astro

Linguagem:
- TypeScript (strict)

Conteúdo:
- MDX
- Astro Content Collections

Estilização:
- Tailwind CSS

Componentes interativos:
- React apenas quando necessário

Imagens:
- Astro Image

Pesquisa:
- Pagefind

Hospedagem:
- Site totalmente estático

Versionamento:
- Git

Banco de dados:
- Não utilizar.

---

# Filosofia

Priorizar HTML estático.

Evitar JavaScript no cliente.

Toda interatividade deve ser opcional.

Sempre que possível utilizar componentes `.astro`.

React somente para elementos que realmente necessitem hidratação.

---

# Estrutura oficial

```text

src/

├── assets/
│   ├── articles/
│   ├── authors/
│   ├── brands/
│   ├── categories/
│   └── products/
│
├── components/
│   ├── article/
│   ├── common/
│   ├── home/
│   ├── layout/
│   ├── product/
│   ├── seo/
│   └── ui/
│
├── content/
│   ├── articles/
│   ├── products/
│   ├── authors/
│   ├── categories/
│   └── config.ts
│
├── layouts/
│   ├── BaseLayout.astro
│   ├── ArticleLayout.astro
│   ├── CategoryLayout.astro
│   └── ProductLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── artigos/
│   ├── categorias/
│   ├── produtos/
│   ├── guias/
│   ├── reviews/
│   ├── busca/
│   ├── sobre.astro
│   ├── contato.astro
│   ├── politica-de-privacidade.astro
│   ├── politica-de-afiliados.astro
│   └── sitemap.xml.ts
│
├── styles/
│   └── global.css
│
├── utils/
│
├── lib/
│
└── types/

```

---

# Pasta assets

Utilizar para imagens processadas pelo Astro.

Separar imagens por domínio.

Exemplo:

- articles
- products
- authors
- brands

Não utilizar imagens públicas sem necessidade.

---

# Pasta content

Todo conteúdo do blog deve ficar nesta pasta.

Nunca colocar artigos dentro de pages.

Cada artigo deve utilizar MDX.

Cada produto deve possuir seu próprio arquivo.

---

# Components

Componentes devem ser pequenos.

Sempre reutilizáveis.

Separar por domínio.

Exemplo:

components/

article/
- ArticleCard
- ArticleHeader
- ArticleFooter
- ArticleShare

product/
- ProductCard
- ProductSpecs
- ProductProsCons
- ProductGallery
- AffiliateButton

layout/
- Header
- Footer
- Sidebar
- Breadcrumb

seo/
- MetaTags
- JsonLd
- Canonical

ui/
- Button
- Badge
- Card
- Alert
- Pagination

---

# Layouts

Cada tipo de página deve possuir um layout próprio.

Exemplo:

BaseLayout

Responsável por:

- Header
- Footer
- Tema
- SEO base

ArticleLayout

Responsável por:

- Hero
- Autor
- Índice
- Conteúdo
- Compartilhamento
- Artigos relacionados

ProductLayout

Responsável por:

- Galeria
- Especificações
- Reviews
- Botões de afiliados

---

# React

Utilizar React somente para:

- filtros
- busca dinâmica
- comparação de produtos
- favoritos
- calculadoras
- componentes altamente interativos

Nunca utilizar React para renderizar páginas inteiras.

---

# Tailwind

Utilizar utilitários.

Evitar CSS repetido.

Quando um padrão aparecer em muitos lugares,
transformá-lo em componente.

---

# TypeScript

Nunca utilizar any.

Sempre tipar:

- props
- collections
- funções
- objetos

Preferir interfaces simples.

---

# SEO

Toda página deve possuir:

- title
- description
- canonical
- Open Graph
- Twitter Card
- alt em imagens

Utilizar JSON-LD quando aplicável.

---

# Conteúdo

Os artigos devem conter:

- título
- descrição
- data
- categoria
- tags
- imagem principal

Sempre utilizar links internos quando possível.

---

# Produtos

Cada produto deve possuir:

- nome
- marca
- slug
- imagem
- especificações
- links de afiliados
- data da última atualização

Nunca duplicar informações entre artigos.

---

# Links de afiliados

Todos devem:

- abrir em nova aba
- utilizar rel="nofollow sponsored noopener"
- informar claramente que são links de afiliado

Nunca esconder publicidade.

---

# Performance

Priorizar:

- HTML estático
- imagens otimizadas
- lazy loading
- mínimo JavaScript

---

# Convenções

Componentes:

PascalCase

Arquivos MDX:

kebab-case

Slugs:

kebab-case

Pastas:

lowercase

---

# Antes de criar qualquer código

Sempre verificar:

1. Já existe componente semelhante?
2. Pode ser reutilizado?
3. Precisa realmente de React?
4. Está seguindo a arquitetura?
5. Está preservando SEO?
6. Está mantendo o site estático?

Caso alguma resposta seja negativa, reavaliar a implementação antes de prosseguir.
