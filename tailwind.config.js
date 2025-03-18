/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        smallPhones: '360px',
        bigScreens: '2100px',
      },
      fontFamily: {
        Inter: ['Inter'],
      }
    },
  },
  plugins: [],
}