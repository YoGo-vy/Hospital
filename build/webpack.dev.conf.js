var utils = require('./utils') //封装了一些方法的工具

var webpack = require('webpack') //使用 webpack

var config = require('../config') //使用 config/index.js

var merge = require('webpack-merge') //使用 webpack 配置合并插件
const path = require('path')
var baseWebpackConfig = require('./webpack.base.conf') // 加载 webpack.base.conf

var CopyWebpackPlugin = require('copy-webpack-plugin')

var HtmlWebpackPlugin = require('html-webpack-plugin') // 使用 html-webpack-plugin 插件，这个插件可以帮我们自动生成 html 并且注入到 .html 文件中

//https://www.npmjs.com/package/friendly-errors-webpack-plugin,可以识别某些类别的Webpack错误并进行清理，聚合和优先排序
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    // 使用 styleLoaders
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      // usePostCSS: true,
    })
  },
  devtool: config.dev.devtool,
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [{
        from: /.*/,
        to: path.posix.join(config.dev.assetsPublicPath, 'index.html')
      }]
    },
    hot: true,
    contentBase: false,
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay ? {
      warnings: false,
      errors: true
    } : false,
    publicPath: config.dev.assetsPublicPath,
    quiet: true,
    watchOptions: {
      poll: config.dev.poll
    }
  },
  plugins: [
    // definePlugin 接收字符串插入到代码当中, 需要的话可以写上 JS 的字符串
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),

    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    // HotModule 插件在页面进行变更的时候只会重回对应的页面模块，不会重绘整个 html 文件
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    //https://doc.webpack-china.org/plugins/no-emit-on-errors-plugin/
    //在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。这样可以确保输出资源不会包含错误。
    new webpack.NoEmitOnErrorsPlugin(),

    // https://github.com/ampedandwired/html-webpack-plugin
    // 将 index.html 作为入口，注入 html 代码后生成 index.html文件
    //https://doc.webpack-china.org/plugins/html-webpack-plugin/ webpack插件列表(中文)
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: config.dev.assetsSubDirectory,
      ignore: ['.*']
    }]),
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      devWebpackConfig.devServer.port = port
      devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`Your application is running here:http://${devWebpackConfig.devServer.host}:${port}${config.dev.assetsPublicPath}`]
          },
          onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined,
        })
      )
      resolve(devWebpackConfig)
    }
  })
})