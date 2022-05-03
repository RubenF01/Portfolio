module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        hurricane: ["Hurricane", "cursive"],
      },
      colors: {
        contactGray: "rgba(124, 124, 124, 0.4)",
      },
    },
  },
  plugins: [],
};
