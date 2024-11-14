/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,js}", // Adjust paths to match your file structure
		"./dist/index.html",
	],
	theme: {
		extend: {
			colors: {
				// Neutral shades
				"neutral-0": "#000000",
				"neutral-8": "#101010",
				"neutral-16": "#202020",
				"neutral-24": "#303030",
				"neutral-32": "#404040",
				"neutral-40": "#505050",
				"neutral-48": "#606060",
				"neutral-80": "#9f9f9f",
				"neutral-88": "#afafaf",
				"neutral-96": "#bfbfbf",
				"neutral-104": "#cfcfcf",
				"neutral-112": "#dfdfdf",
				"neutral-120": "#efefef",
				"neutral-128": "#ffffff",

				// OW colors
				"ow-red": "#d34037",
				"ow-red-hover": "#f05c48",
			},

			// Extend with a custom gradient if needed
			backgroundImage: {
				"ow-gradient": "linear-gradient(#ea483b, #ea483b00)",
				hero: "url('/src/assets/images/wolf-1.png')",
			},
			spacing: {
				100: "100%",
			},
		},
	},
	plugins: [],
};
