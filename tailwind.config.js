/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#f79676",
          
          "secondary": "#f9bde7",
                   
          "accent": "#2071c1",
                   
          "neutral": "#181622",
                   
          "base-100": "#FCFCFD",
                   
          "info": "#52A6EF",
                   
          "success": "#198571",
                   
          "warning": "#EFB45D",
                   
          "error": "#F3124E",
        },
      },

      {
        dark: {
          "primary": "#000000",
          
          "secondary": "#dd040f",
                   
          "accent": "#318b9e",
                   
          "neutral": "#331E33",
                   
          "base-100": "#36305A",
                   
          "info": "#85C2E5",
                   
          "success": "#0F6C3A",
                   
          "warning": "#B59403",
                   
          "error": "#EE6879",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}