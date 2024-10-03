import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // No externalization; all dependencies will be bundled
    },
  },
  base: './',  // Ensures correct path resolution for deployment
});
