const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports = {

    entry: './src/js/index.js',

    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js'
        },

        module: {
            rules: [

              {
                test: /\.html$/i,
                loader: 'html-loader',
              },
              
              {
                test: /\.(sass|css|scss)$/,
                use: [
                  // Creates `style` nodes from JS strings
                  {
                    loader: MiniCssExtractPlugin.loader, 
                    options: {
                      publicPath: '../'
                    }
                  },
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },

              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'images',
                    }
                  },
                ],

              },


              {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts',
                    }
                  },
                ],

              },

            ],
          },

          devServer: {
            static: {
              directory: path.join(__dirname, "build"),
            },
            port: 9000,
            devMiddleware: {
              writeToDisk: true,// لانتاج مجلد build
            },
            hot: false, //تساعد في التحديث التلقائي
            liveReload: true,//تساعد في التحديث التلقائي
            open: true,// لفتح المشروع مباشرة بعد تنفيذ الأمر
          },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/tours1.html',
      filename: 'tours1.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/tourst22.html',
      filename: 'tourst22.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/log.html',
      filename: 'log.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/new.html',
      filename: 'new.html',
    }),




    new MiniCssExtractPlugin({
        filename: "css/style.css"
    })
  ],
};
