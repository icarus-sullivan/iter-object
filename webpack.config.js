
module.exports = {
  target: 'node',
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'lib.js',
    path: __dirname,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
