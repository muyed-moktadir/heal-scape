/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#c084fc",
          "secondary": "#f9a8d4",
          "accent": "#1f76a8",
          "neutral": "#141624",
          "base-100": "#F7F7F8",
          "info": "#96C4F8",
          "success": "#37E1A6",
          "warning": "#997A0B",
          "error": "#EB2424",
        },
      },
      "light",
      "valentine",
    ],
  },
  plugins: [require("daisyui")],
}