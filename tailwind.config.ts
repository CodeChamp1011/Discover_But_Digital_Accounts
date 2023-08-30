import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        inherit: "inherit",
      },
      borderStyle: {
        dotted: "dotted",
        outset: "outset",
        dashed: "dashed",
      },
    },
    colors: {
      "black-gray": "#2B2B2B",
      white: "#FFF",
      purple: "#A259FF",
    },
    spacing: {
      0: "0",
      5: "5px",
      10: "10px",
      15: "15px",
      20: "20px",
      25: "25px",
      30: "30px",
      35: "35px",
      40: "40px",
      45: "45px",
      50: "50px",
      55: "55px",
      60: "60px",
      65: "65px",
      70: "70px",
      75: "75px",
      80: "80px",
      85: "85px",
      90: "90px",
      95: "95px",
      100: "100px",
    },
    screens: {
      xs: { max: "640px" },
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
    },
  },
  plugins: [],
});
export default config;
