/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'grey900': '#161616',
        'gray700': '#454545',
        'gray500': '#626262',
        'gray300': '#C0C0C0',
        'white': '#ffffff',
        'primaryColor': '#444CE7',
        'secondaryColor': '#CF5085',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-seri'],
      },
      fontSize: {
        'title': '2.5rem'
      }
    },
  },
  plugins: [],
}

