import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import LiveLab from './components/LiveLab.jsx'
import Services from './components/Services.jsx'
import Learning from './components/Learning.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import MotionEffects from './components/MotionEffects.jsx'
import Exploration from './components/Exploration.jsx'

export default function App() {
  const [activeProject, setActiveProject] = useState('disc-efraim-paiva')
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <MotionEffects />
      <main id="conteudo" tabIndex="-1">
        <Hero />
        <Projects onSelectProject={setActiveProject} />
        <LiveLab activeId={activeProject} onSelect={setActiveProject} />
        <Services />
        <Learning />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Exploration />
    </>
  )
}
