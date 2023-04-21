const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
   mode: 'development',
   entry: './src/index.ts',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: "images/[name].[contenthash][ext]"
   },
   devServer: {
      open: true,
      watchFiles: path.join(__dirname, "src"),
      hot: true,
      port: 3000,
      historyApiFallback: true,
    },
   module: {
      rules: [
         {
            test: /\.(s*)css$/,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader',
               'sass-loader',
            ]
         },
         {
            test: /\.(ico|png|jpe?g|svg|gif)$/,
            type: "asset/resource",
         },
         {
            test: /\.(woff2?|eot|ttf|otf)$/i,
            type: "asset/resource",
         },
         {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: "index.html",
         template: path.resolve(__dirname, "src/index.html"),
      }),
      new MiniCssExtractPlugin({
         filename: 'style.css',
      })
   ]
}