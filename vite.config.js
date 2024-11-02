import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/ativarchave/', // substitua "nome-do-repositorio" pelo nome do seu repositório
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['axios'],
    },
  },
});
