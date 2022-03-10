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
      borderRadius: {
        DEFAULT: "12px",
        sm: "8px",
      },

      fontSize: {
        "6xl": ["56px", "64px"],
        "5xl": ["40px", "56px"],
        "4xl": ["32px", "40px"],
        "3xl": ["28px", "32px"],
        "2xl": ["24px", "36px"],
        xl: ["24px", "32px"],
        lg: ["20px", "24px"],
        base: ["16px", "24px"],
        sm: ["14px", "20px"],
        xs: ["12px", "18px"],
      },
      colors: {
        brand: {
          "green-light": "hsl(167, 74%, 88%)",
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
      container: {
        padding: "1rem",
      },
      zIndex: {
        100: "100",
        200: "200",
        500: "500",
        999: "999",
        max: "2147483647",
      },
      transitionTimingFunction: {
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        "in-out-cubic": "ubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
}
