/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  important: "#__next",
  theme: { extend: {} },
  plugins: [require("@tailwindcss/typography")],
};
