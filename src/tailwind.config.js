/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        saffron: "#FF9933",
        chakraBlue: "#1A237E",
        indiaGreen: "#138808",
      },
    },
  },
  plugins: [],
};
