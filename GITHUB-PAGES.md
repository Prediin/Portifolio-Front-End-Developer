# Publicação no GitHub Pages

1. Envie todo o projeto para um repositório GitHub.
2. Abra **Settings > Pages**.
3. Em **Build and deployment > Source**, escolha **GitHub Actions**.
4. Faça push para `main` ou `master`.
5. Abra a aba **Actions** e aguarde `Deploy Front-End Portfolio to GitHub Pages` finalizar em verde.

O workflow instala dependências, executa `npm run build`, valida `dist/index.html` e publica somente a pasta `dist`.

## Teste antes de publicar

```bash
npm install
npm run dev
npm run build
npm run preview
```

Se `npm run build` retornar erro, corrija antes do push.
