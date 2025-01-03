import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{},
  },
  plugins: [],
} satisfies Config;
