const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'DM Sans': ['DM Sans', 'serif'],
        'sans': ['Inter var', ...defaultTheme.fontFamily.sans],
        'serif': [...defaultTheme.fontFamily.serif],
        'mono': [...defaultTheme.fontFamily.mono]
      },
    },
    fontSize: {
      'sz-10': '10px',
      'sz-12': '12px',
      'sz-14': '14px',
      'sz-16': '16px',
      'sz-20': '20px',
      'sz-24': '24px',
      'sz-32': '32px',
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    },
  },
  plugins: [],
}
