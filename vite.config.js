import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? '/ConquerBlocks-Website/' : '/',
    build: {
      rollupOptions: {
        input: {
          main: 'index.html',
          nosotros: 'nosotros.html',
          opiniones: 'opiniones.html',
          fullstack: 'Fullstack.html',
          blockchain: 'blockchain.html',
          ia: 'IA.html',
          ciber: 'Ciberseguridad.html',
        }
      }
    }
  }
})