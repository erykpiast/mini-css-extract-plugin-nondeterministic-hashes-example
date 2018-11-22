const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loaderUtils = require('loader-utils');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]_[hash:8].js'
  },
  module: {
    rules: [{
      test: /\.(css|less)$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[chunkhash:8].css',
    })
  ],
  optimization: {
    moduleIds: 'named',
  }
};
