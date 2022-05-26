module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "400px",
      tablet: "735px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        "primary-color": "#2a303c",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(auto-fit, minmax(19rem, 1fr))",
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
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
