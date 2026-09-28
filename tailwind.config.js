/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mj: ['MjFarsi', 'sans-serif'],
        nastaliq: ['IranNastaliq', 'serif'],
        prasto: ['prasto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}