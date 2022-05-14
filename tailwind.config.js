module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "735px",
    },
    extend: {
      colors: {
        "primary-color": "#2a303c",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(auto-fit, minmax(17.5rem, 1fr))",
      },
      animation: {
        // Animation with hover
        "spin-slow": "bounceModified 2s infinite",
      },
      keyframes: {
        bounceModified: {
          "0%, 100%": { transform: "translateY(-2.5%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
