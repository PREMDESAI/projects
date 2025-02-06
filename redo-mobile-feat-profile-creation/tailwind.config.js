/** @type {import('tailwindcss').Config} */
const colors = require("./constants/colors.ts")
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:colors
    },
  },
  plugins: [],
}

