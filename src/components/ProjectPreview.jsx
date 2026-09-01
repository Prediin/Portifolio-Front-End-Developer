export default function ProjectPreview({ variant }) {
  if (variant === 'discography') {
    return (
      <div className="preview-art preview-art--discography" aria-hidden="true">
        <div className="disc-vinyl"><i /></div>
        <div className="disc-copy"><small>ART CLUB / 2026</small><strong>Discografia<br />em movimento.</strong><span /></div>
      </div>
    )
  }

  if (variant === 'editor') {
    return (
      <div className="preview-art preview-art--editor" aria-hidden="true">
        <div className="editor-screen"><strong>CUT</strong><span>STORY</span></div>
        <div className="editor-timeline"><i /><i /><i /><i /></div>
      </div>
    )
  }

  return (
    <div className="preview-art preview-art--game" aria-hidden="true">
      <div className="game-orbit"><i>?</i><span /></div>
      <div className="game-console"><small>TENTATIVA 07</small><strong>42</strong><span>muito quente</span></div>
    </div>
  )
}
