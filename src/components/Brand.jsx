export default function Brand({ compact = false }) {
  return (
    <a className="brand" href="#top" aria-label="Pedro Luis — início">
      <span className="brand__mark">
        <img src={`${import.meta.env.BASE_URL}brand-logo.png`} alt="" width="48" height="48" />
      </span>
      {!compact && (
        <span className="brand__copy">
          pedro luis<span>FRONT-END DEVELOPER</span>
        </span>
      )}
    </a>
  )
}
