/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "639px" },
        md: {  max: "866px" }, // Adjusted min and max values for md
        lg: { min: "867px", max: "1050px" }, // Adjusted min and max values for lg
        xl: { min: "1051px", max: "1279px" }, // Adjusted min and max values for xl
        "2xl": { min: "1280px", max: "1335px" }, // Adjusted min and max values for 2xl
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
