/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "custom-white": "#F8F8FF",
        "custom-black": "#212427",
        "star": "#FFFF"
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        
      },
      animation: {
        twinkle: 'twinkle 3s infinite',
      },
    }
  },
  plugins: [],
}