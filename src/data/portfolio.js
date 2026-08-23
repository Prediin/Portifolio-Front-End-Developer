export const profile = {
  name: "Pedro Luís Bezerra Lima",
  shortName: "Pedro Luís",
  role: "Front-End Developer",
  location: "Piauí, Brasil",
  email: "daxstudios.comissions@gmail.com",
  github: "https://github.com/Prediin",
  courseProgress: 44,
  headline: "Código com direção visual.",
  intro:
    "Desenvolvo interfaces responsivas e experiências digitais com atenção a movimento, clareza, acessibilidade e identidade visual.",
};

export const navigation = [
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Competências", href: "#competencias" },
  { label: "Arquivo criativo", href: "#arquivo" },
  { label: "Contato", href: "#contato" },
];

export const featuredProjects = [
  {
    id: "efraim",
    index: "01",
    title: "Efraim Paiva — Art Discovery",
    type: "Website cultural",
    description:
      "Projeto voltado à apresentação da arte de Efraim Paiva, com foco em hierarquia visual, conteúdo e experiência responsiva.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Prediin/discEfraimPaiva",
    accent: "blue",
    placeholder: "Adicione aqui um screenshot real do projeto",
  },
  {
    id: "daxos",
    index: "02",
    title: "DaxOS — Interface Experimental",
    type: "Experimento de interface",
    description:
      "Exploração de interface inspirada em sistemas operacionais para testar composição, componentes visuais e comportamento no navegador.",
    tags: ["CSS", "UI", "Experimentação"],
    github: "https://github.com/Prediin/DaxOS",
    accent: "coral",
    placeholder: "Adicione aqui uma captura do DaxOS",
  },
  {
    id: "guess",
    index: "03",
    title: "Jogo de Adivinhação",
    type: "JavaScript interativo",
    description:
      "Projeto de prática de lógica e interação no navegador, transformando fundamentos de JavaScript em uma experiência direta e jogável.",
    tags: ["JavaScript", "Lógica", "DOM"],
    github: "https://github.com/Prediin/e1_-jogoDeAdivinhacao-",
    accent: "mint",
    placeholder: "Adicione aqui um GIF curto da interação",
  },
];

export const skillGroups = [
  {
    title: "Front-End",
    text: "Construção de interfaces semânticas, responsivas e orientadas à experiência do usuário.",
    skills: [
      "HTML5 semântico",
      "CSS3",
      "JavaScript moderno",
      "React",
      "DOM & Web APIs",
      "Responsividade",
      "Acessibilidade",
    ],
  },
  {
    title: "CSS & UI",
    text: "Organização visual, componentes reutilizáveis e adaptação para diferentes contextos de tela.",
    skills: ["Flexbox", "CSS Grid", "BEM", "Sass", "Bootstrap", "Tailwind CSS", "Motion UI"],
  },
  {
    title: "Workflow",
    text: "Ferramentas e fundamentos para trabalhar com projetos reais e evolução contínua do código.",
    skills: ["Git", "GitHub", "NPM", "Vite", "HTTP/HTTPS", "Fetch API", "Promises", "Async/Await"],
  },
  {
    title: "Repertório criativo",
    text: "Um olhar visual que vem de outras linguagens e influencia como penso interfaces digitais.",
    skills: ["Design", "Edição de vídeo", "Motion", "Ilustração", "Fotografia", "Audiovisual", "Direção visual"],
  },
];

export const timeline = [
  {
    year: "Agora",
    title: "Desenvolvimento Front-End — EBAC",
    description:
      "Formação em andamento, consolidando fundamentos da Web, JavaScript moderno, CSS profissional e ferramentas de desenvolvimento.",
  },
  {
    year: "2025",
    title: "World Cel",
    description:
      "Atendimento ao cliente, manutenção de dispositivos, vendas e produção audiovisual — experiência prática em comunicação e resolução de problemas.",
  },
  {
    year: "2024",
    title: "Minicurso de Cyber Segurança",
    description:
      "Atuação como ministrante e organizador de aulas introdutórias sobre segurança digital para pessoas e negócios da região.",
  },
  {
    year: "2024",
    title: "Técnico em Informática",
    description:
      "Ensino Médio integrado ao Técnico em Informática pela Unidade Escolar Dr. Dionísio Rodrigues Nogueira.",
  },
];

export const creativeSlots = [
  { title: "Ilustração", label: "digital + tradicional", shape: "portrait" },
  { title: "Motion", label: "animação + vídeo", shape: "wide" },
  { title: "Fotografia", label: "luz + composição", shape: "square" },
  { title: "Processo", label: "sketches + bastidores", shape: "wide" },
];
