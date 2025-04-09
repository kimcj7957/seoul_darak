/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nanum-gothic)', 'Nanum Gothic', 'sans-serif'],
      },
      screens: {
        'xs': '375px',  // 작은 모바일 기기
        'sm': '640px',  // 기본 모바일
        'md': '768px',  // 태블릿
        'lg': '1024px', // 작은 랩탑
        'xl': '1280px', // 큰 랩탑
        '2xl': '1536px', // 데스크탑
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
} 