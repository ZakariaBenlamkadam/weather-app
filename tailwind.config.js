/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'mona': ['Mona Sans', 'sans-serif'], 
      },
      backgroundImage: {
        'hero-pattern': "url('/images/back.jpg')", 
      }
    },
  },
  plugins: [],
}