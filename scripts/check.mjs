import fs from "node:fs";
import path from "node:path";

const required = [
  "index.html",
  "src/main.jsx",
  "src/App.jsx",
  "src/styles.css",
  "src/data/portfolio.js",
  "public/profile-placeholder.svg",
];

const missing = required.filter((file) => !fs.existsSync(path.resolve(file)));

if (missing.length) {
  console.error("Arquivos obrigatórios ausentes:\n" + missing.join("\n"));
  process.exit(1);
}

const html = fs.readFileSync("index.html", "utf8");
if (!html.includes('id="root"')) {
  console.error('index.html precisa conter <div id="root"></div>.');
  process.exit(1);
}

console.log("Estrutura essencial do projeto: OK");
