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
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        extend: "extend 0.2s ease-in-out",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
        extend: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
