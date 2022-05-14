import path from 'path';
import { fileURLToPath } from 'url';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[contenthash].js',
	},
	devServer: {
		historyApiFallback: true,
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /node_modules/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
	module: {
		rules: [{ test: /\.tsx?$/, use: 'ts-loader', exclude: '/node_modules/' }],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'public/index.html',
			meta: {
				description: { name: 'description', contnet: 'Simple tic tac toe game!' },
				keyword: { name: 'keywords', content: 'tic-tac-toe react xs-and-os' },
				'og:title': { property: 'og:title', content: 'Tic tac toe!' },
				'og:description': { property: 'og:description', content: 'Simple tic tac toe game!' },
				'og:type': { property: 'og:type', content: 'website' },
				'og:url': { property: 'og:url', content: 'https://alexey1380.github.io/xs-and-os/' },
				'og:image': { property: 'og:image', content: 'assets/logo.png' },
				'twitter:card': { name: 'twitter:card', content: 'assets/logo.png' },
				'twitter:title': { name: 'twitter:title', content: 'Tic tac toe!' },
				'twitter:description': { name: 'twitter:description', content: 'Simple tic tac toe game!' },
				'twitter:image': { name: 'twitter:image', content: 'assets/logo.png' },
			},
		}),
		new FaviconsWebpackPlugin({ logo: 'public/favicon.png' }),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'public', 'assets'),
					to: path.resolve(__dirname, 'build', 'assets'),
				},
			],
		}),
	],
	resolve: {
		plugins: [new TsconfigPathsPlugin()],
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
};
