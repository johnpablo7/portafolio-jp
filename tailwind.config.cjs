/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#374151",
      },
      fontFamily: {
        headerFont: ["Montserrat"],
        bodyFont: ["Hind", "sans-serif"],
      },
    },
  },
  plugins: [],
};
