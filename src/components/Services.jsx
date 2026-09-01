import { services } from '../data/portfolio.js'

export default function Services() {
  return (
    <section className="section services">
      <div className="shell services__grid">
        <div className="services__intro motion-reveal">
          <p className="eyebrow"><span>04</span> o que eu posso construir</p>
          <h2>Front-End com função antes do efeito.</h2>
          <p>Design pode chamar atenção. Estrutura, responsividade e clareza fazem a pessoa continuar usando.</p>
        </div>

        <div className="services__list">
          {services.map((service) => (
            <article className="service-item motion-reveal" key={service.index}>
              <span>{service.index}</span>
              <div><h3>{service.title}</h3><p>{service.text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
