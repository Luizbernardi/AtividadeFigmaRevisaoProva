/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        redlight: '#E55959',
        greenlight: '#7FCDCD',
        graylight: '#E7E7E7',
        graytext: '#D9D9D9',
        redbackground: '#EED0D0',
        orangetext: '#C25500',
        tela1white: '#ffffff',
        navgren: '#89C5CC',
      },
      borderWidth: {
        'custom': '3px',
      },
      borderColor: {
        'custom': '#7D7987',
      },
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-custom': {
          textShadow: '4px 8px 12px rgba(0, 0, 0, 0.5)', // Valores aumentados para uma sombra mais evidente
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}