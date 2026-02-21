import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'getting-started': resolve(__dirname, 'pages/getting-started.html'),
        tokens: resolve(__dirname, 'pages/tokens.html'),
        button: resolve(__dirname, 'pages/components/button.html'),
        input: resolve(__dirname, 'pages/components/input.html'),
        card: resolve(__dirname, 'pages/components/card.html'),
        alert: resolve(__dirname, 'pages/components/alert.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
