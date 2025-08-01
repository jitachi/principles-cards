/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'card-draw': 'cardDraw 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slide-to-yes': 'slideToYes 0.2s ease-out forwards',
        'slide-to-no': 'slideToNo 0.2s ease-out forwards',
      },
      keyframes: {
        cardDraw: {
          '0%': {
            opacity: '0',
            transform: 'translateY(300px) scale(0.75) rotate(-3deg)',
          },
          '20%': {
            opacity: '0.3',
            transform: 'translateY(200px) scale(0.8) rotate(-2deg)',
          },
          '40%': {
            opacity: '0.6',
            transform: 'translateY(100px) scale(0.85) rotate(-1deg)',
          },
          '60%': {
            opacity: '0.8',
            transform: 'translateY(50px) scale(0.9) rotate(0deg)',
          },
          '80%': {
            opacity: '0.95',
            transform: 'translateY(10px) scale(0.98) rotate(0deg)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1) rotate(0deg)',
          },
        },
        slideToYes: {
          '0%': {
            transform: 'translateY(0) scale(1) rotate(0deg)',
            opacity: '1',
          },
          '20%': {
            transform: 'translateX(300px) translateY(0) scale(0.95) rotate(2deg)',
            opacity: '0.95',
          },
          '40%': {
            transform: 'translateX(500px) translateY(0) scale(0.9) rotate(3deg)',
            opacity: '0.9',
          },
          '60%': {
            transform: 'translateX(700px) translateY(0) scale(0.85) rotate(5deg)',
            opacity: '0.8',
          },
          '80%': {
            transform: 'translateX(900px) translateY(0) scale(0.8) rotate(7deg)',
            opacity: '0.7',
          },
          '100%': {
            transform: 'translateX(calc(50vw - 97.5px)) translateY(0) scale(0.75) rotate(10deg)',
            opacity: '0.4',
          },
        },
        slideToNo: {
          '0%': {
            transform: 'translateY(0) scale(1) rotate(0deg)',
            opacity: '1',
          },
          '20%': {
            transform: 'translateX(-300px) translateY(0) scale(0.95) rotate(-2deg)',
            opacity: '0.95',
          },
          '40%': {
            transform: 'translateX(-500px) translateY(0) scale(0.9) rotate(-3deg)',
            opacity: '0.9',
          },
          '60%': {
            transform: 'translateX(-700px) translateY(0) scale(0.85) rotate(-5deg)',
            opacity: '0.8',
          },
          '80%': {
            transform: 'translateX(-900px) translateY(0) scale(0.8) rotate(-7deg)',
            opacity: '0.7',
          },
          '100%': {
            transform: 'translateX(calc(-50vw + 97.5px)) translateY(0) scale(0.75) rotate(-10deg)',
            opacity: '0.4',
          },
        },
      },
    },
  },
  plugins: [],
} 