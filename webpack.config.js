const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	devtool: "source-map", // Enable top-level source maps
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader", // Injects styles into the DOM
					{
						loader: "css-loader",
						options: { sourceMap: true }, // Enable source maps in css-loader
					},
					{
						loader: "resolve-url-loader",
						options: { sourceMap: true }, // Enable source maps in resolve-url-loader
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true, // Enable source maps in sass-loader
						},
					},
				],
			},
		],
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{ from: "src/assets/images", to: "images" },
				{ from: "src/assets/animations", to: "animations" },
			],
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		compress: true,
		port: 9000,
		hot: true,
		open: true,
	},
	mode: "development",
};
