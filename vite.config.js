import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/",                // REQUIRED for Vercel SPA routing
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
     
    }),
  ],
  build: {
    outDir: "dist"
  }
})
