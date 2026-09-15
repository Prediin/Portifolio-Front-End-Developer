# Pedro Luis — Portfólio Front-End

Portfólio profissional desenvolvido para apresentar Pedro Luis Bezerra Lima, seus projetos, conhecimentos, formação e experiência como desenvolvedor Front-End. Além de reunir informações profissionais, o site demonstra na prática a criação de interfaces com React: possui componentes interativos, visualização de projetos publicados, temas claro e escuro, animações controláveis, formulário de contato e recursos de acessibilidade.

O projeto combina uma identidade editorial com elementos inspirados em interfaces de jogos. A proposta é comunicar criatividade e personalidade sem deixar de lado organização, desempenho, responsividade e facilidade de uso.

## Objetivo

O site foi criado para:

- apresentar o perfil e a trajetória profissional de Pedro Luis;
- reunir projetos Front-End publicados em um único endereço;
- demonstrar conhecimentos em React, JavaScript, HTML e CSS;
- permitir que visitantes experimentem os projetos dentro do portfólio;
- divulgar serviços, formação, experiências e tecnologias;
- facilitar contatos para vagas, freelas e parcerias;
- funcionar bem em celulares, tablets e computadores.

O público inclui recrutadores, empresas, clientes, desenvolvedores e pessoas interessadas nos trabalhos apresentados.

## Funcionalidades

### Interface e identidade visual

- Apresentação profissional, localização e disponibilidade.
- Estúdio criativo para alterar cores e cantos de um componente e visualizar o CSS correspondente.
- Temas claro e escuro, inicialmente definidos pela preferência do sistema.
- Preferências de tema e animação salvas no `localStorage`.
- Controle para pausar ou reativar efeitos visuais.
- Painel que registra as seções visitadas durante a sessão.

### Projetos e playground

- Galeria com descrição, tecnologias, detalhes técnicos e filtros por categoria.
- Links para abrir cada aplicação publicada.
- Seleção sincronizada entre a galeria e a demonstração.
- Abas acessíveis por mouse, toque e teclado (`←`, `→`, `Home` e `End`).
- Alternância entre visualização desktop e mobile.
- Carregamento do site externo somente quando o visitante inicia a experiência.
- `iframe` com permissões limitadas por `sandbox` e alternativa para abrir em outra guia.

As imagens dos cards representam a direção visual de cada projeto e não são capturas de tela. Atualmente são apresentados uma discografia digital, um portfólio audiovisual e um jogo de adivinhação.

### Conteúdo profissional

- Serviços de criação de sites, landing pages, SPAs, portfólios e refatoração de interfaces.
- Formação Front-End da EBAC com progresso, módulo atual e 16 módulos expansíveis.
- Seção “Sobre mim” com retrato e diferentes textos sobre história e forma de trabalho.
- Experiência profissional e formação acadêmica organizadas em uma linha do tempo.

### Contato

- Formulário com nome, empresa, assunto, mensagem e canal preferido.
- Preparação da mensagem para WhatsApp ou aplicativo de e-mail.
- Validação nativa dos campos obrigatórios.
- Cópia do endereço de e-mail com retorno acessível.
- Links diretos para GitHub, LinkedIn e WhatsApp.

O formulário não possui backend e não envia informações automaticamente: o visitante revisa e confirma a mensagem no aplicativo escolhido.

### Acessibilidade

- HTML semântico, rótulos de formulário e estados ARIA.
- Link “Pular para o conteúdo” e foco visível.
- Menu responsivo que fecha ao navegar, clicar fora ou pressionar `Escape`.
- Componentes operáveis por teclado.
- Suporte a `prefers-reduced-motion`.
- Testes automatizados baseados nos níveis A e AA das WCAG.

## Tecnologias e linguagens

| Tecnologia | Uso no projeto |
| --- | --- |
| **HTML5** | Estrutura semântica, metadados e acessibilidade. |
| **CSS3** | Layout responsivo, temas, animações e identidade visual. |
| **JavaScript** | Lógica, eventos, dados e comportamento da interface. |
| **React 19** | Componentes, Hooks e gerenciamento de estado. |
| **Vite 8** | Servidor de desenvolvimento e build de produção. |
| **Playwright** | Testes de ponta a ponta e responsividade. |
| **axe-core** | Verificações automatizadas de acessibilidade. |
| **Prettier** | Padronização da formatação do código. |
| **GitHub Actions/Pages** | Integração, build e publicação automática. |

Não são utilizados framework CSS, motor de jogos ou biblioteca externa de animação. Os layouts e efeitos foram implementados com CSS e React.

## Como o projeto foi programado

A aplicação é uma SPA dividida em componentes React. `App.jsx` organiza as seções e mantém o projeto ativo em um estado compartilhado entre a galeria e o playground. Os conteúdos profissionais ficam centralizados em `src/data/portfolio.js`, separando dados e apresentação e facilitando futuras atualizações.

Os componentes utilizam `useState` para filtros, formulário, demonstração e estados visuais; `useEffect` para eventos e observadores; e `useRef` para controle de foco. O `IntersectionObserver` identifica seções visíveis, atualiza a navegação e aciona efeitos sem executar lógica pesada em cada evento de rolagem.

As animações usam principalmente `transform` e `opacity`, pausam quando a página fica oculta e respeitam a preferência de movimento reduzido.

## Estrutura

```text
.
├── .github/workflows/       # Publicação no GitHub Pages
├── public/                  # Logo, favicons, fotos e imagem social
├── scripts/                 # Geração da imagem de compartilhamento
├── src/
│   ├── components/          # Componentes e seções React
│   ├── data/portfolio.js    # Perfil, projetos, formação e experiências
│   ├── App.jsx              # Composição e estado compartilhado
│   ├── main.jsx             # Ponto de entrada
│   ├── styles.css           # Sistema visual e estilos globais
│   ├── creative.css         # Estúdio criativo
│   └── game.css             # Elementos inspirados em jogos
├── tests/portfolio.spec.js  # Testes funcionais e de acessibilidade
├── index.html               # Documento base e metadados
├── playwright.config.js     # Configuração dos testes
└── vite.config.js           # Configuração do Vite
```

## Executando localmente

Requer Node.js 22.12 ou superior, ou Node.js 24+.

```bash
git clone <URL-DO-REPOSITORIO>
cd Portifolio-Front-End-Developer
npm ci
npm run dev
```

Abra o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

## Comandos

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento. |
| `npm run build` | Gera a versão de produção em `dist`. |
| `npm run preview` | Executa uma prévia local do build. |
| `npm test` | Executa os testes do Playwright. |
| `npm run test:ui` | Abre a interface visual de testes. |
| `npm run format` | Formata os arquivos com Prettier. |
| `npm run format:check` | Verifica a formatação. |

## Testes e qualidade

```bash
npm run build
npx playwright install chromium
npm test
npm run format:check
```

Os testes usam o build de produção na porta `4173` e verificam renderização de 320 a 1440 pixels, filtros, detalhes, playground, menu mobile, formulário, preferências, movimento reduzido, navegação por teclado e regras WCAG A/AA nos temas claro e escuro.

No Windows, é possível testar com o Microsoft Edge instalado:

```powershell
$env:PLAYWRIGHT_CHANNEL = 'msedge'
npm test
```

Testes automáticos ajudam a prevenir regressões, mas não substituem avaliações manuais com tecnologias assistivas.

## Personalização

Edite `src/data/portfolio.js` para atualizar perfil, contatos, tecnologias, serviços, projetos, formação e experiências. Para adicionar um projeto, inclua no array `projects` os campos `id`, `index`, `title`, `type`, `year`, `url`, `preview`, `accent`, `summary`, `details` e `tags`.

Novas categorias ou artes podem exigir ajustes em `Projects.jsx` e `ProjectPreview.jsx`. Os tokens de cor, espaçamento e layout estão no início de `src/styles.css`; textos específicos ficam nos componentes correspondentes.

Para recriar a imagem social após alterar a identidade:

```bash
node scripts/social-cover.mjs
```

O script requer o Chromium do Playwright ou `PLAYWRIGHT_CHANNEL=msedge`. Ao mudar o endereço público, atualize também o canonical e as URLs Open Graph em `index.html`.

## Publicação

O workflow `.github/workflows/deploy.yml` publica no GitHub Pages a cada push em `main` ou `master`. Ele instala dependências, cria e valida o build e envia somente a pasta `dist`.

1. Envie o projeto para um repositório no GitHub.
2. Acesse **Settings > Pages**.
3. Em **Build and deployment > Source**, selecione **GitHub Actions**.
4. Faça push para `main` ou `master`.
5. Acompanhe a execução na aba **Actions**.

O Vite utiliza `base: './'` para carregar corretamente os recursos quando o site é hospedado em um subdiretório.

## Limitações conhecidas

- O contato depende do WhatsApp ou de um aplicativo de e-mail configurado.
- As demos dependem da disponibilidade dos sites externos e das políticas de `iframe`.
- Preferências não persistem quando o navegador bloqueia o `localStorage`, embora os controles continuem funcionando na sessão.
- Verificações automáticas de acessibilidade não cobrem todos os cenários de testes humanos.

## Autor

**Pedro Luis Bezerra Lima** — Desenvolvedor Front-End, Corrente, Piauí, Brasil.

- [GitHub](https://github.com/Prediin)
- [LinkedIn](https://www.linkedin.com/in/pedro-bezerra-775390263)
- E-mail: `daxstudios.comissions@gmail.com`

---

Projeto criado para apresentar habilidades técnicas, evolução profissional e uma abordagem criativa na construção de experiências web responsivas, acessíveis e fáceis de usar.
