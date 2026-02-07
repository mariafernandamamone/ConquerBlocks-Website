import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
 base: '/modern-art-gallery/',
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
        location: './Location.html', 
      },
    },
  },
});