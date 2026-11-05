/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ir: {
          navy: '#0A192F',
          dark: '#060D17',
          deep: '#0F223D',
          card: '#112240',
          border: '#233554',
          saffron: '#FF671F',
          saffronHover: '#E5530B',
          green: '#00873E',
          greenHover: '#006E32',
          silver: '#E2E8F0',
          blue: '#1E3A8A',
          amber: '#F59E0B',
          red: '#DC2626',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      }
    },
  },
  plugins: [],
}

