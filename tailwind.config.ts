import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'larg': { 'max': '1300px' },
      'med': { 'max': '850px' },
      'mid': {'max' : '750px'},
      'medsm': { 'max': '650px' },
      'small': { 'max': '500px' },
      'xsmall': { 'max': '400px' },
      '550': {'max': '520px'}
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      screens: {
        "800": "800px",
        "1000": "1000px"
      }

    },
  },
  plugins: [],
};
export default config;
