var path = require('path') // 使用 NodeJS 自带的文件路径插件
var utils = require('./utils') //封装了一些方法的工具
var config = require('../config') //使用 config/index.js

var vueLoaderConfig = require('./vue-loader.conf') //使用vue-loader.conf

// 拼接我们的工作区路径为一个绝对路径
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  laoder: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    // 编译文件入口
    app: './src/main.ts'
  },

  output: {
    //使用chonfig/index.js中build的assetsRoot作为输出根路径
    path: config.build.assetsRoot,

    filename: '[name].js', //编译输入的文件名

    publicPath: process.env.NODE_ENV === 'production' // 正式发布环境下编译输出的发布路径
      ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath
  },

  resolve: {
    // 自动补全的扩展名,能够使用户在引入模块时不带扩展
    extensions: ['.ts', '.js', '.vue', '.json'],

    // 默认路径代理，例如 import Vue from 'vue$'，会自动到 'vue/dist/vue.esm.js'中寻找

    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'static': resolve('static'),
    }
  },

  module: {
    rules: [
      // ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  }
}