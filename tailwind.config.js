module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '0px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        primary: {
          base: 'hsl(203,89%,53%)',
          dark: 'hsl(203,89%,46%)',
          light: 'hsl(203,89%,96%)'
        },
        gray: {
          dark: '#657786',
          light: '#AAB8C2',
          extraLight: '#E1E8ED',
          lightest: 'F5F8FA',
        },
        black: '#14171A'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
