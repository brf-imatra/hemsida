module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      pacifico: ['pacifico', 'sans-serif'],
      //'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      colors: {
        'accent-1': '#333',
      },
    },
  },
  typography: (theme) => ({
    default: {
      css: {},
    },
  }),
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
