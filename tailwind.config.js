const tailwindButtonPlugin = require('@qpokychuk/tailwind-button-plugin')
const { ui } = require('./src/features/ui/config.ts')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: ui.screens,
    container: ui.container,
    colors: ui.colors,
    extend: {
      btnSize: ui.btnSize,
      inputSize: ui.inputSize,

      spacing: {
        [15]: (15 * 4) / 16 + 'rem',
        [16]: (16 * 4) / 16 + 'rem',
        [18]: (18 * 4) / 16 + 'rem',
        [65]: (65 * 4) / 16 + 'rem',
      },

      fontSize: {
        '1.5xl': ['1.375rem', '1.35'],
        '2.1xl': ['1.5625rem', '1.35'],
        '2.5xl': ['1.75rem', '1.35'],
        '3.5xl': ['2rem', '1.35'],
        '4.5xl': ['2.5rem', '1.35'],
      },
    },
  },
  plugins: [
    tailwindButtonPlugin({
      withFocusStyles: false,
    }),
    require('./tailwind.input.js'),
  ],
}
