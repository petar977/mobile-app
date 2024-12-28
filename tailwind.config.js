/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        yellow: "#E0FE10",
        background: '#182526',
        gray: "#A5A5A7",
        darkGray: "#434B53"
      },
      fontFamily:{
        rregular: ["Raleway-Regular", "sans-serif"],
        rsemibold: ["Raleway-SemiBold", "sans-serif"],
        rbold: ["Raleway-Bold", "sans-serif"],
      }
    },
  },
  plugins: [],
}

