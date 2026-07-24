# Criação manual de artigos

Este documento descreve o processo para criar, revisar e publicar artigos no Sky Vision.

Os artigos são arquivos MDX armazenados em `src/content/articles`. Eles são validados pela Content Collection `articles`, definida em `src/content.config.ts`, e transformados em páginas estáticas durante o build.

## 1. Preparar o nome e a URL

Crie um arquivo com extensão `.mdx` em:

```text
src/content/articles/
```

Use somente letras minúsculas, números e hífens no nome:

```text
como-escolher-um-monitor-para-jogos.mdx
```

O nome do arquivo determina a URL pública:

```text
/artigos/como-escolher-um-monitor-para-jogos/
```

Evite alterar o nome depois que o artigo for publicado. Uma mudança de nome também muda a URL e, futuramente, exigirá um redirecionamento.

## 2. Adicionar as imagens

As imagens processadas pelo Astro devem ficar em `src/assets/articles`, organizadas por assunto ou produto:

```text
src/assets/articles/
└── monitors/
    └── monitor-para-jogos/
        ├── capa.png
        ├── detalhe-conexoes.png
        └── comparativo-telas.png
```

Recomendações:

- Use uma imagem de capa horizontal, preferencialmente na proporção `16:9`.
- Utilize nomes de arquivo descritivos.
- Comprima as imagens antes de adicioná-las ao projeto.
- Não coloque texto essencial dentro da imagem.
- Toda imagem informativa deve possuir texto alternativo.
- Use `public` apenas para arquivos que não precisam do processamento do Astro.

## 3. Criar o frontmatter

Todo artigo começa com um bloco YAML delimitado por `---`.

Modelo completo:

```mdx
---
title: 'Como escolher um monitor para jogos'
description: 'Entenda quais características realmente importam ao escolher um monitor para jogos, incluindo painel, resolução e taxa de atualização.'
pubDate: 2026-07-24
category: 'Periféricos'
tags: ['monitores', 'jogos', 'guia de compra']
products: []
cover: '../../assets/articles/monitors/monitor-para-jogos/capa.png'
coverAlt: 'Monitor para jogos exibindo uma imagem colorida sobre uma mesa'
author: 'Equipe Sky Vision'
type: 'guide'
featured: false
draft: true
---
```

### Campos disponíveis

| Campo         | Obrigatório | Descrição                                                                         |
| ------------- | ----------- | --------------------------------------------------------------------------------- |
| `title`       | Sim         | Título editorial, entre 10 e 90 caracteres.                                       |
| `description` | Sim         | Resumo único do artigo, entre 40 e 180 caracteres. É usado no SEO e nos cards.    |
| `pubDate`     | Sim         | Data original da publicação no formato `AAAA-MM-DD`.                              |
| `updatedDate` | Não         | Data da última atualização relevante, no formato `AAAA-MM-DD`.                    |
| `category`    | Sim         | Uma das categorias oficiais listadas abaixo.                                      |
| `tags`        | Sim         | Lista com pelo menos uma tag relacionada ao conteúdo.                             |
| `products`    | Não         | IDs de produtos cadastrados na collection `products`. O padrão é uma lista vazia. |
| `cover`       | Sim         | Caminho relativo para a imagem de capa em `src/assets`.                           |
| `coverAlt`    | Sim         | Descrição objetiva e contextual da imagem de capa.                                |
| `author`      | Não         | Nome do autor. O padrão é `Equipe Sky Vision`.                                    |
| `type`        | Não         | `article`, `review`, `guide` ou `comparison`. O padrão é `article`.               |
| `featured`    | Não         | Define se o conteúdo pode aparecer em “Leitura em destaque”. O padrão é `false`.  |
| `draft`       | Não         | Quando `true`, impede que o artigo seja publicado. O padrão é `false`.            |

### Categorias oficiais

O valor de `category` deve corresponder exatamente a uma destas opções:

- `Celulares`
- `Computadores`
- `Áudio e vídeo`
- `Periféricos`
- `Smart Home`

As categorias são mantidas em `src/data/categories.ts`. Não crie variações como `Celular`, `Áudio` ou `Smart home` diretamente no artigo.

### Tipos de artigo

- `article`: notícia, explicação ou conteúdo editorial geral.
- `guide`: tutorial, orientação ou guia de compra.
- `review`: avaliação aprofundada de um produto.
- `comparison`: comparação direta entre produtos ou tecnologias.

O tipo ajuda a organizar o conteúdo, mas não substitui a categoria.

## 4. Escrever o conteúdo

Depois do frontmatter, escreva normalmente em Markdown:

```mdx
Uma boa taxa de atualização melhora a percepção de fluidez, mas ela não deve ser analisada isoladamente.

## Escolha o tipo de painel

Painéis IPS costumam oferecer bons ângulos de visão e reprodução de cores. Painéis VA normalmente se destacam pelo contraste.

## Considere a resolução

A resolução ideal depende do tamanho da tela, da distância de uso e da capacidade da placa de vídeo.
```

Não adicione um título com `#` no começo do conteúdo. O `ArticleLayout` já transforma o campo `title` no único `<h1>` da página.

Comece o corpo com uma introdução e utilize `##` para as seções principais. Use `###` somente para subseções de um `##`.

Boas práticas editoriais:

- Responda claramente à intenção indicada pelo título.
- Prefira informações verificáveis e exemplos concretos.
- Explique critérios, limitações e concessões.
- Em reviews, descreva como o produto foi avaliado.
- Não copie descrições de fabricantes ou lojas.
- Evite repetir palavras-chave artificialmente.
- Adicione links internos quando outro artigo complementar o assunto.
- Informe fontes quando apresentar dados que possam mudar ou exigir comprovação.

## 5. Inserir imagens no corpo

Importe a imagem depois do frontmatter:

```mdx
import { Image } from 'astro:assets';
import connectionDetails from '../../assets/articles/monitors/monitor-para-jogos/detalhe-conexoes.png';
```

Depois, insira a imagem no ponto adequado:

```mdx
<figure>
	<Image
		src={connectionDetails}
		alt="Conexões HDMI e DisplayPort na parte traseira do monitor"
		widths={[640, 960, 1280]}
		sizes="(max-width: 760px) 100vw, 760px"
	/>
	<figcaption>As entradas disponíveis determinam quais dispositivos podem ser conectados.</figcaption>
</figure>
```

O texto alternativo deve descrever o que a imagem comunica naquele contexto. A legenda é opcional, mas recomendada quando acrescenta explicação, crédito ou contexto.

Não use Markdown como `![imagem](...)` para imagens locais que devem ser processadas pelo Astro.

## 6. Relacionar um produto

Quando um produto aparece em vários artigos, seus dados devem ficar em:

```text
src/content/products/
```

Exemplo:

```yaml
name: 'Samsung Galaxy A17'
brand: 'Samsung'
slug: 'samsung-galaxy-a17'
image: '../../assets/articles/smartphones/galaxy-a17/capa.png'
imageAlt: 'Celular Samsung Galaxy A17 azul visto de frente e de costas'
affiliateUrl: ''
affiliateStore: 'Mercado Livre'
active: true
updatedDate: 2026-07-24
specifications: {}
```

O nome do arquivo é o ID usado pelos artigos:

```text
src/content/products/samsung-galaxy-a17.yaml
```

No frontmatter do artigo:

```yaml
products: ['samsung-galaxy-a17']
```

Para mostrar a box de compra, importe o componente:

```mdx
import ProductOffer from '../../components/product/ProductOffer.astro';
```

E use o mesmo ID:

```mdx
<ProductOffer productId="samsung-galaxy-a17" />
```

Também é possível personalizar o botão:

```mdx
<ProductOffer productId="samsung-galaxy-a17" cta="Ver disponibilidade no Mercado Livre" />
```

O link de afiliado deve ser preenchido no campo `affiliateUrl` do produto, não diretamente no MDX. Ele pode ficar vazio enquanto não estiver disponível.

Se `active` for `false`, a box não será exibida. Links disponíveis recebem automaticamente os atributos adequados para afiliados e a mensagem de transparência.

## 7. Trabalhar como rascunho

Enquanto o artigo estiver em produção, mantenha:

```yaml
draft: true
```

Artigos em rascunho não são gerados como páginas públicas e não aparecem:

- Na home.
- Na listagem de artigos.
- Nas categorias.
- Na pesquisa.
- No sitemap.
- Nos artigos relacionados.

Para publicar, revise o conteúdo e altere para:

```yaml
draft: false
```

## 8. Visualizar localmente

Inicie o servidor:

```bash
npm run dev
```

Abra a URL baseada no nome do arquivo:

```text
http://localhost:4321/artigos/como-escolher-um-monitor-para-jogos/
```

Para visualizar pela rota pública, o artigo precisa estar com `draft: false`. Caso seja necessário revisar um rascunho sem publicá-lo, mantenha a mudança apenas local e retorne `draft` para `true` antes do commit.

Confira:

- Título, descrição e metadados.
- Imagem de capa.
- Hierarquia dos títulos.
- Imagens internas e textos alternativos.
- Links internos e externos.
- Box de produto, quando houver.
- Tema claro e escuro.
- Layout no celular e no computador.
- Artigos relacionados no final da página.

## 9. Validar antes de publicar

Execute:

```bash
npm run lint
npm run format:check
npm run check
npm run build
```

O comando `npm run check` valida o schema da Content Collection. Ele detecta, por exemplo:

- Categoria inexistente.
- Título ou descrição fora do limite.
- Imagem ausente.
- Produto referenciado com ID incorreto.
- Tipo de artigo inválido.
- Campo com formato incompatível.

O build também atualiza o índice local do Pagefind e gera as rotas estáticas, o sitemap e as imagens otimizadas.

## 10. Atualizar um artigo existente

Ao fazer uma atualização relevante:

1. Preserve o nome do arquivo e a URL.
2. Altere somente o conteúdo necessário.
3. Adicione ou atualize `updatedDate`.
4. Verifique se título e description ainda correspondem ao conteúdo.
5. Revise informações que possam ter ficado desatualizadas.
6. Execute novamente todos os comandos de validação.

Exemplo:

```yaml
pubDate: 2026-07-24
updatedDate: 2026-09-10
```

Não altere `pubDate` para fazer um artigo antigo parecer recém-publicado.

## Checklist de publicação

- [ ] O nome do arquivo gera uma URL curta e descritiva.
- [ ] O título é único e possui entre 10 e 90 caracteres.
- [ ] A description é única e possui entre 40 e 180 caracteres.
- [ ] A categoria usa exatamente um nome oficial.
- [ ] As tags representam o conteúdo.
- [ ] O artigo possui apenas um H1, gerado pelo layout.
- [ ] A capa possui texto alternativo adequado.
- [ ] Todas as imagens internas possuem `alt`.
- [ ] Links e informações foram conferidos.
- [ ] Produtos usam IDs existentes na collection.
- [ ] Links de afiliado estão no arquivo do produto.
- [ ] A data de atualização foi usada somente quando necessário.
- [ ] `featured` foi definido conscientemente.
- [ ] `draft` foi alterado para `false` somente após a revisão.
- [ ] Tema claro, tema escuro e versão mobile foram conferidos.
- [ ] Lint, formatação, verificação de tipos e build passaram.
