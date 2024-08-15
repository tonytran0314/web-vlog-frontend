/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    "./presets/**/*.{js,vue,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Be Vietnam Pro']
    },
    extend: {
      colors: {
        'main': '#EC454F',
        'my-blue': '#1B55AC',
        'base': '#0A0F19',
        'box': '#0E1727',
        'secondary-button': '#102035',
        'dark-label': '#5D6E7F',
        'overlay': 'rgba(0,0,0,.65)',
      }
    },
  },
  plugins: [require('tailwindcss-primeui')]
}

