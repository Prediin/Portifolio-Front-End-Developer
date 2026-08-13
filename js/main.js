const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const projects = [
  {
    id: "p01",
    number: "01",
    title: "Projeto Front-End — Case Study",
    category: "frontend",
    categoryLabel: "Front-End",
    year: "ADICIONAR",
    image: "./assets/project-01.svg",
    summary: "Espaço reservado para seu melhor site: apresente contexto, problema, solução, decisões de UI e resultado.",
    stack: ["HTML", "CSS", "JavaScript"],
    role: "Defina seu papel no projeto.",
    challenge: "Explique o problema real que você precisou resolver.",
    result: "Adicione resultado, aprendizado, métricas ou melhoria percebida."
  },
  {
    id: "p02",
    number: "02",
    title: "Interface Responsiva — Case Study",
    category: "frontend",
    categoryLabel: "UI / Responsive",
    year: "ADICIONAR",
    image: "./assets/project-02.svg",
    summary: "Use este espaço para uma interface responsiva que demonstre composição, Grid/Flexbox e cuidado mobile first.",
    stack: ["Responsive", "Grid", "Flexbox"],
    role: "Defina seu papel no projeto.",
    challenge: "Mostre como o layout se adapta e quais decisões de UX foram tomadas.",
    result: "Inclua antes/depois, Lighthouse ou aprendizados quando existirem."
  },
  {
    id: "p03",
    number: "03",
    title: "Aplicação JavaScript — Case Study",
    category: "javascript",
    categoryLabel: "JavaScript",
    year: "ADICIONAR",
    image: "./assets/project-03.svg",
    summary: "Ideal para um projeto com DOM, eventos, consumo de API, localStorage ou lógica de interface mais forte.",
    stack: ["JavaScript", "DOM", "Fetch API"],
    role: "Defina seu papel no projeto.",
    challenge: "Explique a arquitetura, estados e casos de erro tratados.",
    result: "Mostre o que a interação permite fazer e o que você aprendeu."
  },
  {
    id: "p04",
    number: "04",
    title: "Experimento de Interação — Lab",
    category: "javascript",
    categoryLabel: "Creative Coding",
    year: "ADICIONAR",
    image: "./assets/project-04.svg",
    summary: "Um lugar para microinterações, canvas, animações, experiências generativas ou estudo de movimento na web.",
    stack: ["JavaScript", "Animation", "Interaction"],
    role: "Defina seu papel no projeto.",
    challenge: "Conte qual sensação ou comportamento você queria explorar.",
    result: "Adicione GIF/vídeo, link ao vivo e detalhes técnicos."
  },
  {
    id: "p05",
    number: "05",
    title: "Direção Visual — Projeto Criativo",
    category: "creative",
    categoryLabel: "Design / Visual",
    year: "ADICIONAR",
    image: "./assets/project-05.svg",
    summary: "Use para design, identidade visual, ilustração, fotografia ou uma peça que mostre repertório aplicável ao Front-End.",
    stack: ["Design", "Art Direction", "Visual"],
    role: "Descreva o processo criativo.",
    challenge: "Mostre conceito, referências e restrições.",
    result: "Adicione as peças finais e o raciocínio por trás delas."
  },
  {
    id: "p06",
    number: "06",
    title: "Motion / Vídeo — Projeto Criativo",
    category: "creative",
    categoryLabel: "Motion / Video",
    year: "ADICIONAR",
    image: "./assets/project-06.svg",
    summary: "Reserve para edição, motion design ou narrativa audiovisual — um diferencial que pode enriquecer experiências digitais.",
    stack: ["Motion", "Editing", "Storytelling"],
    role: "Defina direção, edição, animação ou produção.",
    challenge: "Explique intenção, ritmo e processo.",
    result: "Inclua vídeo incorporado ou link para a peça final."
  }
];

const commands = [
  { icon: "01", label: "Topo", hint: "Apresentação", target: "#topo" },
  { icon: "02", label: "Trabalhos", hint: "Projetos e estudos de caso", target: "#trabalhos" },
  { icon: "03", label: "Competências", hint: "Stack e progresso EBAC", target: "#competencias" },
  { icon: "04", label: "Creative Lab", hint: "Experimento interativo", target: "#lab" },
  { icon: "05", label: "Sobre", hint: "Perfil e repertório", target: "#sobre" },
  { icon: "06", label: "Contato", hint: "Conversar sobre oportunidades", target: "#contato" }
];

const projectGrid = $("#projectGrid");
const projectCount = $("#projectCount");
const projectModal = $("#projectModal");
const projectModalContent = $("#projectModalContent");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function renderProjects(filter = "all") {
  const visible = projects.filter((project) => filter === "all" || project.category === filter);
  projectGrid.innerHTML = visible.map((project, index) => `
    <article class="project-card reveal is-visible" style="--delay:${Math.min(index * 55, 220)}ms">
      <button class="project-card__button" type="button" data-project="${project.id}" aria-label="Abrir detalhes de ${project.title}">
        <div class="project-card__media">
          <img src="${project.image}" alt="Placeholder visual do projeto ${project.number}" width="1200" height="760" loading="lazy" />
          <span class="project-card__badge">BASE EDITÁVEL</span>
        </div>
        <div class="project-card__body">
          <div class="project-card__meta"><span>${project.number} / ${project.categoryLabel}</span><span>${project.year}</span></div>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="project-card__stack">${project.stack.map((item) => `<span>${item}</span>`).join("")}</div>
        </div>
      </button>
    </article>
  `).join("");
  projectCount.textContent = `${String(visible.length).padStart(2, "0")} projetos`;
}

renderProjects();

$$('.filter-chip').forEach((button) => {
  button.addEventListener('click', () => {
    $$('.filter-chip').forEach((chip) => chip.classList.remove('is-active'));
    button.classList.add('is-active');
    renderProjects(button.dataset.filter);
  });
});

projectGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-project]');
  if (!button) return;
  const project = projects.find((item) => item.id === button.dataset.project);
  if (!project) return;
  projectModalContent.innerHTML = `
    <div class="project-modal__hero"><img src="${project.image}" alt="Placeholder do projeto ${project.number}" /></div>
    <div class="project-modal__body">
      <span class="project-modal__eyebrow">CASE STUDY ${project.number} / ${project.categoryLabel.toUpperCase()}</span>
      <h2 id="projectModalTitle">${project.title}</h2>
      <p class="project-modal__lead">${project.summary}</p>
      <div class="project-card__stack">${project.stack.map((item) => `<span>${item}</span>`).join("")}</div>
      <div class="project-modal__columns">
        <div><span>SEU PAPEL</span><p>${project.role}</p></div>
        <div><span>DESAFIO</span><p>${project.challenge}</p></div>
        <div><span>RESULTADO</span><p>${project.result}</p></div>
      </div>
    </div>
  `;
  projectModal.showModal();
});

$('#closeProjectModal').addEventListener('click', () => projectModal.close());
projectModal.addEventListener('click', (event) => {
  if (event.target === projectModal) projectModal.close();
});

// ---------- Boot / scroll / reveal ----------
window.addEventListener('load', () => {
  window.setTimeout(() => $('#boot').classList.add('is-done'), reducedMotion ? 0 : 920);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

$$('.reveal').forEach((element) => {
  if (element.dataset.delay) element.style.setProperty('--delay', `${element.dataset.delay}ms`);
  revealObserver.observe(element);
});

function onScroll() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  $('#scrollProgress').style.width = `${progress}%`;
  $('.site-header').classList.toggle('is-scrolled', window.scrollY > 24);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- DEV / CREATIVE mode ----------
$('#modeSwitch').addEventListener('click', () => {
  const root = document.documentElement;
  const next = root.dataset.mode === 'dev' ? 'creative' : 'dev';
  root.dataset.mode = next;
  $('#modeLabel').textContent = next === 'dev' ? 'DEV' : 'ART';
  $('#modeSwitch').setAttribute('aria-pressed', String(next === 'creative'));
  showToast(next === 'dev' ? 'Modo DEV: precisão + estrutura.' : 'Modo ART: expressão + movimento.');
});

// ---------- Modules ----------
$('#toggleModules').addEventListener('click', () => {
  const list = $('#moduleList');
  const willOpen = list.hidden;
  list.hidden = !willOpen;
  $('#toggleModules').setAttribute('aria-expanded', String(willOpen));
  $('#toggleModules span').textContent = willOpen ? '↑' : '↓';
});

// ---------- Interactive poster ----------
const poster = $('#poster');
const shapeControl = $('#shapeControl');
const blurControl = $('#blurControl');
const energyControl = $('#energyControl');

function renderPoster() {
  poster.style.setProperty('--shape', `${shapeControl.value}%`);
  poster.style.setProperty('--blur', `${blurControl.value}px`);
  poster.style.setProperty('--energy', energyControl.value);
}
[shapeControl, blurControl, energyControl].forEach((control) => control.addEventListener('input', renderPoster));
renderPoster();

$('#randomizePoster').addEventListener('click', () => {
  shapeControl.value = Math.floor(Math.random() * 50);
  blurControl.value = Math.floor(Math.random() * 15);
  energyControl.value = 1 + Math.floor(Math.random() * 12);
  renderPoster();
});

// ---------- Command palette ----------
const palette = $('#commandPalette');
const commandSearch = $('#commandSearch');
const commandList = $('#commandList');
let activeCommand = 0;
let filteredCommands = [...commands];

function renderCommands() {
  const query = commandSearch.value.trim().toLowerCase();
  filteredCommands = commands.filter((item) => `${item.label} ${item.hint}`.toLowerCase().includes(query));
  activeCommand = Math.min(activeCommand, Math.max(filteredCommands.length - 1, 0));
  commandList.innerHTML = filteredCommands.map((item, index) => `
    <button class="command-item ${index === activeCommand ? 'is-active' : ''}" type="button" data-command-index="${index}">
      <span class="command-item__icon">${item.icon}</span>
      <span>${item.label}<br><small>${item.hint}</small></span>
      <span>↘</span>
    </button>
  `).join('') || '<p style="padding:16px;color:var(--muted)">Nenhum destino encontrado.</p>';
}

function openPalette() {
  if (palette.open) return;
  commandSearch.value = '';
  activeCommand = 0;
  renderCommands();
  palette.showModal();
  requestAnimationFrame(() => commandSearch.focus());
}
function executeCommand(index = activeCommand) {
  const command = filteredCommands[index];
  if (!command) return;
  palette.close();
  document.querySelector(command.target)?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
}

$('#commandButton').addEventListener('click', openPalette);
$('#closeCommand').addEventListener('click', () => palette.close());
commandSearch.addEventListener('input', () => { activeCommand = 0; renderCommands(); });
commandList.addEventListener('click', (event) => {
  const item = event.target.closest('[data-command-index]');
  if (item) executeCommand(Number(item.dataset.commandIndex));
});

window.addEventListener('keydown', (event) => {
  const isShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k';
  if (isShortcut) {
    event.preventDefault();
    palette.open ? palette.close() : openPalette();
    return;
  }
  if (!palette.open) return;
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    activeCommand = (activeCommand + 1) % Math.max(filteredCommands.length, 1);
    renderCommands();
  }
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    activeCommand = (activeCommand - 1 + Math.max(filteredCommands.length, 1)) % Math.max(filteredCommands.length, 1);
    renderCommands();
  }
  if (event.key === 'Enter') {
    event.preventDefault();
    executeCommand();
  }
});

// ---------- Placeholders / toast ----------
let toastTimer;
function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2500);
}

$$('[data-placeholder-link]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const type = link.dataset.placeholderLink;
    const messages = {
      linkedin: 'Adicione seu LinkedIn no index.html.',
      github: 'Adicione seu GitHub no index.html.',
      cv: 'Coloque seu PDF em assets/curriculo-pedro.pdf e atualize o link.'
    };
    showToast(messages[type]);
  });
});

// ---------- Creative signal canvas ----------
const canvas = $('#signalCanvas');
const ctx = canvas.getContext('2d');
const nodes = Array.from({ length: 36 }, (_, index) => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: 1.2 + Math.random() * 4.5,
  vx: (Math.random() - .5) * (index % 4 === 0 ? .7 : .28),
  vy: (Math.random() - .5) * (index % 5 === 0 ? .6 : .25),
  phase: Math.random() * Math.PI * 2
}));
let frame = 0;

function cssColor(variable, fallback) {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim() || fallback;
}

function drawSignal() {
  frame += 1;
  const accent = cssColor('--accent', '#5a7dff');
  const signal = cssColor('--signal', '#d7ff64');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#0d1118');
  gradient.addColorStop(.55, '#10141c');
  gradient.addColorStop(1, '#090b0f');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = 'rgba(243,240,234,.055)';
  ctx.lineWidth = 1;
  for (let x = 0; x <= canvas.width; x += 52) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
  }
  for (let y = 0; y <= canvas.height; y += 52) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
  }

  for (const node of nodes) {
    if (!reducedMotion) {
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < -20) node.x = canvas.width + 20;
      if (node.x > canvas.width + 20) node.x = -20;
      if (node.y < -20) node.y = canvas.height + 20;
      if (node.y > canvas.height + 20) node.y = -20;
    }
  }

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j];
      const dx = a.x - b.x, dy = a.y - b.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 125) {
        ctx.strokeStyle = `rgba(243,240,234,${(1 - distance / 125) * .16})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
    }
  }

  nodes.forEach((node, index) => {
    const pulse = reducedMotion ? 1 : 1 + Math.sin(frame * .025 + node.phase) * .18;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.r * pulse, 0, Math.PI * 2);
    ctx.fillStyle = index % 6 === 0 ? signal : index % 3 === 0 ? accent : 'rgba(243,240,234,.72)';
    ctx.fill();
  });

  // signature orbit
  const cx = canvas.width * .56;
  const cy = canvas.height * .42;
  ctx.save();
  ctx.translate(cx, cy);
  if (!reducedMotion) ctx.rotate(frame * .0018);
  ctx.strokeStyle = accent;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(0, 0, 205, 86, .35, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = signal;
  ctx.beginPath();
  ctx.ellipse(0, 0, 145, 220, -.58, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  ctx.fillStyle = 'rgba(243,240,234,.92)';
  ctx.font = '900 122px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('PL', cx, cy + 42);
  ctx.font = '600 14px monospace';
  ctx.fillStyle = 'rgba(243,240,234,.48)';
  ctx.fillText('FRONT-END × CREATIVE TECHNOLOGY', cx, cy + 82);

  if (!reducedMotion) requestAnimationFrame(drawSignal);
}
drawSignal();

function updateTime() {
  $('#signalTime').textContent = new Date().toLocaleTimeString('pt-BR', { hour12: false });
}
updateTime();
setInterval(updateTime, 1000);

// ---------- Cursor, tilt, magnetic ----------
const finePointer = window.matchMedia('(pointer:fine)').matches;
if (finePointer) {
  const cursor = $('#cursor');
  window.addEventListener('mousemove', (event) => {
    cursor.classList.add('is-visible');
    cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
  }, { passive: true });

  $$('a, button, input, .tilt').forEach((element) => {
    element.addEventListener('mouseenter', () => cursor.classList.add('is-active'));
    element.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
  });

  if (!reducedMotion) {
    $$('.tilt').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        card.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 5}deg)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });

    $$('.magnetic').forEach((element) => {
      element.addEventListener('pointermove', (event) => {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        element.style.transform = `translate(${x * .08}px, ${y * .08}px)`;
      });
      element.addEventListener('pointerleave', () => { element.style.transform = ''; });
    });
  }
}

$('#year').textContent = new Date().getFullYear();
