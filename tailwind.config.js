/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'night-city': "url('/images/night-city.png')",
        
      }
    },
  },
  plugins: [],
}

