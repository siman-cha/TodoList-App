import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'src/app.jsx',
      output: {
        entryFileNames: 'main.js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  // Add this configuration to generate a static website
  plugins: [
    {
      name: 'static-website',
      generateBundle(options, bundle) {
        const html = `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>iTask - Manage your todos at one place</title>
            </head>
            <body>
              <div id="root"></div>
              <script src="main.js"></script>
            </body>
          </html>
        `;
        this.emitFile({
          type: 'asset',
          fileName: 'index.html',
          source: html,
        });
      },
    },
  ],
});