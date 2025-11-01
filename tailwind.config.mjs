import { type Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#13ec6a",
        "background-light": "#f6f8f7",
        "background-dark": "#102217",
        "green-primary": "#4CAF50",
        "off-white": "#F7F7F7",
        charcoal: "#333333",
        "beige-neutral": "#EFEBE9",
      },
      fontFamily: {
        display: ["Work Sans", "Noto Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [forms({ strategy: "class" })],
} satisfies Config;
