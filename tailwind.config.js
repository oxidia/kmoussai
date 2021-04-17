module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {

    container: {
      padding: {
        md:'0',
        lg: '8rem',
        xl: '12rem',
        '2xl': '20rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
