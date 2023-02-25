/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-styled-components"),
    require("tailwindcss-no-scrollbar"),
    require("@tailwindcss/typography"),
  ],
};
