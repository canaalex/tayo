/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      height: {
        'sidebar-height': 'calc(100vh - 65px)',
        'sidebar-height-mobile':'150px',
        'chart-height':'300px'
      },
    },
  },
  plugins: [],
}

