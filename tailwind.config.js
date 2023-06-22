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
    extend: {
      boxShadow: {
        main: "0 5px 174px -16px rgba(34, 197, 94, 0.7)",
        vignette: "inset 0px 0px 200px rgba(23, 23, 23, 1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".scrollbar-hidden::-webkit-scrollbar": {
            display: "none",
          },
          ".scrollbar-show::-webkit-scrollbar": {
            display: "flex",
          },
        },
        ["responsive"]
      );
    },
  ],
};
