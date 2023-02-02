/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1976d2", // azul
      },
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        worksans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
