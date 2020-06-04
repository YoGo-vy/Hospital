var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

const sourceMap = isProduction ?
  config.build.productionSourceMap : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap,
    extract: isProduction
  }),
  cssSourceMap: sourceMap,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src','poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}