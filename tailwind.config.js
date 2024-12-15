/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1554A5', // Add primary color
      },
      boxShadow: {
        'bottom-only': '0 4px 8px rgba(0, 0, 0, 0.25)', // Customize this shadow as needed
      },
      backgroundImage: {
        'custom-radial-skyblue': 'radial-gradient(ellipse at center, rgba(21, 84, 165, 0.06) 60%, rgba(255, 255, 255, 0.08) 70%)',
      },
    },
  },
  plugins: [],
}

