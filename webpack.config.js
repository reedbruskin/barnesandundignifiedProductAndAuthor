const path = require('path');
const entryPath = path.join(__dirname, './client/src/index.jsx');
const outPut = path.join(__dirname, './client/dist');


module.exports = {
  mode: 'development',
  entry: entryPath,
  module: {
   rules: [
     {
       test: [/\.jsx$/],
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader',
         options: {
           presets: ['@babel/preset-react', '@babel/preset-env']
         }
       }
     }
   ]
 },
  output: {
   filename: 'bundle.js',
   path: outPut
 }
};


/*
module.exports = {
  entry: entryPath,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: outPut,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: outPut,
  },
};
*/