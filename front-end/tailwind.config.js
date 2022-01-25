module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      colors: {
        accent: {
          DEFAULT: '#7FCFD6', // CYAN - for button, bar, underline
          darker: '#51A0D6', // CYAN-BLUE - hover
        },
        tertiary: {
          1: '#4FD37E', // TEALISH GREEN
          2: '#FBE105', // YELLOW
          3: '#FB8B0C', // ORANGE
          4: '#6F3DCA', // BLUISH PURPLE
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
        ],
        serif: ['ui-serif', 'serif'],
        mono: ['ui-monospace', 'Menlo', 'Monaco', 'Consolas', 'Courier New'],
      },
    },
  },

  variants: {
    extend: {
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [],
};