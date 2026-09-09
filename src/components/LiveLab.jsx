import { useState } from 'react'
import { projects } from '../data/portfolio.js'
import ProjectPreview from './ProjectPreview.jsx'
export default function LiveLab({ activeId, onSelect }) {
  const [loadedId, setLoadedId] = useState(null)
  const [device, setDevice] = useState('desktop')
  const project = projects.find((item) => item.id === activeId) ?? projects[0]
  function select(id) {
    setLoadedId(null)
    onSelect(id)
  }
  function navigate(event, index) {
    let next
    if (event.key === 'ArrowRight') next = (index + 1) % projects.length
    if (event.key === 'ArrowLeft') next = (index + projects.length - 1) % projects.length
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = projects.length - 1
    if (next !== undefined) {
      event.preventDefault()
      select(projects[next].id)
      document.getElementById(`tab-${projects[next].id}`).focus()
    }
  }
  return (
    <section className="section live-lab" id="live-lab">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>02 /</span> PLAYGROUND
            </p>
            <h2>
              Menos imaginar.
              <br />
              Mais <em>experimentar.</em>
            </h2>
          </div>
          <p>
            O projeto de verdade, aqui dentro.
            <br />
            Navegue, interaja e descubra como
            <br />
            cada interface se adapta à sua tela.
          </p>
        </div>
        <div className="live-lab__tabs" role="tablist" aria-label="Projetos disponíveis">
          {projects.map((item, index) => (
            <button
              key={item.id}
              id={`tab-${item.id}`}
              role="tab"
              aria-selected={project.id === item.id}
              aria-controls="demo-panel"
              tabIndex={project.id === item.id ? 0 : -1}
              onKeyDown={(event) => navigate(event, index)}
              onClick={() => select(item.id)}
            >
              <span>{item.index}</span>
              {item.title}
            </button>
          ))}
        </div>
        <div
          className="browser-demo"
          id="demo-panel"
          role="tabpanel"
          aria-labelledby={`tab-${project.id}`}
          tabIndex="0"
        >
          <div className="browser-demo__bar">
            <div className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <span>{project.url.replace('https://', '')}</span>
            <div className="device-switch" aria-label="Tamanho da demonstração">
              <button aria-pressed={device === 'desktop'} onClick={() => setDevice('desktop')}>
                Desktop
              </button>
              <button aria-pressed={device === 'mobile'} onClick={() => setDevice('mobile')}>
                Mobile
              </button>
            </div>
          </div>
          <div className={`browser-demo__viewport ${device === 'mobile' ? 'is-mobile' : ''}`}>
            {loadedId === project.id ? (
              <iframe
                key={project.id}
                src={project.url}
                title={`Demonstração de ${project.title}`}
                referrerPolicy="strict-origin-when-cross-origin"
                sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
              />
            ) : (
              <div className="demo-gate">
                <ProjectPreview variant={project.preview} />
                <div>
                  <small>PRONTO PARA EXPLORAR</small>
                  <h3>{project.title}</h3>
                  <p>{project.details}</p>
                  <button
                    className="button button--primary"
                    onClick={() => setLoadedId(project.id)}
                  >
                    Iniciar experiência <span>↗</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="browser-demo__footer">
            <span>A demonstração é carregada ao iniciar. Se não aparecer, abra em outra guia.</span>
            <a href={project.url} target="_blank" rel="noreferrer">
              Abrir site ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
