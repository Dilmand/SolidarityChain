/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green-light': '#AFC8AD',
        'custom-green-dark':'#163020'
      }
    },
  },
  plugins: [],
}

