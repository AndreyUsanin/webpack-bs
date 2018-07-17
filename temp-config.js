rules: [

{
  test: /\.(sa|sc|c)ss$/,
  use: [
    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader',
    'sass-loader',
  ]
},

{
  test: /\.(scss)$/,
  use: [
    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader', // translates CSS into CommonJS modules
    },
    {
      loader: 'postcss-loader', // Run post css actions
      options: {
        plugins: function () { // post css plugins, can be exported to postcss.config.js
          return [
            require('precss'),
            require('autoprefixer')
          ];
        }
      }
    },
    {
      loader: 'sass-loader' // compiles Sass to CSS
    }
  ]
}
]


