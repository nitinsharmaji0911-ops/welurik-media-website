/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        haya: {
          bg: '#FAF8F5',
          paper: '#FFFFFF',
          dark: '#111111',
          header: '#000000',
          cyan: '#00D2B8',
          teal: '#00D2B8',
          accent: '#8B7355',
          border: '#E8E3DC',
          muted: '#71717A',
          whatsapp: '#25D366'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        body: ['Montserrat', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.28em',
      },
      animation: {
        'marquee': 'marquee 6s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
