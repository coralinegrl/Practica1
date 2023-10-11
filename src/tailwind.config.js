/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/practica1.html.{html,js}"],
    theme: {
      extend: {
        colors: {
          primary: '#3498db',
          secondary: '#2ecc71',
        },
        fontFamily: {
          body: ['Arial', 'sans-serif'],
        },
        spacing: {
          '72': '18rem',
          '84': '21rem',
          '96': '24rem',
        },
      },
    },
    variants: {},
    plugins: [],  }

