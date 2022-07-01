module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["hadrian.io"],
		loader: "akamai",
		path: "",
	},
	experimental: {
		images: {
			allowFutureImage: true,
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "postcss-loader"],
			},
			{
				test: /\.jsx?$/,
				use: ["babel-loader", "astroturf/loader"],
			},
		],
	},
};
