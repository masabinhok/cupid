import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          background : '#fee2e9',
          text: '#fb5b7c',
          accent : '#ffeff2',
          light: '#fefefe',
          dark: '#373737',
          shade: '#dedede'
      }
    },
  },
  plugins: [],
} satisfies Config;
