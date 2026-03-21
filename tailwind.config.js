/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
       fontFamily: {
        neue: ['"Neue Machina"', 'sans-serif'],
      },
            animation: {
        'color-change': 'color-change 2s ease-in-out infinite'
      },
      keyframes: {
        'color-change': {
          '0%, 100%': { color: '#39640f' },    // amber-600
          '33%': { color: '#092764' },         // yellow-600
          '66%': { color: '#580964' },         // amber-700 640f0f
        }
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
