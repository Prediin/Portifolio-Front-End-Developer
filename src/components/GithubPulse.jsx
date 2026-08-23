import { useGithubRepos } from "../hooks/useGithubRepos";
import { ArrowUpRightIcon, GithubIcon } from "./Icon";

export function GithubPulse() {
  const { repos, status } = useGithubRepos();

  return (
    <div className="github-pulse" data-reveal>
      <div className="github-pulse__head">
        <div>
          <span className="eyebrow">GitHub / atividade</span>
          <h3>Construindo em público.</h3>
        </div>
        <a href="https://github.com/Prediin" target="_blank" rel="noreferrer" className="icon-link" aria-label="Abrir GitHub de Pedro">
          <GithubIcon />
        </a>
      </div>
      <div className="github-pulse__status">
        <span className={`status-dot status-dot--${status}`} />
        {status === "live" ? "Repositórios carregados pela API do GitHub" : "Mostrando seleção local; GitHub pode estar indisponível"}
      </div>
      <div className="repo-grid">
        {repos.map((repo) => (
          <a key={repo.id ?? repo.name} href={repo.html_url} target="_blank" rel="noreferrer" className="repo-card">
            <div className="repo-card__top">
              <strong>{repo.name}</strong>
              <ArrowUpRightIcon />
            </div>
            <p>{repo.description || "Projeto e experimento em evolução."}</p>
            <span>{repo.language || "Web"}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
