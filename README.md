# Pedro Luis — Front-End Portfolio

SPA React + Vite criada para apresentar projetos, formação, experiência e serviços de Front-End de forma responsiva e fácil de manter.

## Rodar localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Conteúdo editável

Quase todas as informações pessoais e profissionais ficam em:

```text
src/data/portfolio.js
```

Lá você pode atualizar:

- nome, descrição e contatos;
- links do GitHub e LinkedIn;
- tecnologias;
- serviços;
- projetos publicados;
- andamento da EBAC;
- competência e habilidades;
- experiências e formação.

### Adicionar projeto

Dentro de `projects`, duplique um objeto:

```js
{
  id: 'novo-projeto',
  index: '04',
  title: 'Nome do Projeto',
  type: 'SPA / Categoria',
  year: '2026',
  url: 'https://usuario.github.io/repositorio/',
  preview: 'game',
  accent: 'blue',
  featured: true,
  summary: 'Resumo curto.',
  details: 'Descrição para o Live Lab.',
  tags: ['React', 'Vite']
}
```

Os previews existentes são `discography`, `editor` e `game`. Se adicionar um novo projeto e não criar outro preview visual, use um deles como placeholder ou crie uma nova condição em `src/components/ProjectPreview.jsx`.

## Live Lab

A seção `LiveLab.jsx` não carrega os três sites imediatamente. Apenas o projeto selecionado é carregado em `iframe` depois que o visitante clica em **Carregar site ao vivo**. Isso reduz requisições e custo de renderização na abertura do portfólio.

## GitHub Pages

O projeto contém:

```text
.github/workflows/deploy.yml
```

No GitHub:

1. Abra **Settings > Pages**.
2. Em **Build and deployment > Source**, escolha **GitHub Actions**.
3. Faça push para `main` ou `master`.
4. Aguarde o workflow finalizar com sucesso.

O Vite usa `base: './'`, deixando os assets portáveis para um Project Page como `usuario.github.io/nome-do-repositorio/`.

## Identidade visual

A paleta acompanha a identidade do portfólio de editor:

- `#223843`
- `#ECA400`
- `#E84855`
- `#78C0E0`
- `#E9F1F7`
- preto e branco

As animações são CSS + `IntersectionObserver`, sem biblioteca externa de motion. O site respeita `prefers-reduced-motion`.
