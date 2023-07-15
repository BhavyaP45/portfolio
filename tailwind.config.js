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
      'deep-purple': '#3F182B'
    },

    fontFamily: {
      'Montserrat': ['Montserrat'],
      'Courier': ['Courier New']
    },

    extend: {
      width: {
        "128":"101vw"
      },
      height: {
        "50": "50vh"
      }

    },
  },
  plugins: [require("daisyui")],
 }
 


