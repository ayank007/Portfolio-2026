import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    base: '/Portfolio-2026/',
    resolve: {
      alias: { "@": path.resolve(__dirname, "./src") },
    },
    build: {
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {

              if (id.includes('gsap') || id.includes('lenis')) {
                return 'animations';
              }
              if (id.includes('@fortawesome')) {
                return 'fontawesome';
              }
              return 'vendor';
            }
          },
        },
      },
    },
  }
})