export const profile = {
  name: 'Pedro Luis Bezerra Lima',
  shortName: 'Pedro Luis',
  role: 'Desenvolvedor Front-End',
  location: 'Corrente, PI · Brasil',
  email: 'daxstudios.comissions@gmail.com',
  whatsappDisplay: '+55 (89) 99987-7756',
  whatsappNumber: '5589999877756',
  github: 'https://github.com/Prediin',
  linkedin: 'https://www.linkedin.com/in/pedro-bezerra-775390263',
  intro:
    'Desenvolvo interfaces web responsivas com React e JavaScript, equilibrando clareza visual, experiência de uso e código organizado. Gosto de transformar ideias em páginas que parecem simples para quem usa — porque a complexidade certa ficou resolvida por trás da interface.',
  availability: 'Aberto a oportunidades, freelas e projetos Front-End',
}

export const navItems = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Demo ao vivo', href: '#live-lab' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
]

export const stats = [
  { value: '03', label: 'projetos publicados' },
  { value: '50%', label: 'formação EBAC' },
  { value: 'React', label: 'foco atual' },
]

export const stack = [
  'HTML semântico',
  'CSS / Sass',
  'JavaScript',
  'React',
  'Vite',
  'Git & GitHub',
  'GitHub Pages',
  'Bootstrap',
  'Design responsivo',
  'Acessibilidade',
]

export const services = [
  {
    index: '01',
    title: 'Sites e landing pages',
    text: 'Interfaces responsivas para apresentar negócios, serviços, produtos ou campanhas com identidade própria e fluxo de navegação claro.',
  },
  {
    index: '02',
    title: 'SPA em React',
    text: 'Aplicações de página única com componentes reutilizáveis, estados, filtros, modais, formulários e conteúdo orientado por dados.',
  },
  {
    index: '03',
    title: 'Portfólios e vitrines digitais',
    text: 'Experiências pensadas para apresentar trabalho, personalidade e resultados sem cair em layouts genéricos de template.',
  },
  {
    index: '04',
    title: 'Refatoração de interface',
    text: 'Organização visual, responsividade, performance percebida e manutenção de front-ends existentes sem reescrever o que já funciona sem necessidade.',
  },
]

export const projects = [
  {
    id: 'disc-efraim-paiva',
    index: '01',
    title: 'Efraim Paiva — Discografia',
    type: 'SPA / Portfólio artístico',
    year: '2026',
    url: 'https://prediin.github.io/discEfraimPaiva/',
    preview: 'discography',
    accent: 'gold',
    featured: true,
    summary:
      'Discografia digital para um artista de MPB, construída como uma experiência editorial contemporânea com lançamentos orientados por dados e integração com Spotify.',
    details:
      'O projeto trabalha identidade musical, responsividade, componentes React e uma estrutura que permite adicionar novos singles, álbuns e lançamentos em um arquivo de dados.',
    tags: ['React', 'Vite', 'Spotify', 'Responsive UI'],
  },
  {
    id: 'portfolio-editor',
    index: '02',
    title: 'Portfólio de Editor de Vídeo',
    type: 'SPA / Portfólio profissional',
    year: '2026',
    url: 'https://prediin.github.io/PortifolioEditor/',
    preview: 'editor',
    accent: 'red',
    featured: true,
    summary:
      'Portfólio audiovisual com uma identidade escura própria, catálogo filtrável, players para diferentes plataformas e contato orientado a contratação.',
    details:
      'O projeto reúne YouTube, TikTok, Instagram, vídeos locais, filtros dinâmicos, visualizações abreviadas e uma interface pensada para funcionar do celular ao desktop.',
    tags: ['React', 'Media UI', 'Filters', 'GitHub Pages'],
  },
  {
    id: 'jogo-adivinhacao',
    index: '03',
    title: 'Jogo da Adivinhação',
    type: 'SPA / Projeto interativo',
    year: '2026',
    url: 'https://prediin.github.io/e1_-jogoDeAdivinhacao-/',
    preview: 'game',
    accent: 'blue',
    featured: true,
    summary:
      'Jogo de adivinhação reestruturado em React com estado, histórico de tentativas, dicas de proximidade, feedback visual e uma identidade de “oráculo cósmico”.',
    details:
      'A interface foi projetada para demonstrar interação, lógica de estado, validação e adaptação responsiva sem depender de bibliotecas pesadas para animação.',
    tags: ['React', 'State', 'Game UI', 'Interaction'],
  },
]

export const learning = {
  title: 'Formação EBAC — Front-End',
  progress: 50,
  status: 'Em andamento',
  currentModule: 16,
  competence:
    'Construir interfaces de usuário dinâmicas e modulares utilizando React, aplicando conceitos de componentes, props, state e ciclo de vida.',
  skills: [
    'Definir componentes React para criar interfaces modulares e reutilizáveis em aplicações web.',
    'Esclarecer o uso de JSX para integrar sintaxe HTML-like em funções JavaScript, utilizando Babel para transpilar o código.',
    'Aplicar props para passar dados entre componentes, utilizando a prop children para composição de componentes complexos.',
    'Manipular o state com o hook useState para gerenciar dados e criar interfaces interativas e dinâmicas.',
  ],
  competencies: [
    {
      module: 1,
      topic: 'Fundamentos Web',
      text: 'Compreender os fundamentos do desenvolvimento web, incluindo a estruturação de páginas HTML, estilização com CSS e interatividade com JavaScript.',
    },
    {
      module: 2,
      topic: 'HTML5',
      text: 'Aplicar conceitos de HTML5 para criar páginas web semânticas e acessíveis, otimizando a estrutura e a interação com o usuário.',
    },
    {
      module: 3,
      topic: 'CSS3',
      text: 'Criar e organizar estilos CSS3 avançados para desenvolver layouts web profissionais e interativos, aplicando boas práticas de codificação.',
    },
    {
      module: 4,
      topic: 'JavaScript',
      text: 'Compreender e aplicar conceitos fundamentais de JavaScript para criar interfaces web dinâmicas e interativas.',
    },
    {
      module: 5,
      topic: 'Git',
      text: 'Utilizar o Git para gerenciar versões de código, facilitando a colaboração e a organização em projetos de desenvolvimento de software.',
    },
    {
      module: 6,
      topic: 'Algoritmos',
      text: 'Desenvolver algoritmos eficientes e aplicar estruturas de controle em JavaScript para resolver problemas complexos de forma estruturada.',
    },
    {
      module: 7,
      topic: 'POO',
      text: 'Aplicar conceitos de Programação Orientada a Objetos para desenvolver software modular e reutilizável, utilizando abstração, encapsulamento, herança e polimorfismo.',
    },
    {
      module: 8,
      topic: 'Web APIs',
      text: 'Integrar e manipular Web APIs, DOM, eventos, Fetch API e Web Storage API para criar aplicações web interativas e dinâmicas.',
    },
    {
      module: 9,
      topic: 'HTTP',
      text: 'Compreender e aplicar o protocolo HTTP para comunicação eficaz entre clientes e servidores, garantindo segurança e eficiência nas requisições e respostas.',
    },
    {
      module: 10,
      topic: 'JavaScript moderno',
      text: 'Aplicar técnicas modernas de JavaScript para desenvolver aplicações eficientes, utilizando programação assíncrona, funcional e boas práticas de refatoração.',
    },
    {
      module: 11,
      topic: 'Responsividade',
      text: 'Criar layouts web responsivos e adaptáveis utilizando técnicas de CSS como Flexbox e Grid, garantindo uma experiência consistente em diversos dispositivos.',
    },
    {
      module: 12,
      topic: 'BEM',
      text: 'Estruturar e organizar CSS de forma eficiente em projetos de grande escala utilizando a metodologia BEM para melhorar a manutenção e escalabilidade do código.',
    },
    {
      module: 13,
      topic: 'Sass',
      text: 'Utilizar o Sass para otimizar e organizar o desenvolvimento de estilos em projetos de grande escala, melhorando a manutenção e escalabilidade do código CSS.',
    },
    {
      module: 14,
      topic: 'Bootstrap',
      text: 'Utilizar o Bootstrap para desenvolver interfaces web responsivas e personalizadas, otimizando o tempo de desenvolvimento e garantindo um design consistente e moderno.',
    },
    {
      module: 15,
      topic: 'Tailwind CSS',
      text: 'Implementar interfaces web modernas e responsivas utilizando o Tailwind CSS, aproveitando sua flexibilidade e personalização através de classes utilitárias.',
    },
    {
      module: 16,
      topic: 'React',
      text: 'Construir interfaces de usuário dinâmicas e modulares utilizando React, aplicando conceitos de componentes, props, state e ciclo de vida.',
      current: true,
    },
  ],
}

export const experiences = [
  {
    period: '2025',
    company: 'World Cel',
    role: 'Vendedor, técnico e atendimento ao cliente',
    text: 'Atuação com manutenção de aparelhos celulares, produção audiovisual, venda de produtos e acessórios tecnológicos e atendimento com foco em solução de problemas e boa experiência para o cliente.',
  },
  {
    period: '2024',
    company: 'Minicurso de Cyber Segurança',
    role: 'Ministrante e organizador de aulas',
    text: 'Organização e condução de aulas introdutórias sobre fundamentos de segurança digital para pessoas e empresários da região.',
  },
]

export const education = [
  {
    period: '2024',
    title: 'Ensino Médio integrado ao Técnico em Informática',
    institution: 'Unidade Escolar Dr. Dionísio Rodrigues Nogueira',
  },
  {
    period: 'Em andamento',
    title: 'Formação Front-End',
    institution: 'EBAC · 50% concluído',
  },
]
