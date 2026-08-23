import { useEffect, useState } from "react";
import { CreativeCanvas } from "./components/CreativeCanvas";
import { GithubPulse } from "./components/GithubPulse";
import { ArrowUpRightIcon, GithubIcon } from "./components/Icon";
import { ProjectCard } from "./components/ProjectCard";
import { SectionHeading } from "./components/SectionHeading";
import { creativeSlots, featuredProjects, navigation, profile, skillGroups, timeline } from "./data/portfolio";
import { useReveal } from "./hooks/useReveal";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  useReveal();

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <header className="site-header">
        <a className="brand" href="#topo" aria-label="Pedro Luís — início">
          <span className="brand__symbol">PL</span>
          <span className="brand__text">Front-End / Creative</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Abrir menu</span>
        </button>

        <nav id="main-nav" className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href={`mailto:${profile.email}`}>Conversar</a>
        </nav>
      </header>

      <main id="conteudo">
        <section className="hero" id="topo">
          <div className="hero__noise" aria-hidden="true" />
          <div className="hero__content">
            <p className="availability"><span /> Disponível para oportunidades Front-End</p>
            <h1>
              <span>{profile.headline}</span>
              <em>Experiências que têm presença.</em>
            </h1>
            <p className="hero__intro">{profile.intro}</p>
            <div className="hero__actions">
              <a href="#projetos" className="button button--primary">Ver projetos <ArrowUpRightIcon /></a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="button button--ghost"><GithubIcon /> GitHub</a>
            </div>
            <div className="hero__meta" aria-label="Informações rápidas">
              <div><span>Base</span><strong>{profile.location}</strong></div>
              <div><span>Foco</span><strong>React + JavaScript</strong></div>
              <div><span>Formação</span><strong>EBAC · {profile.courseProgress}%</strong></div>
            </div>
          </div>

          <div className="hero__art" aria-label="Composição visual autoral">
            <CreativeCanvas />
            <div className="hero-card hero-card--top">
              <span>01 / BUILD</span>
              <strong>interfaces</strong>
            </div>
            <div className="hero-card hero-card--bottom">
              <span>02 / FEEL</span>
              <strong>movimento</strong>
            </div>
            <div className="hero__signature">Pedro Luís · 2026</div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker__track">
            {["REACT", "JAVASCRIPT", "RESPONSIVE UI", "CSS", "MOTION", "DESIGN", "GIT", "WEB APIS", "REACT", "JAVASCRIPT", "RESPONSIVE UI", "CSS", "MOTION", "DESIGN", "GIT", "WEB APIS"].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>

        <section className="section projects" id="projetos">
          <SectionHeading
            eyebrow="01 / Trabalho"
            title="Projetos selecionados"
            text="Poucos projetos, bem apresentados. Cada case deve mostrar problema, decisões e evolução — não apenas uma screenshot bonita."
          />
          <div className="project-list">
            {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
          <GithubPulse />
        </section>

        <section className="section about" id="sobre">
          <div className="about__portrait" data-reveal>
            <img src="/profile-placeholder.svg" alt="Espaço reservado para uma foto de Pedro Luís" loading="lazy" />
            <span className="about__portrait-label">Substitua por uma foto autoral quando quiser.</span>
          </div>
          <div className="about__content">
            <SectionHeading eyebrow="02 / Sobre" title="Técnica, curiosidade e repertório visual." />
            <div className="about__copy" data-reveal>
              <p className="about__lead">
                Sou <strong>{profile.name}</strong>, Técnico em Informática e desenvolvedor Front-End em formação. Gosto de transformar uma ideia em algo que funciona, comunica e tem personalidade.
              </p>
              <p>
                Minha relação com tecnologia convive com cinema, ilustração, fotografia, edição de vídeo, motion e design. Isso influencia meu jeito de observar ritmo, composição, hierarquia e detalhes em uma interface.
              </p>
              <p>
                Procuro oportunidades em que eu possa continuar evoluindo com times experientes, contribuir com código bem cuidado e construir produtos úteis para pessoas reais.
              </p>
            </div>
            <div className="about__principles" data-reveal>
              <span>01 Clareza antes de efeito</span>
              <span>02 Responsivo por padrão</span>
              <span>03 Movimento com propósito</span>
              <span>04 Aprender construindo</span>
            </div>
          </div>
        </section>

        <section className="section skills" id="competencias">
          <SectionHeading
            eyebrow="03 / Competências"
            title="Base sólida, em evolução constante."
            text="O foco é mostrar o que já consigo aplicar com segurança e deixar espaço para a evolução natural da formação."
          />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title} data-reveal>
                <span className="skill-card__index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <div className="skill-card__list">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>

          <div className="learning-panel" data-reveal>
            <div className="learning-panel__copy">
              <span className="eyebrow">Em formação / EBAC</span>
              <h3>Desenvolvimento Front-End</h3>
              <p>Estudo contínuo de Web, JavaScript, CSS profissional, ferramentas e construção de interfaces. Este próprio portfólio usa React como próximo passo prático.</p>
            </div>
            <div className="progress" aria-label={`Progresso da formação: ${profile.courseProgress}%`}>
              <div className="progress__number">{profile.courseProgress}<small>%</small></div>
              <div className="progress__track"><span style={{ width: `${profile.courseProgress}%` }} /></div>
              <div className="progress__labels"><span>fundamentos</span><span>produção</span></div>
            </div>
          </div>
        </section>

        <section className="section journey">
          <SectionHeading eyebrow="04 / Trajetória" title="Experiências que também viraram habilidade." />
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline__item" key={`${item.year}-${item.title}`} data-reveal>
                <time>{item.year}</time>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section archive" id="arquivo">
          <SectionHeading
            eyebrow="05 / Arquivo criativo"
            title="O que alimenta meu olhar."
            text="Uma base pronta para você trocar pelos seus próprios desenhos, frames, fotografias, estudos de motion e bastidores."
          />
          <div className="archive-grid">
            {creativeSlots.map((slot, index) => (
              <article className={`archive-card archive-card--${slot.shape}`} key={slot.title} data-reveal>
                <div className="archive-card__placeholder">
                  <span>+ inserir obra</span>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                </div>
                <div className="archive-card__caption"><strong>{slot.title}</strong><span>{slot.label}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="contact__inner" data-reveal>
            <span className="eyebrow">06 / Contato</span>
            <h2>Tem uma vaga, projeto ou boa conversa?</h2>
            <p>Estou construindo minha carreira em Front-End e quero trabalhar com pessoas que valorizem curiosidade, responsabilidade e evolução.</p>
            <div className="contact__actions">
              <a className="button button--light" href={`mailto:${profile.email}`}>Enviar e-mail <ArrowUpRightIcon /></a>
              <button className="button button--outline-light" type="button" onClick={copyEmail}>{copied ? "E-mail copiado ✓" : "Copiar e-mail"}</button>
            </div>
            <div className="contact__footer">
              <span>{profile.email}</span>
              <a href={profile.github} target="_blank" rel="noreferrer">github.com/Prediin</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Pedro Luís</span>
        <span>Design + React + curiosidade.</span>
        <a href="#topo">Voltar ao topo ↑</a>
      </footer>
    </div>
  );
}

export default App;
