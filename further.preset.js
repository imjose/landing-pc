const defaultTheme = require("tailwindcss/defaultTheme");

// Example preset
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f1f1ff",
          100: "#e6e6ff",
          200: "#d0d0ff",
          300: "#afabff",
          400: "#877bff",
          500: "#6146ff",
          600: "#4d21ff",
          700: "#3c0def", // primary color
          800: "#330ccb",
          900: "#2c0ca6",
          950: "#160471",
        },
        secondary: {
          50: "#f5f3ff",
          100: "#eeeafd",
          200: "#ded8fc",
          300: "#c5b6fa", // secondary color
          400: "#aa8ff6",
          500: "#8f62f0",
          600: "#8041e6",
          700: "#712fd2",
          800: "#5e27b0",
          900: "#4e2290",
          950: "#301362",
        },
        tertiary: {
          50: "#ecfcff",
          100: "#d3f4fd", // tertiary color
          200: "#a7e6fa",
          300: "#6bd3f5",
          400: "#27b6e9",
          500: "#0b99cf",
          600: "#0c79ae",
          700: "#11628d",
          800: "#175173",
          900: "#184461",
          950: "#092b43",
        },
        accent: {
          50: "#feffe3", // accent color
          100: "#fbfec9",
          200: "#f5fd99",
          300: "#e9f85e",
          400: "#d9ee2d",
          500: "#bbd40e",
          600: "#92aa06",
          700: "#6e810a",
          800: "#56650f",
          900: "#495611",
          950: "#263003",
        },
        layout: {
          "001": "#f2efff",
          "002": "#def6fe",
          "003": "#d6d6fc",
          "004": "#f5fbff",
          "005": "#dff7fe",
        },
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      // fontSize: {
      //   'h1': '48px',
      //   'h2': '36px',
      //   'h3': '30px',
      //   'h4': '24px',
      //   'h5': '20px',
      //   'h6': '16px',
      // },
    },
  },
};
