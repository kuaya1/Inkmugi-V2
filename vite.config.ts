import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  /*
   * Resolved once, at build time, and therefore identical in the prerendered
   * HTML and in the hydrating client. Computing it with new Date() during
   * render instead makes the server and client disagree whenever a build
   * outlives the value — the bug the homepage availability line had.
   */
  define: {
    __BUILD_YEAR__: JSON.stringify(String(new Date().getFullYear())),
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  /*
   * The SSR bundle is used only by scripts/prerender.mjs at build time, never
   * at request time. Everything is bundled (`noExternal`) into a single file
   * (`inlineDynamicImports`) so prerendering does not depend on Node resolving
   * each dependency's CJS/ESM conditions correctly — the one job this bundle
   * has is to render deterministically.
   */
  ssr: {
    noExternal: true,
  },
  build: isSsrBuild
    ? {
        ssr: 'src/entry-server.tsx',
        outDir: 'dist-ssr',
        // Readable output makes prerender failures debuggable.
        minify: false,
        sourcemap: false,
        target: 'node20',
        rollupOptions: {
          output: {
            inlineDynamicImports: true,
          },
        },
      }
    : {
        // Use esbuild for minification (faster and built-in)
        minify: 'esbuild',
        // Code splitting for better caching
        rollupOptions: {
          output: {
            manualChunks: {
              // Vendor chunk for React
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              // Framer motion separate chunk (large library)
              motion: ['framer-motion'],
              // UI utilities
              'ui-utils': ['lucide-react'],
            },
          },
        },
        // Chunk size warnings
        chunkSizeWarningLimit: 500,
        // Disable source maps for smaller production bundle
        sourcemap: false,
        // Target modern browsers for smaller bundle
        target: 'es2020',
      },
}));
