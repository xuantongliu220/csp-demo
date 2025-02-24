const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 引入插件

module.exports = {
  entry: './src/index.js',
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
  },
  mode: 'production',  // 生产模式会启用更多优化
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env', '@babel/preset-react']
                  }
              }
          },
          {
              test: /\.css$/,
              use: [
                  MiniCssExtractPlugin.loader,  // 使用 MiniCssExtractPlugin 提取 CSS
                  'css-loader'
              ]
          }
      ]
  },
  resolve: {
      extensions: ['.js', '.jsx']
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './public/index.html'
      }),
      new MiniCssExtractPlugin({
          filename: 'styles.css',  // 输出的 CSS 文件名
      })
  ],
  devServer: {
      static: path.join(__dirname, 'public'),
      compress: true,
      port: 3000,
      hot: true
  }
};
