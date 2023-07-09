/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white':'#f3f3f3',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff9800',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#151d26',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'whiteShade':'#bec2c6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'amazon-logo': "url('http://pngimg.com/uploads/amazon/amazon_PNG11.png')",
      }
    }
  },
  plugins: [],
}