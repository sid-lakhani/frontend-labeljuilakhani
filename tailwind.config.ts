import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4e6c50",
        secondary: "#c1b29d",
        tertiary: "#859674",
        quaternary: "#e4e1d8",
        quinary : "#766551"        
      },
    },
  },
  plugins: [],
} satisfies Config;
