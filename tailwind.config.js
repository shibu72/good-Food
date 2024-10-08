/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_green: '#6EA963',
        bg_orange: '#FDB64E',
      },
      backgroundImage: {
        'header-bg': "url('/headerBg.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}