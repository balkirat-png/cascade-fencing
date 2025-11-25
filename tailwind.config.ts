import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#35513B",
          light: "#4a6b50",
          dark: "#2a4030",
        },
        accent: {
          DEFAULT: "#A18956",
          light: "#b59d6d",
          dark: "#8a7347",
        },
      },
      fontFamily: {
        serif: ["var(--font-young-serif)"],
        sans: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;
