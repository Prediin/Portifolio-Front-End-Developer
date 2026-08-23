import { useEffect, useState } from "react";

const fallback = [
  { name: "discEfraimPaiva", html_url: "https://github.com/Prediin/discEfraimPaiva", language: "CSS", description: "Conheça a arte de Efraim Paiva" },
  { name: "DaxOS", html_url: "https://github.com/Prediin/DaxOS", language: "CSS", description: "Meu OS para testes" },
  { name: "EBAC-M16-NPM_e_Yarn", html_url: "https://github.com/Prediin/EBAC-M16-NPM_e_Yarn", language: "CSS", description: "Práticas de NPM e Yarn" },
];

export function useGithubRepos() {
  const [repos, setRepos] = useState(fallback);
  const [status, setStatus] = useState("fallback");

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/Prediin/repos?sort=updated&per_page=8",
          { signal: controller.signal, headers: { Accept: "application/vnd.github+json" } },
        );

        if (!response.ok) throw new Error(`GitHub respondeu ${response.status}`);

        const data = await response.json();
        const filtered = data.filter((repo) => !repo.fork).slice(0, 6);
        if (filtered.length) {
          setRepos(filtered);
          setStatus("live");
        }
      } catch (error) {
        if (error.name !== "AbortError") setStatus("fallback");
      }
    }

    loadRepos();
    return () => controller.abort();
  }, []);

  return { repos, status };
}
