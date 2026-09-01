import { useEffect, useState } from 'react'
import Brand from './Brand.jsx'
import { navItems } from '../data/portfolio.js'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-header">
      <div className="shell header__inner">
        <Brand />

        <button
          type="button"
          className="menu-button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="header__cta" href="#contato" onClick={() => setOpen(false)}>
            Vamos construir?
          </a>
        </nav>
      </div>
    </header>
  )
}
