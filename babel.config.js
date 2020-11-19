/*{
  presets : ['@babel/preset-react', '@babel/preset-env']
};*/


 module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}], '@babel/preset-react'],
};