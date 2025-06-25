/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d6efd',
          dark: '#0b5ed7',
        },
      },
    },
  },
  plugins: [],
};
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        'xl-custom': '1283px', // custom screen size
      },
    },
  },
  plugins: [],
};
