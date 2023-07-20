/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./docs/**/*.{html,js}"],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
     },

     colors: {
      'base-red': '#E71D36',
      'red-highlight':'#E71D36',
      'default-background': '#011627',
      'end-gradient': '#37182B',
      'teal-accent': '#00FFE7',
      'yellow': '#FFBF1C',
      'white': '#FFFFFF',
      'deep-purple': '#3F182B',
      'carbon-grey': '#1E1E1E',
      'black': '#000000',
      'deep-grey': '#2F2F2F',
      'foot-2': '#230E18'
    },

    fontFamily: {
      'Montserrat': ['Montserrat'],
      'Courier': ['Courier New'],
      'Roboto': ['Roboto', 'sans-serif']
    },

    extend: {
      height: {
        '120': '30rem',
        '50': '50vh'
      },
      spacing: {
        '101': '101%'
      },
      keyframes: {
        spin1: {
          '0%' : {transform : 'rotate(360deg)'},
          '80%, 100%': {transform: 'rotate(0deg)'}
        }
      },
      animation: {
        spin_2: '1.5s spin1 1s ease-in-out 2'
      }
    },
  },
  plugins: [require("daisyui")],
 }
 


