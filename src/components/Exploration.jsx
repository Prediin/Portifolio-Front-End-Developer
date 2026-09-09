import { useEffect, useState } from 'react'
const checkpoints = ['top', 'projetos', 'live-lab', 'formacao', 'experiencia', 'contato']
export default function Exploration() {
  const [visited, setVisited] = useState([])
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          setVisited((current) =>
            current.includes(entry.target.id) ? current : [...current, entry.target.id],
          )
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '-10% 0px -35% 0px', threshold: 0 },
    )
    checkpoints.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])
  return (
    <aside className="exploration" aria-label="Progresso de exploração do portfólio">
      <span className="exploration__icon" aria-hidden="true">
        ⌘
      </span>
      <span className="exploration__label">
        {visited.length === checkpoints.length ? 'MAPA EXPLORADO' : 'EXPLORANDO PORTFÓLIO'}
      </span>
      <div
        role="progressbar"
        aria-label="Seções visitadas"
        aria-valuemin={0}
        aria-valuemax={checkpoints.length}
        aria-valuenow={visited.length}
        className="exploration__bar"
      >
        {checkpoints.map((id) => (
          <i key={id} className={visited.includes(id) ? 'is-complete' : ''} />
        ))}
      </div>
      <span className="exploration__count">
        {visited.length}/{checkpoints.length}
      </span>
    </aside>
  )
}
