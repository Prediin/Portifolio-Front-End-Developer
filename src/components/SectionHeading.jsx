export function SectionHeading({ eyebrow, title, text }) {
  return (
    <header className="section-heading" data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </header>
  );
}
