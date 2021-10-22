const path = require('path');
const glob = require('glob');

const OHO_PATH = {
  js: {
    pattern: './src/js/[^_]*.js',
    src: path.join(__dirname, 'src/js'),
    dst: path.resolve(__dirname, 'dist/ohoTips/js'),
  }
}

// 遍历除所有需要打包的JS文件路径
function getEntries(config) {
  let fileList = glob.sync(config.pattern);
  return fileList.reduce(function (previous, current) {
    let filePath = path.parse(path.relative(config.src, current));
    let withoutSuffix = path.join(filePath.dir, filePath.name);
    previous[withoutSuffix] = path.resolve(__dirname, current);
    return previous;
  }, {});
}
console.log(getEntries(OHO_PATH.js));

module.exports = {
  mode: 'development', // 指定构建模式
  entry: getEntries(OHO_PATH.js),
  // entry: {
  //   ohoTips: './src/js/ohoTips.js',
  //   common: './src/js/common.js'
  // },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/ohoTips/js'),
    library: {
      name: 'oho',
      type: 'umd',
    },
  },
};