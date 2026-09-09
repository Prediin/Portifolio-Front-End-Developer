import { useEffect, useRef, useState } from 'react'
import Brand from './Brand.jsx'
import DisplayControls from './DisplayControls.jsx'
const items = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Playground', href: '#live-lab' },
  { label: 'Sobre mim', href: '#experiencia' },
  { label: 'Formação', href: '#formacao' },
]
export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const toggle = useRef(null)
  const header = useRef(null)
  useEffect(() => {
    const close = () => setOpen(false)
    const escape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    const outside = (event) => {
      if (!header.current?.contains(event.target)) close()
    }
    window.addEventListener('resize', close)
    document.addEventListener('keydown', escape)
    document.addEventListener('pointerdown', outside)
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }),
      { rootMargin: '-15% 0px -65% 0px' },
    )
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section))
    return () => {
      window.removeEventListener('resize', close)
      document.removeEventListener('keydown', escape)
      document.removeEventListener('pointerdown', outside)
      observer.disconnect()
    }
  }, [])
  return (
    <header className="site-header" ref={header}>
      <div className="shell header__inner">
        <Brand />
        <DisplayControls />
        <button
          ref={toggle}
          type="button"
          className="menu-button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-controls="main-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? 'Fechar −' : 'Menu +'}
        </button>
        <nav
          id="main-navigation"
          className={`header__nav ${open ? 'is-open' : ''}`}
          aria-label="Navegação principal"
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="header__cta" href="#contato" onClick={() => setOpen(false)}>
            Vamos conversar <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
