/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      bg_white: "#EBEBEB",
      div_white: "#FAFAFA",
      black: "#10101A",
      yankees_blue: "#122647",
      dark_grey_gradient: "#353535",
      white_gradient: "#D6D6D6",
      dark_orange: "#E84A37",
      light_orange: "#FCD56F",
    },
    extend: {
      fontFamily: {
        bebas: "bebas-neue",
        mark: "mark-pro",
      },
    },
  },
  plugins: [],
};
