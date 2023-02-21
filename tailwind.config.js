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
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "main-cream": "#fffaf0",
        "active-cream": "#FFE3AB",
        "active-green": "#A3F8D3",
        "inactive-green": "#00BB6A",
        "active-orange": "#FFE3AB",
        "inactive-orange": "#FFBC10",
        "highlight-cat": "#E7E7E7",
      },
      backgroundImage: {},
      borderWidth: {
        5: "5px",
        10: "10px",
        20: "20px",
      },
    },
  },
  plugins: [],
};
