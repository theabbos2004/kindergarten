/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('../assets/bgMain.png')",
        'header': "url('../assets/header.png')",
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
      },
    }
  },
  plugins: [],
}