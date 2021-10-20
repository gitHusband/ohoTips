const path = require('path');

module.exports = {
  mode: 'development', // 指定构建模式
  entry: './src/ohoTips/js/ohoTips.js',
  output: {
    filename: 'ohoTips.js',
    path: path.resolve(__dirname, 'dist/ohoTips/js'),
  },
};