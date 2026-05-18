import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // GitHub Pages deploys to /<repo-name>/ — set base accordingly.
  // For custom domains, change this to '/'
  base: '/aetech-website/',
  build: {
    outDir: 'dist',
  },
})
