import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: "#0b0c0f",
          panel: "#12141a",
          border: "#1e2230",
          muted: "#8b93a7",
          text: "#e8eaef",
          accent: "#e8a87c",
          accent2: "#c38d9e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
