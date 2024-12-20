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
				test: /\.css$/,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
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
				{ from: "src/assets/icons", to: "icons" },
				{ from: "src/assets/images", to: "images" },
				{ from: "src/assets/animations", to: "animations" },
				{ from: "./src/assets/icons/favicon.ico", to: "./" },
				{ from: "./src/assets/images/meta-sharing-image.png", to: "./" },
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
