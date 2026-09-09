import { profile, projects } from '../data/portfolio.js'
import CreativeStudio from './CreativeStudio.jsx'
export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="shell">
        <div className="hero__topline">
          <span>
            <i className="status-dot" /> Disponível para oportunidades
          </span>
          <span>{profile.location} ↗</span>
        </div>
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="hud-tag">OLÁ, MUNDO.</span> EU SOU PEDRO LUIS
            </p>
            <h1 id="hero-title">
              Código na cabeça.
              <br />
              <span className="hero-handwritten">Criatividade</span>
              <br />
              em cada clique<span className="hero-period">.</span>
            </h1>
            <p className="hero__lead">
              Sou desenvolvedor Front-End e gosto de dar <strong>personalidade às ideias.</strong>{' '}
              Transformo design e código em experiências que funcionam bem — e fazem você querer
              explorar.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#projetos">
                Explore meus projetos <span>↗</span>
              </a>
              <a className="hero-about-link" href="#experiencia">
                Conheça quem cria <span>↓</span>
              </a>
            </div>
            <div className="hero__signature">
              <span /> REACT · JAVASCRIPT · UM OLHAR CRIATIVO
            </div>
          </div>
          <CreativeStudio />
        </div>
        <div className="hero__bottom">
          <p>
            <strong>{String(projects.length).padStart(2, '0')}</strong> projetos publicados{' '}
            <span className="hero__divider" /> Cada um, um universo para explorar.
          </p>
          <a href="#projetos">
            BORA DESCOBRIR <span>↓</span>
          </a>
        </div>
      </div>
      <div className="stack-strip">
        <div className="shell">
          {['React', 'JavaScript', 'HTML & CSS', 'Sass', 'Git & GitHub', 'Vite'].map((item) => (
            <span key={item}>
              <i aria-hidden="true">✳</i>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
