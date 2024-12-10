/// <reference types="vitest" />

import { createHtmlPlugin } from 'vite-plugin-html';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';
import tsconfigPaths from 'vite-tsconfig-paths';

// ==============
// Export config.
// ==============

export default defineConfig({
  /*
    This is necessary because the app is served from a
    directory that is nested deeply on the CDN. Making
    the path relative ensures that static assets work.
  */
  base: './',
  build: {
    /*
        This prevents base64 encoding of assets.

        `assetsInlineLimit: 0`

        We don't want PNG and MP3 files in JS, so
        instead we will just let them be moved to
        the "static" folder by the build process.
    */
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: 'static/[name].[hash][extname]',
        chunkFileNames: 'static/[name].[hash].js',
        entryFileNames: 'static/[name].[hash].js',

        // Split JS chunks.
        manualChunks: (filePath: string): string | void => {
          // Split "markdown-it".
          if (filePath.includes('node_modules/markdown-it')) {
            return 'markdown';
          }

          // Split "solid-js".
          if (filePath.includes('node_modules/solid-js')) {
            return 'solid';
          }

          /*
            All other third-party dependencies from Node modules are
            bundled into this chunk. This includes anything that is
            not app code, because that is beyond our direct control.
          */
          if (filePath.includes('node_modules')) {
            return 'vendor';
          }

          // Split "common".
          if (filePath.includes('src/common')) {
            return 'common';
          }

          // Split "data".
          if (filePath.includes('src/data')) {
            return 'data';
          }

          // Split "sharedConstants".
          if (filePath.includes('src/sharedConstants')) {
            return 'constants';
          }

          // Split "state".
          if (filePath.includes('src/state')) {
            return 'state';
          }

          // Split "utils".
          if (filePath.includes('src/utils')) {
            return 'utils';
          }
        },
      },
    },
    /*
      Setting "esnext" assumes native dynamic imports
      support and will transpile as little as possible.
    */
    target: 'esnext',
  },
  plugins: [
    createHtmlPlugin({
      /*
        This is run at build time, and makes the
        content of any `*.html` file as tiny as
        possible. Currently, this only affects
        the compiled build "index.html" files.
     */
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: false,
        minifyCSS: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    solid(),
    solidSvg(),
    tsconfigPaths({
      root: './',
    }),
  ],
  preview: {
    port: 4173,
  },
  server: {
    port: 5173,
    strictPort: true,
  },
  test: {
    coverage: {
      exclude: [
        // Ignore these.
        'src/**/*.d.ts',
        'src/**/*.test.{ts,tsx}',
      ],
      include: [
        // Track these.
        'src/**/*.{ts,tsx}',
      ],
      reporter: ['html'],
    },
    css: false,
    environment: 'jsdom',
    /*
        Adds test globals:

        - describe
        - expect
        - test
        - vi
        - etc.
    */
    globals: true,
    /*
        Run Vitest only on tests within the "src" directory.

        This does not include end-to-end test files.
    */
    include: ['src/**/*.test.{ts,tsx}'],
    reporters: ['default'],
    setupFiles: ['./scripts/test-setup.ts'],
    testTransformMode: {
      web: ['.jsx', '.tsx'],
    },
  },
});
