import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
 base: '/ConquerBlocks-Website/',
 resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  root: './',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});