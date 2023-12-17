import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        cormorant: ["var(--font-cormorant)"],
        allura: ["var(--font-allura)"],
      },

      colors: {
        palette: {
          light: "#B3B3B3",
          cream: "#F4EDE6",
          dark: "#070F12",
          current: "currentColor",
          gold: "#C19A5D",
          black: "#080D10",
          white: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
export default config;
