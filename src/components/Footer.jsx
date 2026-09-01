import Brand from './Brand.jsx'
import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <Brand compact />
        <p>© {new Date().getFullYear()} {profile.name}. Front-End Developer.</p>
        <a href="#top">Voltar ao topo ↑</a>
      </div>
    </footer>
  )
}
