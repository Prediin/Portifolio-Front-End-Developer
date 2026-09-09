import { useState } from 'react'

const colors = [
  { name: 'Menta', value: '#b6efb3' },
  { name: 'Lavanda', value: '#d4c4fb' },
  { name: 'Pêssego', value: '#ffc5a4' },
]

export default function CreativeStudio() {
  const [color, setColor] = useState(colors[0])
  const [radius, setRadius] = useState(18)
  const [mode, setMode] = useState('preview')
  const [burst, setBurst] = useState(0)
  return (
    <div className="hero__visual creative-studio" aria-label="Estúdio interativo de interfaces">
      <div className="studio-sticker" aria-hidden="true">
        feito de
        <br />
        <strong>curiosidade.</strong>
        <span>✳</span>
      </div>
      <div className="studio-note">
        pode mexer.
        <br />
        <span>é para isso mesmo ↙</span>
      </div>
      <div className="studio-window">
        <div className="studio-window__bar">
          <div className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span>ideias.em.construção</span>
          <span aria-hidden="true">↗</span>
        </div>
        <div className="studio-window__tabs" role="group" aria-label="Visualização do estúdio">
          <button
            type="button"
            aria-pressed={mode === 'preview'}
            onClick={() => setMode('preview')}
          >
            ✳ Interface
          </button>
          <button type="button" aria-pressed={mode === 'code'} onClick={() => setMode('code')}>
            {'</>'} Código
          </button>
          <span>AO VIVO</span>
        </div>
        <div
          className="studio-canvas"
          style={{ '--studio-accent': color.value, '--studio-radius': `${radius}px` }}
        >
          {mode === 'preview' ? (
            <div className="studio-sample">
              <div className="studio-sample__top">
                <span className="sample-symbol" aria-hidden="true">
                  ✳
                </span>
                <span>IDEIA Nº 001</span>
              </div>
              <h2>
                Uma boa ideia
                <br />
                merece <em>vida.</em>
              </h2>
              <p>Um pouco de cor. Algumas linhas de código. E a sua curiosidade.</p>
              <button type="button" onClick={() => setBurst((value) => value + 1)}>
                Testar interação <span aria-hidden="true">↗</span>
              </button>
            </div>
          ) : (
            <pre className="studio-code" aria-label="CSS da interface">
              <code>
                <span>/* Você está criando isso. */</span>
                {'\n.card {\n'}
                <b> background</b>
                {`: ${color.value};\n`}
                <b> border-radius</b>
                {`: ${radius}px;\n`}
                <b> color</b>
                {': #172018;\n}'}
                <span>{'\n\n/* Uma interface com a sua escolha. */'}</span>
              </code>
            </pre>
          )}
          {burst > 0 && (
            <div className="studio-burst" key={burst} aria-hidden="true">
              {Array.from({ length: 10 }, (_, i) => (
                <i
                  key={i}
                  style={{
                    '--dx': `${Math.cos((i * Math.PI) / 5) * 130}px`,
                    '--dy': `${Math.sin((i * Math.PI) / 5) * 130}px`,
                    '--rotate': `${i * 43}deg`,
                  }}
                >
                  ✦
                </i>
              ))}
            </div>
          )}
        </div>
        <div className="studio-tools">
          <div className="studio-swatches" role="group" aria-label="Cor da interface">
            {colors.map((item) => (
              <button
                type="button"
                key={item.name}
                aria-label={item.name}
                aria-pressed={color.name === item.name}
                style={{ '--swatch': item.value }}
                onClick={() => setColor(item)}
              >
                {color.name === item.name ? '✓' : ''}
              </button>
            ))}
          </div>
          <label className="studio-radius">
            <span>
              Cantos <output>{radius}px</output>
            </span>
            <input
              type="range"
              aria-label="Arredondamento dos cantos"
              min="0"
              max="36"
              value={radius}
              onChange={(event) => setRadius(Number(event.target.value))}
            />
          </label>
        </div>
      </div>
      <div className="studio-caption">
        <span aria-hidden="true">↳</span>
        <span role="status">
          {burst
            ? 'Sinal recebido. Conexão estabelecida!'
            : 'Experimente as cores e os cantos. A interface é sua.'}
        </span>
      </div>
      <a className="studio-person" href="#experiencia">
        <img
          src={`${import.meta.env.BASE_URL}pedro-luis-retrato.jpeg`}
          width="44"
          height="44"
          alt=""
        />
        <span>
          Tem uma pessoa
          <br />
          <strong>por trás dos pixels. ↗</strong>
        </span>
      </a>
    </div>
  )
}
