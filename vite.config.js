import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // اضافه شد

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      react(),
      tailwindcss(), // اضافه شد
    ],
    // در لوکال هاست (dev) مسیر "/" است و موقع بیلد برای پروداکشن "/Cart1/"
    base: command === 'serve' ? '/' : '/Cart1/',
  }
})
