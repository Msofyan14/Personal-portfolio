/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter, sans-serif"],
      },
      colors: {
        subheading: "#717073",
        dark: "#252836",
      },
    },
  },
  plugins: [],
};
