/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Set 1
        primary: '#001b48',
        secondary: '#ff4f00',
        accent: '#ff9d3d',
        dark: '#430000',
        neutral: '#2c6975',

        // Set 2
        light: '#ffffff',
        lightAccent: '#f7d088',
        paleYellow: '#f9e7a6',
        offWhite: '#f9f7d9',
      },
      transitionProperty: {
        'max-height': 'max-height', // <-- this line added
      },
    },
  },
  plugins: [],
};
