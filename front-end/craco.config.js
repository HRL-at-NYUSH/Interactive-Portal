const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@components': './src/components',
          '@pages': './src/pages',

          // you can alias packages too
          // "@material-ui": "./node_modules/@material-ui-ie10"
          // "@file": "./src/file.js",
        },
      },
    },
  ],
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
