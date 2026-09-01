import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Erro ao renderizar o portfólio:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          padding: '24px',
          background: '#05080c',
          color: '#E9F1F7',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}>
          <section style={{ maxWidth: '620px' }}>
            <small style={{ color: '#E84855', fontWeight: 900, letterSpacing: '.12em' }}>ERRO DE INTERFACE</small>
            <h1 style={{ margin: '12px 0', fontSize: 'clamp(34px, 6vw, 64px)' }}>O portfólio não conseguiu carregar.</h1>
            <p style={{ color: '#9fb2bc', lineHeight: 1.7 }}>
              Recarregue a página. Se o problema continuar, abra o console do navegador para ver o erro técnico.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                marginTop: '16px',
                minHeight: '46px',
                padding: '0 18px',
                border: 0,
                borderRadius: '999px',
                background: '#ECA400',
                color: '#101416',
                fontWeight: 900,
                cursor: 'pointer',
              }}
            >
              Recarregar página
            </button>
          </section>
        </main>
      )
    }

    return this.props.children
  }
}
