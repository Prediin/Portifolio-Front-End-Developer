import { useState } from 'react'
import { profile } from '../data/portfolio.js'
export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    type: 'Oportunidade de trabalho',
    message: '',
  })
  const [copied, setCopied] = useState('')
  const [channel, setChannel] = useState('whatsapp')
  const message = `Olá, Pedro! Meu nome é ${form.name}.\n${form.company ? `Empresa: ${form.company}\n` : ''}Assunto: ${form.type}\n\n${form.message}`
  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }
  function submit(event) {
    event.preventDefault()
    const href =
      channel === 'whatsapp'
        ? `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(message)}`
        : `mailto:${profile.email}?subject=${encodeURIComponent(form.type)}&body=${encodeURIComponent(message)}`
    if (channel === 'whatsapp') window.open(href, '_blank', 'noopener,noreferrer')
    else window.location.href = href
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied('E-mail copiado!')
    } catch {
      setCopied('Não foi possível copiar. Use o link de e-mail abaixo.')
    }
  }
  return (
    <section className="contact section" id="contato">
      <div className="shell">
        <div className="contact-banner">
          <span className="eyebrow">
            <i className="status-dot" /> ABERTO A NOVAS CONEXÕES
          </span>
          <span aria-hidden="true">↙</span>
        </div>
        <div className="contact__grid">
          <div className="contact__copy">
            <h2>
              Seu próximo
              <br />
              projeto pode
              <br />
              começar com
              <br />
              <em>um olá.</em>
            </h2>
            <p>
              Uma vaga no time, uma ideia no papel ou um projeto precisando de cuidado. Vamos
              conversar?
            </p>
            <div className="contact__links">
              <a href={`mailto:${profile.email}`}>
                {profile.email} <span>↗</span>
              </a>
              <button onClick={copy}>
                Copiar e-mail <span>⧉</span>
              </button>
              <span role="status">{copied}</span>
            </div>
            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={`https://wa.me/${profile.whatsappNumber}`} target="_blank" rel="noreferrer">
                WhatsApp ↗
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <h3>Vamos construir algo juntos.</h3>
            <p>Me conte um pouco sobre o que você tem em mente.</p>
            <div className="form-grid">
              <label>
                <span>Seu nome *</span>
                <input
                  required
                  autoComplete="name"
                  maxLength="100"
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Como posso te chamar?"
                />
              </label>
              <label>
                <span>Empresa</span>
                <input
                  autoComplete="organization"
                  maxLength="120"
                  name="company"
                  value={form.company}
                  onChange={update}
                  placeholder="Opcional"
                />
              </label>
            </div>
            <label>
              <span>Sobre o que vamos conversar?</span>
              <select name="type" value={form.type} onChange={update}>
                <option>Oportunidade de trabalho</option>
                <option>Projeto freelance</option>
                <option>Parceria</option>
                <option>Outro assunto</option>
              </select>
            </label>
            <label>
              <span>Sua mensagem *</span>
              <textarea
                required
                maxLength="3000"
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
                placeholder="Sobre a oportunidade, a ideia ou o desafio..."
              />
            </label>
            <fieldset className="channel-select">
              <legend>Continuar por</legend>
              <label>
                <input
                  type="radio"
                  name="channel"
                  value="whatsapp"
                  checked={channel === 'whatsapp'}
                  onChange={() => setChannel('whatsapp')}
                />{' '}
                WhatsApp
              </label>
              <label>
                <input
                  type="radio"
                  name="channel"
                  value="email"
                  checked={channel === 'email'}
                  onChange={() => setChannel('email')}
                />{' '}
                E-mail
              </label>
            </fieldset>
            <button className="button button--primary" type="submit">
              Preparar mensagem <span>↗</span>
            </button>
            <small>
              Você revisa e envia a mensagem no{' '}
              {channel === 'whatsapp' ? 'WhatsApp' : 'seu aplicativo de e-mail'}. Nada é enviado
              automaticamente.
            </small>
          </form>
        </div>
      </div>
    </section>
  )
}
