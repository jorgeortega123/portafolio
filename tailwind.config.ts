import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

// Color primario del portafolio: navy #17175a (rampa derivada H240).
// Se registra a través del plugin de HeroUI porque este replaces la clave
// `primary` de theme.extend.colors — así las utilidades (bg-primary-600, …)
// y los componentes HeroUI (Button color="primary") usan la misma escala.
const primaryScale = {
  50: "#f0f0fa",
  100: "#cacae5",
  200: "#a1a1d8",
  300: "#7777c6",
  400: "#4949a9",
  500: "#1f1f74",
  600: "#17175a",
  700: "#131348",
  800: "#101038",
  900: "#0d0d26",
  950: "#080815",
  DEFAULT: "#17175a",
  foreground: "#ffffff",
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/proyectos/*.{js,ts,jsx,tsx,mdx}",
    "./components/Form/*.{js,ts,jsx,tsx,mdx}",
    "./components/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./infraestructure/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: { colors: { primary: primaryScale } },
        dark: { colors: { primary: primaryScale } },
      },
    }),
  ],
  darkMode: "class",
};

export default config;
