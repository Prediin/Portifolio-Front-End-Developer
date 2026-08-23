# Pedro Luís — Portfólio React

SPA responsiva em React + Vite criada para apresentar Pedro Luís Bezerra Lima como Desenvolvedor Front-End com repertório criativo multidisciplinar.

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

## Onde editar suas informações

A maior parte do conteúdo fica em:

```text
src/data/portfolio.js
```

Altere ali:

- nome e descrição;
- e-mail;
- progresso da formação;
- projetos destacados;
- competências;
- trajetória;
- blocos do arquivo criativo.

## Adicionar sua foto

Substitua:

```text
public/profile-placeholder.svg
```

por uma imagem sua, por exemplo:

```text
public/profile.jpg
```

Depois, em `src/App.jsx`, troque:

```jsx
<img src="/profile-placeholder.svg" ... />
```

por:

```jsx
<img src="/profile.jpg" alt="Pedro Luís Bezerra Lima" loading="lazy" />
```

Use preferencialmente WebP ou AVIF, com dimensão aproximada de 900×1100 e arquivo otimizado.

## Adicionar screenshots de projetos

Os cards foram deixados com placeholders de propósito. Você pode substituir o conteúdo de `.project-card__visual` em `ProjectCard.jsx` por uma imagem.

Exemplo:

```jsx
<img
  src="/projects/efraim.webp"
  alt="Tela inicial do projeto Efraim Paiva"
  loading="lazy"
/>
```

Crie uma pasta:

```text
public/projects/
```

## Adicionar trabalhos criativos

A seção `Arquivo criativo` foi deixada pronta para:

- ilustração digital;
- desenho tradicional;
- fotografia;
- edição de vídeo;
- motion design;
- animação;
- processos e bastidores.

Troque os placeholders em `src/App.jsx` por `<img>` ou `<video>`.

## GitHub

O componente `GithubPulse` busca os repositórios mais recentes de:

```text
https://github.com/Prediin
```

pela API pública do GitHub. Se a API falhar ou o limite de requisições for atingido, o site usa uma lista local de fallback e continua funcionando.

## Direção visual

A identidade evita o visual genérico de "template de dev" e mistura:

- base grafite/preta;
- branco quente;
- azul elétrico;
- coral;
- verde-mint;
- grids editoriais;
- composição inspirada em motion, fotografia e interfaces experimentais.

A intenção é manter personalidade sem prejudicar recrutadores: projetos, competências, trajetória e contato continuam fáceis de encontrar.

## Acessibilidade e performance

- HTML semântico dentro dos componentes React;
- navegação por teclado;
- skip link;
- estados de foco nativos;
- `prefers-reduced-motion`;
- sem biblioteca externa de animação;
- Canvas limitado a DPR 2;
- imagens próprias podem usar lazy loading;
- dependências de runtime: apenas React e React DOM.

## Deploy

Funciona bem em:

- Vercel;
- Netlify;
- Cloudflare Pages;
- GitHub Pages (com configuração de `base` no Vite, se necessário).

Para Vercel/Netlify, normalmente basta conectar o repositório e usar:

```text
Build command: npm run build
Output directory: dist
```
