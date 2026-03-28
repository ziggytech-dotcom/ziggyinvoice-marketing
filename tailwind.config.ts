import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0f0a0a",
        surface: "#18181b",
        border: "#27272a",
        teal: {
          DEFAULT: "#14b8a6",
          dark: "#0d9488",
          light: "#2dd4bf",
        },
        ziggy: "#ff1744",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
