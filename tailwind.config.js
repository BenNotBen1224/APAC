/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-inter)'],
          poppins: ['var(--font-poppins)'],
          noto: ['var(--font-noto-sans-tc)'],
        },
      },
    },
    plugins: [],
  };