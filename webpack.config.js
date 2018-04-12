const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'build');
module.exports = {
  entry: "./src/index.js",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  mode: 'development',
  module: {
    rules: [
        { 
            test: /\.js$/, 
            loader: "babel-loader", 
            exclude: /node_modules/ 
          },
          { 
            test: /\.jsx$/, 
            loader: "babel-loader", 
            exclude: /node_modules/ 
          }
    ]
}
}