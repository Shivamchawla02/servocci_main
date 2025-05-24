/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // <-- place here, not inside content
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Set 1
        primary: '#001b48',  // Dark blue
        secondary: '#ff4f00',  // Bright orange
        accent: '#ff9d3d',  // Light orange
        dark: '#430000',  // Dark red
        neutral: '#2c6975',  // Teal

        // Set 2
        light: '#ffffff',  // White
        lightAccent: '#f7d088',  // Pale yellow
        paleYellow: '#f9e7a6',  // Light yellow
        offWhite: '#f9f7d9',  // Off white
      },
    },
  },
  plugins: [],
}
