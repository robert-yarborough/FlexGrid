const path = require('path');


module.exports = {
	entry: './src/index.css',
	output: {
		filename: "main.css",
		path: path.resolve(__dirname, 'dist'),
	},
};
