module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 100: "#faf8f1", "100_3f": "#faf8f13f" },
        lime: { 800: "#c58940" },
        white: { A700: "#ffffff" },
        teal: { 200: "#8bd6b6" },
      },
      fontFamily: { swissranormal: "Swissra-Normal" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
