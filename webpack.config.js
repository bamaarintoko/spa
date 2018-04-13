const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'build');
const SRC_DIR = path.resolve(__dirname, 'src');
module.exports = {
	entry: SRC_DIR + "/index.js",
	output: {
		path: BUILD_DIR,
		filename: "bundle.js"
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.jsx$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: 'style-loader'
			}, 
			{
				test: /\.css$/,
				loader: 'css-loader',
				query: {
					modules: true,
					localIdentName: '[name]__[local]___[hash:base64:5]'
				}
			}
		]
	}
}