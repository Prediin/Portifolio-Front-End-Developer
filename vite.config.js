import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Mantém os assets portáveis em projetos publicados em /nome-do-repositorio/ no GitHub Pages.
  base: './',
})
