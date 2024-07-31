import { defineConfig } from 'vite';

export default defineConfig({
  // ...
  server: {
    mimeTypes: {
      base: "/TodoList-App/",
      '.jsx': 'text/javascript',
    },
  },
});
