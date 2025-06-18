const { fontFamily } = require('tailwindcss/defaultTheme')
const { colors } = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],  //light and dark mode to work
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
        dmSerifDisplay: 'var(--font-dmSerifDisplay)',
      },
      colors: {
        ...colors,
        primary: "#DC4830",
        secondary: "#FAC025",
        tertiary: "#0a1f50cc",
        "white1": "#FFFDFD",
        text: "#180401",
        subText: "#505050",
        miniSubText: '#7D7D7D',
        normalHover: '#C6412B',
        bg: '#FFFDFD',
        light: "#F2F2F2"
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
      },
      keyframes: {
        moveFocus: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0.5 },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'flip-in': {
          '0%': { transform: 'rotateY(-90deg)', opacity: '0' },
          '100%': { transform: 'rotateY(0deg)', opacity: '1' },
        },
        'flip-out': {
          '0%': { transform: 'rotateY(0deg)', opacity: '1' },
          '100%': { transform: 'rotateY(90deg)', opacity: '0' },
        },
        'card-shuffle': {
          '0%': { transform: 'translateX(0) scale(1)' },
          '50%': { transform: 'translateX(20px) scale(1.05)' },
          '100%': { transform: 'translateX(0) scale(1)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 500ms ease-out forwards',
        fadeOut: 'fadeOut 500ms ease-out forwards',
        'scroll-left': 'scroll-left 30s linear infinite',
        'scroll-right': 'scroll-right 45s linear infinite',
        'flip-in': 'flip-in 0.6s ease-out',
        'flip-out': 'flip-out 0.3s ease-in',
        'card-shuffle': 'card-shuffle 0.8s ease-in-out',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
