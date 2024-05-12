/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#9A1750',
        'secondary': '#EE4C7C',
        'light': '#E3E2DF',
        'dark': '#5D001E',
      },
    },
  },
  plugins: [],
}

