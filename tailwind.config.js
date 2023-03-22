const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
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
