module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
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
      mono: ['ui-monospace', 'Menlo', 'Monaco', 'Consolas', 'Courier New'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
