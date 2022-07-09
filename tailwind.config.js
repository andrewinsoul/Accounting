module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#0f172a",
        },
        red: {
          500: "#ff0282",
        },
      },
      fontSize: {
        xxsm: "0.7rem",
      },
      width: {
        vl: "300%",
      },
    },
  },
  plugins: [require("tailwindcss-elevation")(["responsive"])],
};
