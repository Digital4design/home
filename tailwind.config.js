module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Arial", "sans-serif"],
      secondary: ["Arial", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          "green-light": "hsl(167, 64%, 95%)",
          green: "hsl(166, 81%, 43%)",
          "green-dark": "hsl(166, 64%, 33%)",
          "blue-light": "hsl(200, 32%, 93%)",
          blue: "hsl(199, 100%, 24%)",
          "blue-dark": "hsl(199, 100%, 14%)",
          "grey-dark": "hsl(0, 0%, 18%)",
          grey: "hsl(0, 0%, 48%)",
          "grey-light": "hsl(204, 33%, 97%)",
          alert: "hsl(11, 93%, 66%)",
        },
      },
      lineHeight: {
        paragraph: "1.8",
      },
      zIndex: {
        100: "100",
        200: "200",
        500: "500",
        999: "999",
        max: "2147483647",
      },
    },
  },
}
