/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#d13896",

          secondary: "#6599d8",

          accent: "#d14550",

          neutral: "#1C1924",

          "base-100": "#F0F2F5",

          info: "#469CEC",

          success: "#24B76B",

          warning: "#FBAE13",

          error: "#F36D85",
        },
      },

      {
        dark: {
          primary: "#9b00d3",

          secondary: "#c0c5f7",

          accent: "#681f89",

          neutral: "#2F2730",

          "base-100": "#FFFFFF",

          info: "#97AEE2",

          success: "#1CD964",

          warning: "#B18906",

          error: "#ED4551",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
