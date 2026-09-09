import { useEffect, useState } from 'react'

function save(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* The controls still work without persistence. */
  }
}

export default function DisplayControls() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')
  const [paused, setPaused] = useState(() => document.documentElement.dataset.motion === 'paused')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#f1f4e9' : '#111210')
  }, [theme])
  useEffect(() => {
    document.documentElement.dataset.motion = paused ? 'paused' : 'running'
  }, [paused])
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: light)')
    const update = () => {
      try {
        if (['dark', 'light'].includes(localStorage.getItem('pl-theme'))) return
      } catch {
        /* Use system preference. */
      }
      setTheme(media.matches ? 'light' : 'dark')
    }
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  return (
    <div className="display-controls" role="group" aria-label="Preferências de exibição">
      <button
        type="button"
        className="display-control"
        aria-label={`Ativar modo ${theme === 'dark' ? 'claro' : 'escuro'}`}
        title={`Ativar modo ${theme === 'dark' ? 'claro' : 'escuro'}`}
        onClick={() => {
          const next = theme === 'dark' ? 'light' : 'dark'
          setTheme(next)
          save('pl-theme', next)
        }}
      >
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          {theme === 'dark' ? (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
            </>
          ) : (
            <path d="M20 15.5A9 9 0 0 1 8.5 4 9 9 0 1 0 20 15.5Z" />
          )}
        </svg>
      </button>
      <button
        type="button"
        className="display-control motion-control"
        aria-label="Pausar animações"
        aria-pressed={paused}
        title={paused ? 'Retomar animações (respeita movimento reduzido)' : 'Pausar animações'}
        onClick={() => {
          setPaused(!paused)
          save('pl-motion', !paused ? 'paused' : 'running')
        }}
      >
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          {paused ? <path d="m8 5 11 7-11 7Z" /> : <path d="M8 5v14M16 5v14" />}
        </svg>
      </button>
    </div>
  )
}
