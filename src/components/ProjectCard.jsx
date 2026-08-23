import { ArrowUpRightIcon } from "./Icon";

export function ProjectCard({ project }) {
  return (
    <article className={`project-card project-card--${project.accent}`} data-reveal>
      <div className="project-card__visual" aria-label={project.placeholder}>
        <span className="project-card__index">{project.index}</span>
        <span className="project-card__placeholder">{project.placeholder}</span>
        <div className="project-card__mark" aria-hidden="true" />
      </div>
      <div className="project-card__content">
        <div>
          <span className="project-card__type">{project.type}</span>
          <h3>{project.title}</h3>
        </div>
        <p>{project.description}</p>
        <div className="tag-list" aria-label="Tecnologias">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a href={project.github} target="_blank" rel="noreferrer" className="text-link">
          Ver no GitHub <ArrowUpRightIcon />
        </a>
      </div>
    </article>
  );
}
