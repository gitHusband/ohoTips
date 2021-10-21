const path = require('path');

module.exports = {
  mode: 'development', // 指定构建模式
  entry: './src/js/ohoTips.js',
  output: {
    filename: 'ohoTips.js',
    path: path.resolve(__dirname, 'dist/ohoTips/js'),
    library: {
      name: 'oho',
      type: 'umd',
    },
  },
};