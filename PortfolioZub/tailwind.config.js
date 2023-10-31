/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-down': {
          '0%': {
            transform: 'translateY(-100%)'
          },
          '100%': {
            transform: 'translateY(0)',
          }
        },
        'slide-right': {
          '0%': {
            transform: 'translateX(-100%)' // Empieza fuera de la pantalla hacia la izquierda
          },
          '100%': {
            transform: 'translateX(0)', // Termina en su posición original
          }
        }
      },
      animation: {
        'slide-down': 'slide-down 1s ease-in-out',
        'slide-right': 'slide-right 5s linear' // Agrega la animación de desplazamiento hacia la derecha
      }
    },
  },
  plugins: [
    require('tailwindcss-animations')
  ],
};

