const logo = `${import.meta.env.BASE_URL}brand-logo.png`

export default function Brand({ compact = false }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#top" aria-label="Pedro Luis — início">
      <span className="brand__mark" aria-hidden="true">
        <img src={logo} alt="" />
      </span>
      {!compact && (
        <span className="brand__copy">
          <strong>PEDRO LUIS</strong>
          <small>FRONT-END DEVELOPER</small>
        </span>
      )}
    </a>
  )
}
