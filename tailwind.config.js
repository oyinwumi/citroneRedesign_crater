/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        61: '244px',
        120: '480px',
        148: '592px',
        200: '800px',
      },
    },
    fontFamily: {
      font: ['Nunito', 'sans-serif'],
      open: ['"Open Sans"', 'sans-serif'],
    },
    colors: {
      black: '#313131',
      blue: '#3B5998',
      darkgrey: '#333333',
      purple: '#492B7C',
      pink: '#E8D7F8',
      light: '#F9F4FD',
      white: '#FFFFFF',
      red: '#FF4D4F',
      green: '#52C41A',
      grey: '#969599',
      gray: 'rgba(150, 149, 153, 0.5)',
      darkgray: '#847979',
      lightergrey: '#C1C1C1',
      lightgrey: '#D3D0D9',
      lightpink: '#F5F5F5',
      deepgreen: '#008000'
    },
  },
  plugins: [],
};
