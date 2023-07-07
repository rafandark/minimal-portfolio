/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      fontFamily: {
        mont: ['var(--font-mont)'],
      },
      colors:{
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#863E96" ,
        primaryDark: "#58E6D9",
      transparent: 'transparent',
      tia:"#9CFF00"
     
      },
      backgroundImage:{
        circularImage:'repeating-radial-gradient(rgba(66, 245, 170) 2px, #ca85c4 5px,#ffff 100px)'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      
    
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
 
      'xs': {'max': '479px'},
      // => @media (max-width: 479px) { ... }

    },
  },

  plugins: [],
}
