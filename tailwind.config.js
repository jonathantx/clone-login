/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde': '#e6feed',
        'secondary': '#263238',
        'alternative': '#687c6e',
        'branco': '#fafffb'
      },
      fontFamily: {
        sans: ['Montserrat'],
        // poppins: ['Poppins'],
    },
    },
  },
  plugins: [],  
}

