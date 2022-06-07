module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      darkTextColor: "#FFD66D",
      darkBGColor: "#262626",
      darkSecondaryBGColor: "#424242",
      white: "#ffffff",
      lightSecondaryColor: "#e4e4e4",
      error: "#ff5c5c",
    },
    extend: {
      gridTemplateRows: {
        layout: "4rem minmax(0, 1fr) minmax(0, 1fr)",
      },
    },
  },
  plugins: [],
};
