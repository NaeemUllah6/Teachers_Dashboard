module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JavaScript/TypeScript files in the `src` folder
    './public/index.html',         // Include your HTML files if needed
  ],
  theme: {
    extend: {
      container: {
        center: true, 
        padding: {
          DEFAULT: '16px',
          sm: '16px',
          md: '16px',
          lg: '16px',
          xl: '16px',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      xl:{
        maxWidth:{
          width:'1250px',
        }
      }
    },
  },
  plugins: [],
};
