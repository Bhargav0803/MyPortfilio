/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#276880',
        'secondary': '',
        'light': 'F5F5F1',
        'dark': '#221F1F',
      },
      fontFamily: {
        body: ['Anton']
      }
    },
  },
  plugins: [],
}

