import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        // Italian flag theme: green, white, red
        italia: {
          50: "#e6f5ee",
          100: "#ccebdd",
          200: "#99d7bb",
          300: "#66c399",
          400: "#33af77",
          500: "#009246", // Italian green (flag)
          600: "#007538",
          700: "#00582a",
          800: "#003a1c",
          900: "#001d0e",
        },
        italiaRed: {
          50: "#fdeaea",
          100: "#fad5d5",
          200: "#f5abab",
          300: "#f08181",
          400: "#eb5757",
          500: "#CE2B37", // Italian red (flag)
          600: "#a5222c",
          700: "#7c1a21",
          800: "#531116",
          900: "#2a090b",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
