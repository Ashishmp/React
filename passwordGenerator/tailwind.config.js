/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the src folder
    "./index.html"         // Include the HTML file if necessary
  ],
  theme: {
    extend: {},                    // Use this to extend the default theme
  },
  plugins: [],                     // Add plugins here if needed
}