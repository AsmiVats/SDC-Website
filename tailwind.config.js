/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens: {
    //   'abc': '1120px',
    // },
    extend: {
      backgroundImage: {
        'background-image-1': "url('/img/image 1.png')",
      },
      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        'poppins':['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}