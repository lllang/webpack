module.exports = {
	entry: {
		e1: "./e1",
		e2: "./e2",
		e3: "./e3"
	},
	output: {
		filename: "[name].js"
	},
	stats: {
		hash: false,
		timing: false,
		chunks: true,
		chunkModules: true,
		modules: false
	}
};
