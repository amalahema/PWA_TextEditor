const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');




module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
      database: './src/js/database.js',
      editor: './src/js/editor.js',
      header: './src/js/header.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    // Add and configure workbox plugins for a service worker and manifest file.
    plugins: [

      //html webpack plugin
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'JATE'
      }),

      // InjectManifest plugin from the workbox-webpack-plugin
      //InjectManifest plugin, you ensure that the generated service worker is included in your webpack build and can be used in your application.
      new InjectManifest({
        swSrc: './src-sw.js',// source file for the service worker
        swDest: 'src-sw.js',//destination
      }),

      //When the webpack build runs, the WebpackPwaManifest plugin will generate a web app manifest file based on the provided configuration options. This manifest file includes metadata about your web app, such as its name, description, icons, and other properties
      // provides metadata and configuration details about the application
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Just Another Text Editor',
        short_name: 'JATE',
        description: 'Just another text editor',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: '/',
        publicPath: '/',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),

    
    ],

    //Add CSS loaders and babel to webpack.
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};