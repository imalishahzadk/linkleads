/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#28439D",
        secondary: "#28439d",
      },
      borderWidth: {
        '16': '16px', 
      },
    },
  },
  plugins: [],
};
