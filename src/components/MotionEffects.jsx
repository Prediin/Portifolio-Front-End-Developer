import { useEffect } from 'react'

export default function MotionEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealElements = [...document.querySelectorAll('.motion-reveal')]

    if (reduceMotion) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    revealElements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 55}ms`)
    })

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.13, rootMargin: '0px 0px -7% 0px' })

    revealElements.forEach((element) => observer.observe(element))

    const progress = document.createElement('div')
    progress.className = 'scroll-progress'
    document.body.appendChild(progress)

    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const value = max > 0 ? window.scrollY / max : 0
      progress.style.transform = `scaleX(${Math.min(Math.max(value, 0), 1)})`
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const tiltItems = finePointer ? [...document.querySelectorAll('.tilt-card')] : []
    const cleanups = []

    tiltItems.forEach((item) => {
      const move = (event) => {
        const rect = item.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5
        item.style.setProperty('--tilt-x', `${(-y * 3.5).toFixed(2)}deg`)
        item.style.setProperty('--tilt-y', `${(x * 4.5).toFixed(2)}deg`)
        item.style.setProperty('--spot-x', `${((x + 0.5) * 100).toFixed(1)}%`)
        item.style.setProperty('--spot-y', `${((y + 0.5) * 100).toFixed(1)}%`)
      }
      const leave = () => {
        item.style.setProperty('--tilt-x', '0deg')
        item.style.setProperty('--tilt-y', '0deg')
      }
      item.addEventListener('pointermove', move)
      item.addEventListener('pointerleave', leave)
      cleanups.push(() => {
        item.removeEventListener('pointermove', move)
        item.removeEventListener('pointerleave', leave)
      })
    })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateProgress)
      progress.remove()
      cleanups.forEach((cleanup) => cleanup())
      revealElements.forEach((element) => {
        element.classList.remove('is-visible')
        element.style.removeProperty('--reveal-delay')
      })
    }
  }, [])

  return null
}
