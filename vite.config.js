import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // اضافه شد

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // اضافه شد
  ],
})
