/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",              // Scans the root index.html
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all JS/TS/JSX/TSX files in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};