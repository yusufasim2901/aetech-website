import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // For custom domains (aetechsoftware.com), base must be '/'
  // Only use '/aetech-website/' if serving from github.io/aetech-website/
  base: '/',
  build: {
    outDir: 'dist',
  },
})
