/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      font: [ 'Nunito', 'sans-serif']
    },
    colors: {
     'black' :'#313131',
     'purple': '#492B7C',
     'light': '#F9F4FD',
     'white': '#FFFFFF',
     'red': '#FF4D4F',
     'green': '#52C41A',
    },
  },
  plugins: [],
}
