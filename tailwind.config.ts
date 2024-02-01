import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroPop: "url('/images/hero-grid.svg')",
        dots: "url('/dots.png')",
        dot: "url('/dot.png')",
        square: "url('/images/hero-grid.svg')",
      },
      colors: {
        main: "#ff7900",
        secondary: "#e6e6e6",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
