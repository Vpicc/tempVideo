/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
module.exports = rules = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    exclude: /(.webpack|node_modules)/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|.webpack)/,
    loader: 'babel-loader',
  },
  {
    test: /\.(scss|css)$/,
    use: [
      // style-loader
      { loader: 'style-loader' },
      // css-loader
      { loader: 'css-loader' },
      // sass-loader
      { loader: 'sass-loader' },
    ],
  },
  {
    test: /\.(svg|ico|icns)$/,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    },
  },
  {
    test: /\.(jpg|png|woff|woff2|eot|ttf)$/,
    loader: 'url-loader',
    options: {
      name: '[path][name].[ext]',
    },
  },
];
// Put your webpack loader rules in this array.  This is where you would put
// your ts-loader configuration for instance:
/**
 * Typescript Example:
 *
 * {
 *   test: /\.tsx?$/,
 *   exclude: /(node_modules|.webpack)/,
 *   loaders: [{
 *     loader: 'ts-loader',
 *     options: {
 *       transpileOnly: true
 *     }
 *   }]
 * }
 */
