import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#84b0ff",
        "dark-gray": "#2d2d2d",
        "light-gray": "#f2f2f2",
        // Interpreting white as pure white for valid CSS
        white: "#ffffff"
      },
      borderRadius: {
        "soft-xl": "24px"
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;


