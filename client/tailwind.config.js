/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "480px" },
        sm: { min: "481px" },
        md: { min: "768px" },
        lg: { min: "992px" },
        xl: { min: "1200px" },
        "2xl": { min: "1440px" },
        "3xl": { min: "1920px" },
      },
      colors: {
        "main-bg": "#d3c6d3",
        "orange-color": "#ecc03c",
        "pink-color": "#d57c8c",
        "violet-color": "#650666",
      },
    },
  },
  plugins: [],
};
