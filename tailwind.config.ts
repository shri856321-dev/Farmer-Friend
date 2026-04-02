import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-dark': '#2d5016',
        'green-main': '#4a7c2e',
        'green-light': '#6fa34a',
        'green-pale': '#e8f5e0',
        'earth-brown': '#8b6914',
        'earth-light': '#f5f0e1',
        'red-main': '#dc2626',
        'red-bg': '#fef2f2',
        'success': '#16a34a',
        'success-bg': '#f0fdf4',
      },
      borderRadius: {
        'sm': '8px',
        'lg': '12px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'md': '0 4px 12px rgba(0,0,0,0.1)',
        'lg': '0 10px 30px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};
export default config;
