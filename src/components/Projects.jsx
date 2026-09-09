import { useState } from 'react'
import ProjectPreview from './ProjectPreview.jsx'
import { projects, profile } from '../data/portfolio.js'
export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('Todos')
  const filtered = projects.filter(
    (project) =>
      filter === 'Todos' ||
      (filter === 'Portfólios' ? project.preview !== 'game' : project.preview === 'game'),
  )
  return (
    <section className="section projects" id="projetos" aria-labelledby="projects-title">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>01 /</span> TRABALHOS SELECIONADOS
            </p>
            <h2 id="projects-title">
              Ideias que saíram
              <br />
              do <em>papel.</em>
              <span className="heading-dot">*</span>
            </h2>
          </div>
          <p>
            Identidades diferentes. O mesmo cuidado.
            <br />
            Explore o que construí e as decisões
            <br /> por trás de cada experiência.
          </p>
        </div>
        <div className="project-toolbar">
          <div className="filter-group" aria-label="Filtrar projetos">
            {['Todos', 'Portfólios', 'Interativos'].map((item) => (
              <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>
                {item}
                {item === 'Todos' && <span>{String(projects.length).padStart(2, '0')}</span>}
              </button>
            ))}
          </div>
          <span aria-live="polite">{String(filtered.length).padStart(2, '0')} PROJETOS</span>
        </div>
        <div className="project-list">
          {filtered.map((project) => (
            <article className={`project-card project-card--${project.accent}`} key={project.id}>
              <a
                className="project-card__image"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir ${project.title}`}
              >
                <ProjectPreview variant={project.preview} />
                <span className="project-card__badge">{project.year} · PROJETO PUBLICADO</span>
                <span className="project-card__arrow" aria-hidden="true">
                  ↗
                </span>
                <span className="preview-caption">DIREÇÃO VISUAL DO PROJETO</span>
              </a>
              <div className="project-card__body">
                <div className="project-row__meta">
                  <span>{project.type}</span>
                  <span>/{project.index}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <details className="project-details">
                  <summary>
                    Por trás da interface <span>+</span>
                  </summary>
                  <p>{project.details}</p>
                </details>
                <div className="project-row__links">
                  <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                    Explorar projeto ↗
                  </a>
                  <a
                    className="text-link text-link--muted"
                    href="#live-lab"
                    onClick={() => onSelectProject(project.id)}
                  >
                    Testar aqui ↓
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <a className="all-repos" href={profile.github} target="_blank" rel="noreferrer">
          Mais código, experimentos e evolução no GitHub <span>↗</span>
        </a>
      </div>
    </section>
  )
}
