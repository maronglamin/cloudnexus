export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1B1F3B',
          light: '#2C3364',
        },
        accent: {
          DEFAULT: '#2F80ED',
          light: '#5E9CF3',
        },
        neutral: {
          DEFAULT: '#E5E7EB',
        },
        success: {
          DEFAULT: '#10B981',
        },
        warning: {
          DEFAULT: '#F59E0B',
        },
      },
    },
  },
  plugins: [],
}


