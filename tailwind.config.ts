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
        "AEGold-50": "#f9f7ed",
        "AEGold-100": "#f2eccf",
        "AEGold-200": "#e6d7a2",
        "AEGold-300": "#d7bc6d",
        "AEGold-400": "#cba344",
        "AEGold-500": "#b68a35",
        "AEGold-600": "#92722a",
        "AEGold-700": "#7c5e24",
        "AEGold-800": "#6c4527",
        "AEGold-900": "#5d3b26",
        "AEGold-950": "#361e12",

        "AEBlack-50": "#f7f7f7",
        "AEBlack-100": "#e1e3e5",
        "AEBlack-200": "#c3c6cb",
        "AEBlack-300": "#9ea2a9",
        "AEBlack-400": "#797e86",
        "AEBlack-500": "#5f646d",
        "AEBlack-600": "#4b4f58",
        "AEBlack-700": "#3e4046",
        "AEBlack-800": "#232528",
        "AEBlack-900": "#1b1d21",
        "AEBlack-950": "#0e0f12",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
