/** @type {import('tailwindcss').Config} */
module.exports={
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['McLaren'],
        body2: ['Montserrat:italic']
      }

    },
  },
  plugins: [],
}