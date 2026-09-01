import ProjectPreview from './ProjectPreview.jsx'
import { projects } from '../data/portfolio.js'

export default function Projects() {
  return (
    <section className="section projects" id="projetos">
      <div className="shell">
        <div className="section-heading motion-reveal">
          <p className="eyebrow"><span>02</span> projetos em produção</p>
          <h2>Sites que você pode abrir,<br />usar e testar agora.</h2>
          <p>Projetos publicados valem mais que mockups. Aqui estão três interfaces no ar, cada uma explorando um problema e uma linguagem visual diferente.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-row project-row--${project.accent} motion-reveal`} key={project.id}>
              <div className="project-row__index"><span>{project.index}</span><small>{project.year}</small></div>
              <div className="project-row__preview tilt-card"><ProjectPreview variant={project.preview} /></div>
              <div className="project-row__content">
                <div className="project-row__meta"><span>{project.type}</span><i>LIVE</i></div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-row__links">
                  <a className="text-link" href={project.url} target="_blank" rel="noreferrer">Abrir demonstração ↗</a>
                  <a className="text-link text-link--muted" href="#live-lab">Ver dentro do portfólio ↓</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
