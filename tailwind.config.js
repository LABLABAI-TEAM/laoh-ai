/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontSize: {
        small: ["10px", "12px"],
      },
      width: {
        nine: "90%",
      },
      maxWidth: {
        nine: "90%",
      },
    },
  },
  plugins: [
    require("tailwind-styled-components"),
    require("tailwindcss-no-scrollbar"),
    require("@tailwindcss/typography"),
  ],
};
