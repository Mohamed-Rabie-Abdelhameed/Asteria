/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3856c4",
          100: "#0b1127",
          200: "#16224e",
          300: "#213375",
          400: "#2c449c",
          500: "#3856c4",
          600: "#5d76d1",
          700: "#8598dd",
          800: "#aebae8",
          900: "#d6ddf4",
        },
        secondary: {
          DEFAULT: "#d99ac5",
          100: "#36142b",
          200: "#6c2957",
          300: "#a23d82",
          400: "#c565a6",
          500: "#d99ac5",
          600: "#e1afd1",
          700: "#e8c3dd",
          800: "#f0d7e8",
          900: "#f7ebf4",
        },
        accent: {
          DEFAULT: "#dcf763",
          100: "#364203",
          200: "#6d8407",
          300: "#a3c60a",
          400: "#cdf322",
          500: "#dcf763",
          600: "#e3f883",
          700: "#eafaa2",
          800: "#f1fcc1",
          900: "#f8fde0",
        },
        light: {
          DEFAULT: "#f7f9fc",
          100: "#33362a",
          200: "#666c53",
          300: "#979e81",
          400: "#c4c8b8",
          500: "#f1f2ee",
          600: "#f4f4f1",
          700: "#f6f7f5",
          800: "#f9faf8",
          900: "#fcfcfc",
        },
        dark: {
          DEFAULT: "#00100b",
          100: "#000302",
          200: "#000604",
          300: "#000906",
          400: "#000c08",
          500: "#00100b",
          600: "#00724e",
          700: "#00d592",
          800: "#39ffc0",
          900: "#9cffe0",
        },
        gray: "#c8c8c9",
        lightgray: {
          DEFAULT: "#6e7594",
          100: "#f4f5f7",
          200: "#e9ecef",
          300: "#dfe3eb",
          400: "#d4d9e2",
          500: "#c9cfda",
          600: "#bfc5d1",
          700: "#b4bac8",
          800: "#aab0bf",
        },
      },
      fontFamily: {
        sans: ["geist", "sans-serif"],
        display: ["itc", "serif"],
      },
    },
  },
  plugins: [],
};
