module.exports ={
	 entry: './src/main.js',
	 output: {
      	filename: './src/index.js',
   	 },
   	module: {
	      loaders: [
	         {
	            test: /\.jsx?$/,
	            exclude: /node_modules/,
	            loader: 'babel-loader',
	            query: {
	               presets: ['es2015', 'react']
	            }
	         }
	      ]
   	}
}