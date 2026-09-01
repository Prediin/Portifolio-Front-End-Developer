import { learning } from '../data/portfolio.js'

export default function Learning() {
  return (
    <section className="section learning" id="formacao">
      <div className="shell">
        <div className="learning__top motion-reveal">
          <div>
            <p className="eyebrow"><span>05</span> formação em andamento</p>
            <h2>Aprendizado que já vira interface.</h2>
          </div>
          <div className="progress-orbit" style={{ '--progress': learning.progress }} aria-label={`${learning.progress}% do curso concluído`}>
            <div><strong>{learning.progress}%</strong><span>EBAC</span></div>
          </div>
        </div>

        <div className="learning__grid">
          <article className="competence-card motion-reveal">
            <small>MÓDULO {String(learning.currentModule).padStart(2, '0')} · COMPETÊNCIA ATUAL</small>
            <h3>{learning.title}</h3>
            <p>{learning.competence}</p>
            <div className="competence-status"><i /><span>{learning.status}</span></div>
          </article>

          <div className="learning-skills">
            {learning.skills.map((skill, index) => (
              <article className="learning-skill motion-reveal" key={skill}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{skill}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="competency-map motion-reveal" aria-labelledby="competency-map-title">
          <div className="competency-map__header">
            <div>
              <small>TRILHA FRONT-END · EBAC</small>
              <h3 id="competency-map-title">Competências desenvolvidas</h3>
            </div>
            <p>{learning.competencies.length} módulos organizados em sequência de aprendizado.</p>
          </div>

          <div className="competency-list">
            {learning.competencies.map((item) => (
              <article
                className={`competency-item ${item.current ? 'competency-item--current' : ''}`}
                key={item.module}
              >
                <div className="competency-item__meta">
                  <span>{String(item.module).padStart(2, '0')}</span>
                  <strong>{item.topic}</strong>
                  {item.current && <em>ATUAL</em>}
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
