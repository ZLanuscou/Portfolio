/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Define una animación para cambiar gradualmente el color del texto
        'color-change': {
          
          '25%': {
            color: '#FFA500', // Color a los 25% de la animación (naranja)
          },
          '50%': {
            color: '#FFFF00', // Color a los 50% de la animación (amarillo)
          },
          '75%': {
            color: '#008000', // Color a los 75% de la animación (verde)
          },
        
        },
      },
      animation: {
        'color-change': 'color-change 5s linear infinite'
      }
    },
  },
  plugins: [
    require('tailwindcss-animations')
  ],
};

