module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "735px",
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(auto-fit, minmax(17.5rem, 1fr))",
      },
    },
  },
  plugins: [require("daisyui")],
};
