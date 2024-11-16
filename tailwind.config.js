/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth:{
        container: '1450px'
      },
      boxShadow:{
        customized: '0 0 5px #aaa',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

