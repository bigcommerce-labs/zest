const path = require('path');

const config = {
  entry: {
    main: './src/index.js',
    popup: './popup/popup.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};

module.exports = (env, argv) => {
  const { mode } = argv;
  config.mode = mode;

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  return config;
};
