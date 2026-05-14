import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace '/songs/' with your GitHub repo name if different
export default defineConfig({
  plugins: [react()],
  base: '/songs/',
})
