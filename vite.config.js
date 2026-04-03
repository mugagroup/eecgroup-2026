import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        news: resolve(__dirname, 'news.html'),
        cars: resolve(__dirname, 'brands/cars/index.html'),
        cosmetics: resolve(__dirname, 'brands/cosmetics/index.html'),
        furniture: resolve(__dirname, 'brands/furniture/index.html'),
        oclock: resolve(__dirname, 'brands/oclock/index.html'),
        prive: resolve(__dirname, 'brands/prive/index.html'),
        safety: resolve(__dirname, 'brands/safety/index.html'),
        tech: resolve(__dirname, 'brands/tech/index.html')
      }
    }
  }
});
