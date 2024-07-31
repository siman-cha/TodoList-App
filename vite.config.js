import { defineConfig } from 'vite';

export default defineConfig({
  base: "/TodoList-App/",
  server: {
    mimeTypes: {
      '.jsx': 'text/javascript',
    },
  },
});