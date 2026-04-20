/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#030e2a',
        accent: '#ff71f9',
        darker: '#02091d',
        light: '#f8f9fa',
        grayish: '#8c9bb4'
      },
    },
  },
  plugins: [],
}
