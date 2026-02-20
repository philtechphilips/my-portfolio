import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1560BD',
          light: '#2D7DD6',
          dark: '#0E4A9A',
        },
        secondary: {
          DEFAULT: '#536878',
          light: '#708090',
          dark: '#3F4F5C',
        },
        accent: {
          DEFAULT: '#4682b4',
          light: '#5A9ACE',
          dark: '#366899',
        },
        neutral: {
          light: '#91A3B0',
          DEFAULT: '#708090',
          dark: '#536878',
        },
        background: {
          light: '#FAFAFA',
          dark: '#1C2328',
        },
        text: {
          primary: '#232121',
          secondary: '#656464',
        },
        success: '#10B981',
        error: '#EF4444',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Source Sans 3', 'sans-serif'],
        brand: ['Monument-R', 'Monument', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'up-down': 'upDown 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
