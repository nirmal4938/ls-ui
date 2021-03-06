const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
    plugins: [
        new Dotenv()
    ]
}
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};

module.exports = {
  entry: ["babel-polyfill", "react-hot-loader/patch", "./src"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: 'developement',
  module: {
    rules: [
      // {
      //   test: /\.(jsx|js)$/,
      //   include: path.resolve(__dirname, 'src'),
      //   exclude: /node_modules/,
      //   use: [{
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         ['@babel/preset-env', {
      //           "targets": "defaults" 
      //         }],
      //         '@babel/preset-react'
      //       ]
      //     }
      //   }]
      // },
      {
        test: /\.(js|jsx|css|html)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'file-loader',
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    },
    {
        test: /\.html$/,
        "import/no-webpack-loader-syntax": "off",
        use: [
          'babel-loader',
            'file-loader',
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    },
    {
        test: /\.(js|jsx|css|html)$/,
        exclude: /node_modules/,
        use: {
          use: [
            'babel-loader',
            'file-loader',
              'style-loader',
              'css-loader',
              'sass-loader'
          ]
        }
    },
    {
        test: /\.(png|jpg|gif)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[contenthash:8].[ext]'
                }
            }
        ]
    },
    
    {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
        options: {
            limit: 10000,
        }
    }
    ]
  }
}