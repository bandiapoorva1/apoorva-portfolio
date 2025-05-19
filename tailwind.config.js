// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      animation: {
        gradient: "gradientBG 12s ease infinite",
      },
      keyframes: {
        gradientBG: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  // ...
};
