import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Include uppercase image extensions and uncommon raw formats as assets
  assetsInclude: ['**/*.JPG', '**/*.CR2', '**/*.JPEG', '**/*.PNG'],
});
