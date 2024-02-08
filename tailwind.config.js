/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "dark-blue": "#262E38",
        "light-grey": "#969FAD",
        "medium-grey": "#7C8798",
        "orange": "#FC7614",
        "pure-white": "#FFFFFF",
        "very-dark-blue": "#131518", 
        "g1a": "#232A34",
        "g1b": "#181E27"
      },
      fontFamily:{
        "sans":["Overpass"]
      }, 
      screens: {
        "xs": "350px"
      }
    },
  },
  plugins: [
    require("./tailwindcss-animated")
  ],
}

