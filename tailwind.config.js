/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-olive': '#ECF8E3',
        'light-green': '#E8F7DF',
        'medium-green': '#1E2B1E',
        'dark-green': '#2D6D5F',
      },
      backgroundImage: {
        'pattern-body': "url('./assets/pattern.svg')",
        'pattern-aotd': "url('./assets/pattern-2.svg')",
        'mood-mosque': "url('./assets/pattern-mosque.svg'), linear-gradient(to bottom, #6ACDFD, #0F181D)",
      },
    },
  },
  plugins: [],
}
