import { defineConfig } from 'vite';

export default defineConfig({
  // ...
  server: {
    mimeTypes: {
      '.jsx': 'text/javascript',
    },
  },
});
