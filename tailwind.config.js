/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        bruno: ["'Bruno Ace SC'", "cursive"],
        zain :["'Zain'", "cursive"],
      },
      colors : {
        neon :{
          DEFAULT: "#03fe4e",

        },
       
      }
    },
  },
  plugins: [],
}

