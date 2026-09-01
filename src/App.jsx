import MotionEffects from './components/MotionEffects.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import LiveLab from './components/LiveLab.jsx'
import Services from './components/Services.jsx'
import Learning from './components/Learning.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <MotionEffects />
      <Header />
      <main>
        <Hero />
        <Projects />
        <LiveLab />
        <Services />
        <Learning />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
