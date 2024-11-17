/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '95%',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        m_white: {
          100: '#FAFAFA',
          200: '#F5F5F5',
          300: '#F8F8F8'
        },
        m_red: {
          100: '#E92A34',
          200: '#FFF5F5',
          300: '#E92A341A',
          400: '#D30F1A'
        },
        m_black: {
          100: '#161616'
        },
        m_gray: {
          100: '#9F9F9F',
          200: '#949494',
          300: '#767676',
          400: '#EEE',
          500: '#535F85'
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        manjari: ["Manjari", "sans-serif"],
        sf_pro: ['SF Pro Display', 'sans-serif'],
      },
    },
  },
};