// tailwind.config.cjs
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        grey_light: "#f9f9f9",
      },
      boxShadow: {
        'custom': '-1px -1px 10px #7c75f4, 1px 1px 10px #7c75f4',
        'button': '-2px -2px 4px #000, 3px 4px 2px #fff'
      },
      fontFamily: {
        'kanit': ["Kanit", "Open Sans", "Arial", "sans-serif"],
        'kanit_m': ["Kanit-Medium", "Open Sans", "Arial", "sans-serif"],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'gradient': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'fade-in': 'fade-in 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}