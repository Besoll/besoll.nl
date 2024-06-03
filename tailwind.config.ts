import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    screens: {
      xxs: "240px",
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
      "2xl": "1440px",
      "3xl": "1700px",
      'smSP': {'min': '240px', 'max': '767px'},
      // => @media (min-width: 240px and max-width: 767px) { ... }

      'mdSP': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lgSP': {'min': '1024px', 'max': '12000px'},
      // => @media (min-width: 1024px and max-width: 1200px) { ... }
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#1C6570",
        black: {
          DEFAULT: "#000",
          100: "#0D1117",
          200: "#161B22",
          300: "#1F2428",
          400: "#242C38",
        },
        grey: {
          100: "#969BA5",
          200: "#55616D",
        },
        white: {
          DEFAULT: "#FFF",
          400: "#A3B3BC",
          500: "#A4B8D5",
          800: "#D0DFFF",
        },
        cean: "#2EC6FE",
        purple: "#8936FF",
        magenta: "#FF1DCE",
        purple_Light: "#8C7CFF",
        blue_Night: "#224C86",
        blue_Dark: "#013867",
        blue: "#3E64FF",
        blue_Light: "#03A9F3",
        green_Light: "#4fff4c",
        green_Dark: "#014800",
        red: "#ED1D24",
        orange: "#f8452d",
        orange_Light: "#FF691D",
        besoll_Dark_Grey: "#373d4c",
        besoll_Grey: "#C2C5CC",
        pink: "#ED5FBD",
        violet: "#F16565",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
