const path = require('path');

module.exports = {
  mode: 'development', // 指定构建模式
  entry: {
    ohoTips: './src/js/ohoTips.js',
    common: './src/js/common.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/ohoTips/js'),
    library: {
      name: 'oho',
      type: 'umd',
    },
  },
};