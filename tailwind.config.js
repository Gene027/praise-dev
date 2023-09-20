const { fontFamily } = require('tailwindcss/defaultTheme')
const { colors } = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],  //light and dark mode to work
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1360px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        raleway: 'var(--font-raleway)',
      },
      colors: {
        ...colors,
        primary: "#DC4830",
        secondary: "#FAC025",
        tertiary: "#0a1f50cc",
        "white1": "#FFFDFD",
      },
      keyframes: {
        moveFocus: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
