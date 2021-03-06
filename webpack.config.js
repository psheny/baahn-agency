const path = require('path')
// const postCSSPlugins = [
//   require('postcss-simple-vars'),
//   require('postcss-nested'),
//   require('autoprefixer')
// ]

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader'
            /* Didn't work, removed to postcss.config.js
            (https://programmerah.com/error-reporting-using-postcss-34678/)

            options: {
              plugins: postCSSPlugins
            }
            */
          }
        ]
      }
    ]
  }
}