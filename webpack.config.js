const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  watchOptions: {
    ignored: '/node_modules',
    aggregateTimeout: 1000,
    poll: 1000,
  },

  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },

  devtool: 'inline-source-map',

  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    open: {
      app: {
        name: 'google-chrome',
        arguments: ['--incognito', '--new-window'],
      },
    },
  },

  optimization: {
    runtimeChunk: 'single',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/template.html'),
      title: 'Weather or Not',
      filename: 'index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|webp|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
