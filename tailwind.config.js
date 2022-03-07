module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: ["Arial", "sans-serif"],
      secondary: ["Arial", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          grey: 'hsl(0, 0%, 90%)',
          "blue-light": "hsl(199, 33%, 85%)",
          blue: 'hsl(199, 100%, 24%)',
          "green-light": 'hsl(166, 59%, 88%)',
          green: 'hsl(166, 81%, 43%)',
          orange: 'hsl(11, 93%, 66%)'
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