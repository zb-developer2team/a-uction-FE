/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        Red: '#de6b5a',
        Orange: '#ffa500',
        Blue: '#3279fa',
        Black: '#181818',
        Gray: '#9e9e9e',
        DarkGray: '#464646',
        LightGray: '#dadada',
        White: '#ffffff',
        Yellow: '#fee600',
        Bluegreen: '#67aba6',
      },
      fontSize: {
        sm: '1rem',
        base: '1.25rem',
        lg: '1.5rem',
        xl: '1.75rem',
        '2xl': '2rem',
        '3xl': '2.25rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      fontFamily: {
        'line-seed-sans-kr': 'LINE Seed Sans KR',
      },
      borderRadius: {
        none: '0',
        xs: '0.25rem',
        sm: '0.3125rem',
        default: '0.4375rem',
        lg: '0.625rem',
        xl: '1.25rem',
      },
    },
  },
  plugins: [],
};
