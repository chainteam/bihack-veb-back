import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

import * as path from 'path';

import env from './server/env';
import { additionalSettings } from './server/config';

const plugins = [
    new webpack.DefinePlugin({
        __DEV__: JSON.stringify(env().isDev),
    })
];

const config: any = {
	devtool: false,
	entry: [
		'./browser.tsx'
	],
    output: {
        path: path.join(__dirname, 'public/bundle/'),
        publicPath: '/assets/bundle/',
        filename: 'main.js',
    },
	context: path.resolve(__dirname, 'client'),
	resolve: {
		extensions: ['.ts', '.tsx', '.js', 'json', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.(ts|tsx)$/,
				loader: ['react-hot-loader/webpack', 'awesome-typescript-loader']
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},
		]
	},
	plugins,
	devServer: {
		hot: true
	}
};

if (env().isDev) {
	config.devtool = 'cheap-module-source-map';

    config.plugins.push(
		new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    );

    config.entry.unshift(
		'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:${additionalSettings.devPort}`,
        'webpack/hot/only-dev-server',
    );
}

module.exports = config;