import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/github-actions-cypress/",
  plugins: [react()],
  build:{
    outDir: "build",
  },
})
