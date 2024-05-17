import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "AEGold-500": "#b68a35",
        "AEGold-400": "#cba344",
        "AEGold-300": "#d7bc6d",
        "AEGold-200": "#e6d7a2",
        "AEBlack-700": "#3e4046",
        "AEBlack-100": "#e1e3e5",
        "AEBlack-200": "#c3c6cb",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
