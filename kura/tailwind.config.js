/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        blauer: ["Blauer", "Poppins", "Mulish", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
