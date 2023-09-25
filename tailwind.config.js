/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('../src/assets/bg.webp')",
        popularPost: "url('../src/assets/ekmek.webp')",
      },
      boxShadow: {
        cardShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1050px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "520px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
