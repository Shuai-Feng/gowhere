var path = require('path')
function resolve (dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('styles', resolve('src/assets/styles')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  }
}