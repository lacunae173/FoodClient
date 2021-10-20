module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '24': '6rem',
        '16': '4rem',
      },
      height: {
        '70p': '70vh',
        '75p': '75vh',
        '80p': '80vh',
      },
      width: {
        '80p': '80vw',
        '90p': '90vw',
        '100p': '100vw',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
