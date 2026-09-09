import { useEffect } from 'react'

// Observers react to visibility, rather than running work on every scroll frame.
export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement
    const visibility = () => {
      root.dataset.pageHidden = String(document.hidden)
    }
    visibility()
    document.addEventListener('visibilitychange', visibility)
    const targets = [
      ...document.querySelectorAll('.section-heading, .motion-reveal, .hero__visual'),
    ]
    let observer
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            entry.target.classList.toggle('in-viewport', entry.isIntersecting)
            if (entry.isIntersecting) entry.target.classList.add('has-entered')
          }
        },
        { threshold: 0, rootMargin: '0px 0px -30px 0px' },
      )
      targets.forEach((target) => observer.observe(target))
    }
    return () => {
      observer?.disconnect()
      document.removeEventListener('visibilitychange', visibility)
      targets.forEach((target) => target.classList.remove('in-viewport', 'has-entered'))
      delete root.dataset.pageHidden
    }
  }, [])
  return null
}
