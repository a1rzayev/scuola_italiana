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
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        italia: {
          50: "#e6f5ee",
          100: "#ccebdd",
          200: "#99d7bb",
          300: "#66c399",
          400: "#33af77",
          500: "#009246",
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
          500: "#CE2B37",
          600: "#a5222c",
          700: "#7c1a21",
          800: "#531116",
          900: "#2a090b",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out both",
        "fade-in-up": "fadeInUp 0.6s ease-out both",
        "slide-down": "slideDown 0.2s ease-out both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "pulse-ring": "pulseRing 1.5s cubic-bezier(0.34,1.56,0.64,1) infinite",
        "reveal-up": "revealUp 0.7s cubic-bezier(0.25,0.46,0.45,0.94) both",
        "scale-in": "scaleIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        revealUp: {
          "0%": { clipPath: "inset(100% 0 0 0)" },
          "100%": { clipPath: "inset(0% 0 0 0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 16px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.05)",
        nav: "0 4px 24px rgba(0,0,0,0.08), 0 1px 0 rgba(0,0,0,0.04)",
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
