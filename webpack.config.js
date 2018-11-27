const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[hash].js',
	publicPath:env=="dev"?'/':'/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(['dist/js','dist/css']),
		new webpack.HotModuleReplacementPlugin() ,
		new HtmlWebpackPlugin({
			filename:'index.html',
			title:'Home',
			template:'src/index.html',
			//favicon:'./src/assets/favicon.png'
		}),
    ]
}
