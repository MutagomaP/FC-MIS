/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:'Montserrat',
      },
      
      colors: { 
        primary: '#2057a5',
        secondary : '#FFFFFFB3',
        borders: '#FFFFFF80',
        button: '#3667AE',
    },
  },
  plugins: [],
}
}
