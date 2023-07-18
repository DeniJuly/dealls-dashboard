/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#6913D8",
        "purple-10": "#F4F2FF",
        yellow: "#FEE156",
        green: "#1ABC8E",
        orange: "#EB9715",
        red: "#BB0F0C",
        black: "#1D1D1D",
        "light-80": "#484848",
        grey: "#8F8F8F",
        white: "#FFFFFF",
        "grey-70": "#ECEDF0",
        "grey-60": "#F9F9F9",
      },
    },
  },
  plugins: [],
};
