//var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: __dirname + '/src/main.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.styl$/,
				loader: 'style!css!stylus-loader'
			}
		]
	},

	// plugins: [
	// 	new ExtractTextPlugin('styles.css', {
	// 		allChunks: true
	// 	})
	// ]

	devServer: {
		contentBase: './public',
		port: 8020,
		colors: true,
		inline: true
	},
};