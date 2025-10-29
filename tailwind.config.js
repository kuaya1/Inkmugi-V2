/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#c7a790', // Warm taupe
          dark: '#b08e77',    // Deeper taupe
          light: '#e2cfc1',   // Light taupe
        },
        secondary: {
          DEFAULT: '#8c7569', // Muted brown
          light: '#d8ccbf',   // Light greige
        },
        neutral: {
          50: '#f9f7f5',      // Off-white
          100: '#f0ece8',     // Light cream
          200: '#e2dcd6',     // Beige
          300: '#d4ccc2',     // Warm grey
          400: '#b8afa4',     // Medium taupe
          500: '#9c9288',     // Mushroom
          600: '#7d746b',     // Mocha
          700: '#665e57',     // Deep brown
          800: '#4a443e',     // Dark chocolate
          900: '#302d29',     // Almost black
          'custom-800': '#403932', // Softer dark brown for sections
        },
        accent: {
          DEFAULT: '#d6b9a5', // Dusty rose
          dark: '#94716a',    // Terracotta
        },
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        'gradient-primary': 'linear-gradient(to bottom, #f9f7f5, #e2dcd6)',
        'gradient-secondary': 'linear-gradient(to bottom, #f0ece8, #f9f7f5)',
      },
      boxShadow: {
        'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
        'medium': '0 10px 35px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};