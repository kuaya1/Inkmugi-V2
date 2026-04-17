import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Use esbuild for minification (faster and built-in)
    minify: 'esbuild',
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Framer motion separate chunk (large library)
          'motion': ['framer-motion'],
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
});
