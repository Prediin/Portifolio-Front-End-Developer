import { useEffect, useState } from 'react'
import { projects } from '../data/portfolio.js'
import ProjectPreview from './ProjectPreview.jsx'

export default function LiveLab() {
  const [activeId, setActiveId] = useState(projects[0].id)
  const [loaded, setLoaded] = useState(false)
  const activeProject = projects.find((project) => project.id === activeId) ?? projects[0]

  useEffect(() => {
    setLoaded(false)
  }, [activeId])

  return (
    <section className="section live-lab" id="live-lab">
      <div className="shell">
        <div className="live-lab__header motion-reveal">
          <div>
            <p className="eyebrow eyebrow--light"><span>03</span> live lab</p>
            <h2>Não precisa imaginar.<br />Abra o projeto aqui.</h2>
          </div>
          <p>Para preservar desempenho, a demonstração só é carregada quando você pede. Troque de projeto pelas abas ou abra o site em uma nova guia.</p>
        </div>

        <div className="live-lab__tabs motion-reveal" role="tablist" aria-label="Projetos disponíveis">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={activeId === project.id}
              className={activeId === project.id ? 'is-active' : ''}
              onClick={() => setActiveId(project.id)}
            >
              <span>{project.index}</span>{project.title}
            </button>
          ))}
        </div>

        <div className="browser-demo motion-reveal">
          <div className="browser-demo__bar">
            <div className="window-dots"><i /><i /><i /></div>
            <span>{activeProject.url.replace('https://', '')}</span>
            <a href={activeProject.url} target="_blank" rel="noreferrer">nova guia ↗</a>
          </div>

          <div className="browser-demo__viewport">
            {loaded ? (
              <iframe
                key={activeProject.id}
                src={activeProject.url}
                title={`Demonstração de ${activeProject.title}`}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <div className="demo-gate">
                <ProjectPreview variant={activeProject.preview} />
                <div>
                  <small>DEMONSTRAÇÃO SOB DEMANDA</small>
                  <h3>{activeProject.title}</h3>
                  <p>{activeProject.details}</p>
                  <button className="button button--primary" type="button" onClick={() => setLoaded(true)}>Carregar site ao vivo</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
