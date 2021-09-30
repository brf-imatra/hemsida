const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      pacifico: ['pacifico', 'sans-serif'],
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  // typography: (theme) => ({
  //   default: {
  //     css: {},
  //   },
  // }),
  variants: {},
  plugins: [
      require('@tailwindcss/typography'),
  ],
};
