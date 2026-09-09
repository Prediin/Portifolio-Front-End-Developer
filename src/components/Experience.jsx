import { useState } from 'react'
import { education, experiences, profile, stack } from '../data/portfolio.js'
const stories = [
  {
    label: 'Minha história',
    title: 'Tecnologia me trouxe até aqui. Pessoas dão sentido ao caminho.',
    paragraphs: [
      'Sou Pedro Luis, de Corrente, no Piauí. Minha formação é em Técnico em Informática, e hoje aprofundo meu caminho no Front-End com React e JavaScript.',
      'Minha experiência passa por manutenção de celulares, atendimento ao cliente, criação de sites e produção audiovisual. Esse encontro entre o técnico e o criativo aparece no jeito como construo interfaces.',
    ],
  },
  {
    label: 'Como trabalho',
    title: 'Primeiro, entender. Depois, transformar em interface.',
    paragraphs: [
      'O atendimento ao cliente me ensinou a ouvir, comunicar com clareza e procurar soluções para problemas reais. Levo essa experiência para cada projeto web.',
      'Busco equilibrar criatividade com organização, adaptação a diferentes telas e facilidade de uso. Continuo estudando e aplicando o que aprendo em projetos publicados.',
    ],
  },
  {
    label: 'Além do código',
    title: 'Meu olhar também passa pela imagem, pelo movimento e pela comunicação.',
    paragraphs: [
      'Edição de vídeo, produção audiovisual, design e motion design comercial fazem parte da minha experiência. São outras formas de contar uma história e dar clareza a uma ideia.',
      'Também organizei e ministrei um minicurso de segurança digital para pessoas e empresários da região. Compartilhar conhecimento faz parte da minha trajetória.',
    ],
  },
]
export default function Experience() {
  const [active, setActive] = useState(0)
  return (
    <section className="section experience" id="experiencia" aria-labelledby="about-title">
      <div className="shell">
        <div className="about-intro">
          <p className="eyebrow">
            <span>05 /</span> SOBRE MIM, DE VERDADE
          </p>
          <h2 id="about-title">
            Prazer, <em>Pedro.</em>
            <span className="about-wave" aria-hidden="true">
              ✌
            </span>
          </h2>
          <p>Por trás de cada interface, tem uma pessoa curiosa.</p>
        </div>
        <div className="about-human">
          <figure className="portrait-card">
            <div className="portrait-tape" aria-hidden="true" />
            <img
              src={`${import.meta.env.BASE_URL}pedro-luis-retrato.jpeg`}
              alt="Retrato de Pedro Luis Bezerra Lima"
              width="391"
              height="694"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <strong>Pedro Luis</strong>
              <span>Corrente, Piauí · Brasil</span>
            </figcaption>
            <span className="portrait-stamp" aria-hidden="true">
              CRIATIVIDADE
              <br />
              EM CONSTRUÇÃO ✳
            </span>
          </figure>
          <div className="about-story">
            <div className="about-story__switch" role="group" aria-label="Conheça mais sobre Pedro">
              {stories.map((story, i) => (
                <button
                  key={story.label}
                  type="button"
                  aria-pressed={active === i}
                  onClick={() => setActive(i)}
                >
                  {story.label}
                </button>
              ))}
            </div>
            <div className="about-story__text" key={active}>
              <h3>{stories[active].title}</h3>
              {stories[active].paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="about-facts">
              <div>
                <span>MINHA BASE</span>
                <strong>Técnico em Informática</strong>
              </div>
              <div>
                <span>MEU PRÓXIMO PASSO</span>
                <strong>Uma oportunidade Front-End</strong>
              </div>
            </div>
            <a className="text-link" href="#contato">
              Vamos nos conhecer melhor? ↗
            </a>
          </div>
        </div>
        <div className="about-traits">
          <span>O que trago para a mesa</span>
          <strong>
            Olhar criativo <i>✳</i>
          </strong>
          <strong>
            Escuta e comunicação <i>✳</i>
          </strong>
          <strong>
            Vontade de construir <i>✳</i>
          </strong>
        </div>
        <div className="experience__grid">
          <div className="experience__sticky">
            <p className="eyebrow">CADA ETAPA CONTA</p>
            <h3 className="trajectory-title">
              Um caminho feito
              <br />
              de aprendizado.
            </h3>
            <p>
              Da formação técnica ao contato com clientes, cada experiência contribui para o
              desenvolvedor que estou me tornando.
            </p>
            <div className="stack-cloud">
              {stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="experience__content">
            <div className="timeline-list">
              <h3>Experiência</h3>
              {experiences.map((item) => (
                <article className="timeline-item" key={item.company}>
                  <span>{item.period}</span>
                  <div>
                    <small>{item.company}</small>
                    <h4>{item.role}</h4>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="timeline-list">
              <h3>Formação</h3>
              {education.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <span>{item.period}</span>
                  <div>
                    <small>{item.institution}</small>
                    <h4>{item.title}</h4>
                  </div>
                </article>
              ))}
            </div>
            <a
              className="experience__linkedin"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <strong>Ver perfil profissional completo</strong>
              <i>↗</i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
