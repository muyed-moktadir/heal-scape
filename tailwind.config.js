/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#f7bec3",

          secondary: "#ce2135",

          accent: "#eac717",

          neutral: "#1A161D",

          "base-100": "#F5EEF7",

          info: "#2963D6",

          success: "#20A28A",

          warning: "#F2C063",

          error: "#FC6476",
        },
      },

      {
        dark: {
          primary: "#56339b",

          secondary: "#a3f7f4",

          accent: "#f9d9b8",

          neutral: "#18171C",

          "base-100": "#343041",

          info: "#41C2DC",

          success: "#25AD74",

          warning: "#FBD83C",

          error: "#E94E4E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
