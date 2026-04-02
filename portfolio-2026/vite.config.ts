import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tailwindcss()],
    base: env.VITE_BASE_PATH || '/', // Use the env variable here
    resolve: {
      alias: { "@": path.resolve(__dirname, "./src") },
    },
  }
})