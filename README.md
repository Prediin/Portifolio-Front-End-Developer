# Pedro Luis — Front-End Portfolio

Portfólio em React e Vite com identidade visual própria: temas claro e escuro, tipografia editorial, um estúdio de interfaces interativo e uma apresentação pessoal com a foto do currículo. Apresenta os projetos publicados, a formação e a trajetória profissional de Pedro Luis.

## Desenvolvimento

Requer Node.js 22.12+ ou 24+.

```bash
npm ci
npm run dev
```

## Build e validação

```bash
npm run build
npx playwright install chromium
npm test
npm run format:check
```

Os testes usam o build de produção e iniciam o preview automaticamente na porta 4173. Cobrem filtros, seleção e carregamento sob demanda de projetos, navegação por teclado, menu mobile, formulário, responsividade e verificação automática WCAG A/AA com axe. O conteúdo externo é substituído por uma página de teste; a disponibilidade dos sites publicados depende dos respectivos provedores.

Para testar com Microsoft Edge já instalado no Windows:

```powershell
$env:PLAYWRIGHT_CHANNEL = 'msedge'
npm test
```

## Experiência

- Galeria com filtros e detalhes técnicos expansíveis.
- Playground com seleção sincronizada à galeria, abas acessíveis e visualização desktop/mobile.
- Nenhum site externo é carregado antes de iniciar a demonstração.
- Menu responsivo com Escape, fechamento ao navegar e indicação da seção ativa.
- Trilha EBAC completa disponível em um painel expansível.
- Formulário para vagas, freelas e parcerias, com campos obrigatórios.
- O formulário prepara a mensagem no WhatsApp ou aplicativo de e-mail; o visitante revisa e envia. Não há backend de contato.
- Cópia de e-mail com confirmação e alternativa em caso de indisponibilidade do clipboard.
- Link para pular ao conteúdo, foco visível e respeito a movimento reduzido.
- Metadados sociais, imagem de compartilhamento local e favicon SVG.

## Personalização

As informações profissionais, projetos, formação, serviços e contatos estão em `src/data/portfolio.js`. Textos de apresentação e navegação ficam nos respectivos componentes em `src/components/`. Os tokens de cor, espaçamento e layout estão no início de `src/styles.css`.

Para adicionar um projeto, inclua um objeto em `projects` com `id`, `index`, `title`, `type`, `year`, `url`, `preview`, `accent`, `summary`, `details` e `tags`. As categorias atuais distinguem o preview `game` dos portfólios. Ajuste o filtro em `Projects.jsx` ao criar novas categorias.

As artes de `ProjectPreview.jsx` representam a direção visual de cada projeto; não são capturas de tela. A demonstração permite abrir o site real.

Para atualizar a imagem social após alterar nome ou identidade, edite `scripts/social-cover.mjs` e execute:

```bash
node scripts/social-cover.mjs
```

Esse comando precisa do Chromium do Playwright instalado (ou de `PLAYWRIGHT_CHANNEL=msedge`). Ao mudar o endereço público, atualize também o canonical e as URLs Open Graph em `index.html`.

## Publicação

O workflow `.github/workflows/deploy.yml` publica no GitHub Pages ao receber um push em `main` ou `master`. Configure **Settings → Pages → Source → GitHub Actions**. O Vite usa `base: './'` para suportar o subdiretório do repositório. Alterações locais só aparecem publicamente após o push e a conclusão do workflow.

## Organização

- `src/components/`: seções e elementos da interface.
- `src/data/portfolio.js`: informações profissionais.
- `public/`: foto, favicon e imagem social.
- `tests/portfolio.spec.js`: testes de comportamento e acessibilidade.
- `scripts/social-cover.mjs`: geração reproduzível da imagem social.

Use `npm run format` para formatar o código. Os testes automáticos de acessibilidade complementam a revisão visual e não substituem avaliação com tecnologias assistivas.

## Temas e interações

A logo original em `public/brand-logo.png` é compartilhada pelo favicon, cabeçalho e rodapé. O navegador reutiliza o mesmo arquivo em cache.

O visual inspirado em jogos está em `src/game.css`: painel de personagem, contornos de interface, grade de fundo, resposta ao clique e progresso de exploração. O indicador conta as seis seções realmente visitadas nesta sessão; não representa experiência profissional ou conclusão da formação e não bloqueia nenhum conteúdo.

Os botões no cabeçalho alternam o tema claro/escuro e pausam as animações. A primeira visita segue o tema do sistema. Escolhas explícitas ficam em `localStorage` (`pl-theme` e `pl-motion`), com funcionamento normal caso o armazenamento esteja indisponível. Um script pequeno aplica o tema antes da primeira pintura para evitar flashes.

As animações usam CSS com transformações e opacidade. `IntersectionObserver` controla a visibilidade sem trabalho contínuo a cada evento de rolagem. A animação do painel para fora da tela; todas as animações pausam quando a aba fica oculta. `prefers-reduced-motion` sempre prevalece. Nenhum motor de jogos, canvas ou pacote de animação foi adicionado.

## Repaginação criativa

A abertura em `CreativeStudio.jsx` permite escolher cores, arredondar os cantos, conferir o CSS correspondente e disparar uma pequena resposta visual. Todas as ações estão disponíveis por teclado e toque. O efeito usa dez partículas CSS reutilizadas a cada clique, sem motor de física, biblioteca extra ou acúmulo de elementos. As camadas visuais mais recentes ficam em `src/creative.css`.

A seção “Sobre mim” usa `public/pedro-luis-retrato.jpeg`, foto extraída diretamente do currículo fornecido, sem alterações no arquivo. Somente a foto foi adicionada aos assets públicos; o DOCX não foi publicado. Os textos de apresentação se baseiam na formação técnica e nas experiências com atendimento, audiovisual e segurança digital.

Referências consultadas em 8 de setembro de 2026:

- [Bruno Simon](https://bruno-simon.com/): exploração lúdica e descoberta de detalhes.
- [Josh W. Comeau — A Million Little Secrets](https://www.joshwcomeau.com/blog/whimsical-animations/): pequenas interações que respondem à curiosidade do visitante.
- [Brittany Chiang](https://brittanychiang.com/): apresentação pessoal e leitura clara da trajetória profissional.

Esses princípios inspiraram uma composição original. Nenhum código, imagem, biografia ou elemento de marca desses sites foi incorporado ao projeto.
