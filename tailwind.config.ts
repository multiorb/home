import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f3ece2",
        secondary: "#b3b3b3",
        background: "#000000",
        accent: "#f73d0a",
        border: "#303136",
      },
    },
  },
  plugins: [],
} satisfies Config;
