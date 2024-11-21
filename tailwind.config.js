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
        customizedDark: '0 0 8px #333',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

