/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#171717',
        primary: {
          light: '#E8F5E9',
          DEFAULT: '#A5D6A7',
          dark: '#81C784',
        },
        secondary: {
          light: '#F1F8E9',
          DEFAULT: '#C5E1A5',
          dark: '#9CCC65',
        },
        accent: {
          light: '#F9FBE7',
          DEFAULT: '#E6EE9C',
          dark: '#DCE775',
        },
      },
      textColor: {
        primary: {
          light: '#E8F5E9',
          DEFAULT: '#A5D6A7',
          dark: '#81C784',
        },
        secondary: {
          light: '#F1F8E9',
          DEFAULT: '#C5E1A5',
          dark: '#9CCC65',
        },
        accent: {
          light: '#F9FBE7',
          DEFAULT: '#E6EE9C',
          dark: '#DCE775',
        },
      },
      fontFamily: {
        sans: ['Nanum Gothic', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #E8F5E9, #A5D6A7)',
        'gradient-secondary': 'linear-gradient(to right, #F1F8E9, #C5E1A5)',
        'gradient-accent': 'linear-gradient(to right, #F9FBE7, #E6EE9C)',
      },
    },
  },
  plugins: [],
}
