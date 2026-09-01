import { education, experiences, profile, stack } from '../data/portfolio.js'

export default function Experience() {
  return (
    <section className="section experience" id="experiencia">
      <div className="shell experience__grid">
        <div className="experience__sticky motion-reveal">
          <p className="eyebrow eyebrow--light"><span>06</span> trajetória</p>
          <h2>Interface também é entender gente.</h2>
          <p>Minha base técnica vem acompanhada de experiência com atendimento, manutenção, comunicação e produção visual. Isso muda a forma como penso uma interface: não é só o que funciona, é o que a pessoa entende.</p>
          <div className="stack-cloud">{stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>

        <div className="experience__content">
          <div className="timeline-list">
            <h3>Experiência</h3>
            {experiences.map((item) => (
              <article className="timeline-item motion-reveal" key={`${item.period}-${item.company}`}>
                <span>{item.period}</span>
                <div><small>{item.company}</small><h4>{item.role}</h4><p>{item.text}</p></div>
              </article>
            ))}
          </div>

          <div className="timeline-list timeline-list--education">
            <h3>Formação</h3>
            {education.map((item) => (
              <article className="timeline-item motion-reveal" key={`${item.period}-${item.title}`}>
                <span>{item.period}</span>
                <div><small>{item.institution}</small><h4>{item.title}</h4></div>
              </article>
            ))}
          </div>

          <a className="experience__linkedin motion-reveal" href={profile.linkedin} target="_blank" rel="noreferrer">
            <span>LinkedIn</span><strong>Ver perfil profissional completo</strong><i>↗</i>
          </a>
        </div>
      </div>
    </section>
  )
}
