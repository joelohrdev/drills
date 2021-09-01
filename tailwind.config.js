const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: colors.pink,
        orange: colors.orange,
        teal: colors.teal,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
