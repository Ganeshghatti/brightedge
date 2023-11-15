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
        md: { max: "867px" },
        lg: { max: "1024px" },
        xl: { max: "1279px" },
        "2xl": { max: "1535px" },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
