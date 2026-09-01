import { profile, stack, stats } from '../data/portfolio.js'

const logo = `${import.meta.env.BASE_URL}brand-logo.png`

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero__grid">
        <div className="hero__copy motion-reveal">
          <p className="eyebrow"><span>01</span> front-end / interface / experiência</p>
          <h1>
            Interfaces que parecem simples
            <span> porque o trabalho difícil ficou no código.</span>
          </h1>
          <p className="hero__lead">{profile.intro}</p>

          <div className="hero__actions">
            <a className="button button--primary" href="#projetos">Ver projetos</a>
            <a className="button button--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>

          <div className="availability">
            <i aria-hidden="true" />
            <span>{profile.availability}</span>
          </div>
        </div>

        <div className="hero__visual motion-reveal tilt-card" aria-label="Composição visual inspirada em um ambiente de desenvolvimento">
          <div className="dev-window">
            <div className="dev-window__bar">
              <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
              <span>portfolio.jsx</span>
              <small>localhost:5173</small>
            </div>

            <div className="dev-window__body">
              <div className="code-pane" aria-hidden="true">
                <div><b>01</b><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div>
                <div><b>02</b>&nbsp;&nbsp;name: <span className="code-gold">'Pedro Luis'</span>,</div>
                <div><b>03</b>&nbsp;&nbsp;focus: <span className="code-gold">'Front-End'</span>,</div>
                <div><b>04</b>&nbsp;&nbsp;stack: [<span className="code-gold">'React'</span>, <span className="code-gold">'JS'</span>],</div>
                <div><b>05</b>&nbsp;&nbsp;detail: <span className="code-red">true</span>,</div>
                <div><b>06</b>&nbsp;&nbsp;responsive: <span className="code-red">true</span></div>
                <div><b>07</b>{'}'}</div>
              </div>

              <div className="ui-pane">
                <div className="ui-pane__brand"><img src={logo} alt="" /><span>PL / BUILD</span></div>
                <div className="ui-card">
                  <small>COMPONENT_01</small>
                  <strong>Interface pronta para pessoas, não só para telas.</strong>
                  <div className="ui-lines"><i /><i /><i /></div>
                </div>
                <div className="ui-pulse" aria-hidden="true"><span /><span /><span /><span /></div>
              </div>
            </div>

            <div className="dev-window__footer">
              <span>✓ build</span>
              <span>✓ responsive</span>
              <span>✓ deployed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="shell hero__stats motion-reveal">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[0, 1].map((group) => (
            <div className="ticker__group" key={group}>
              {stack.map((item) => <span key={`${group}-${item}`}>{item}<i>◆</i></span>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
