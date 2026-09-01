import { useMemo, useState } from 'react'
import { profile } from '../data/portfolio.js'

const initialForm = {
  name: '',
  company: '',
  project: 'Site / Landing Page',
  budget: '',
  deadline: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)

  const message = useMemo(() => [
    `Olá, Pedro! Meu nome é ${form.name || '___'}.`,
    form.company ? `Empresa/projeto: ${form.company}` : '',
    `Tipo de projeto: ${form.project}`,
    `Orçamento/faixa: ${form.budget || 'a combinar'}`,
    `Prazo: ${form.deadline || 'a combinar'}`,
    '',
    'Sobre o projeto:',
    form.message || 'Quero conversar sobre um projeto Front-End.',
  ].filter(Boolean).join('\n'), [form])

  const whatsappHref = useMemo(
    () => `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(message)}`,
    [message],
  )

  const gmailHref = useMemo(() => {
    const subject = `Projeto Front-End — ${form.name || 'novo contato'}`
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
  }, [form.name, message])

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  return (
    <section className="contact" id="contato">
      <div className="shell contact__grid">
        <div className="contact__copy motion-reveal">
          <p className="eyebrow eyebrow--light"><span>07</span> contato</p>
          <h2>Tem uma ideia?<br />Eu posso transformar em interface.</h2>
          <p>Me conte o que você precisa, o prazo e o tipo de projeto. Os botões montam a mensagem com as informações do formulário sem enviar dados para servidor algum.</p>

          <div className="contact__links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>pedro-bezerra-775390263</strong><i>↗</i></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><strong>@Prediin</strong><i>↗</i></a>
            <a href={`mailto:${profile.email}`}><span>E-mail</span><strong>{profile.email}</strong><i>↗</i></a>
          </div>
        </div>

        <form className="contact-form motion-reveal" onSubmit={(event) => event.preventDefault()}>
          <div className="form-grid">
            <label><span>Seu nome</span><input name="name" value={form.name} onChange={updateField} placeholder="Como posso te chamar?" /></label>
            <label><span>Empresa / projeto</span><input name="company" value={form.company} onChange={updateField} placeholder="Opcional" /></label>
          </div>

          <div className="form-grid">
            <label>
              <span>Tipo de projeto</span>
              <select name="project" value={form.project} onChange={updateField}>
                <option>Site / Landing Page</option>
                <option>SPA em React</option>
                <option>Portfólio profissional</option>
                <option>Refatoração Front-End</option>
                <option>Outro projeto</option>
              </select>
            </label>
            <label><span>Orçamento</span><input name="budget" value={form.budget} onChange={updateField} placeholder="Ex.: R$ 800–1.200" /></label>
          </div>

          <label><span>Prazo</span><input name="deadline" value={form.deadline} onChange={updateField} placeholder="Ex.: preciso para o dia 20" /></label>
          <label><span>Sobre o projeto</span><textarea name="message" value={form.message} onChange={updateField} rows="5" placeholder="Objetivo, páginas, referências, funcionalidades..." /></label>

          <div className="contact-form__actions">
            <a className="button button--primary" href={whatsappHref} target="_blank" rel="noreferrer">Enviar no WhatsApp</a>
            <a className="button button--ghost-light" href={gmailHref} target="_blank" rel="noreferrer">Abrir Gmail ↗</a>
          </div>
          <small>Sem backend e sem coleta de dados: os links são montados localmente no navegador.</small>
        </form>
      </div>
    </section>
  )
}
