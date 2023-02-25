/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

// solve warning issue reference: https://github.com/tailwindlabs/tailwindcss/issues/4690
delete colors.lightBlue;
delete colors.warmGray;
delete colors.trueGray;
delete colors.coolGray;
delete colors.blueGray;

module.exports = {
  content: ["./index.html", "./src/**/*.{js,vue,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      // lg: "1120px",
      lg: "1440px",
      xl: "1920px",
    },
    container: {
      center: true,
      screens: {
        sm: "349px",
        // md: "768px",
        // lg: "900px",
        // lg: "1175px",
        // xl: "1175px",
      },
    },
    fontSize: {
      ...defaultTheme.fontSize,
      "3xl": "1.75rem",
      "4xl": "2rem",
      "5xl": "2.75rem",
    },
    colors: {
      ...colors,
      primary: "#007FAB",
      "primary-light": "#B0D2DE",
      "primary-dark": "#003A4F",
      secondary: "#FFC37D",
      "secondary-light": "#FFE2A9",
      "secondary-dark": "#A46039",
      highlight: "#FF5136",
      "highlight-light": "#CD331A",
      "highlight-dark": "#FFB5A4",
      "gray-80p": "#333333",
      "gray-60p": "#666666",
      "gray-40p": "#999999",
      "gray-20p": "#CCCCCC",
    },
    letterSpacing: {
      normal: "0",
      wide: ".02em",
      wider: ".05em",
    },
    extend: {
      cursor: {
        main: "url(./src/assets/images/cursor/cursor.png), auto",
      },
    },
  },
  plugins: [],
};
