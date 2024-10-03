import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures correct path resolution for deployment
  build: {
    rollupOptions: {
      // Externalization removed; include all dependencies in the bundle
    },
  },
});
