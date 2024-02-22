/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}', './projects/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      animation: {
        blob1: "blob 4s infinite",
        blob2: "blob 6s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)"
          },
          "20%": {
            transform: "scale(1.1)"
          },
          "40%": {
            transform: "scale(1.3)"
          },
          "60%": {
            transform: "scale(1.1)"
          },
          "80%": {
            transform: "scale(0.8)"
          },
          "100%": {
            transform: "scale(1)"
          }
        }
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        custom: ['Montserrat']
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
