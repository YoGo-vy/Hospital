require('./check-versions')() // 检查 Node 和 npm 版本
process.env.NODE_ENV = 'production' //指定生产环境
var ora = require('ora') // 一个很好看的 loading 插件
var rm = require('rimraf') //提供node版本的UNIX的rm -rf命令
var path = require('path') //使用Node自带的文件路径插件
var chalk = require('chalk') //控制台高亮显示的插件
var webpack = require('webpack') //使用 webpack
var config = require('../config') //使用 config/index.js
var webpackConfig = require('./webpack.prod.conf') // 加载 webpack.prod.conf
// 使用 ora 打印出 loading + log
var spinner = ora('building for production...')
spinner.start()
//https://www.npmjs.com/package/rimraf
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err //如果回调函数出现错误就抛出异常
  //  开始 webpack 的编译
  webpack(webpackConfig, function (err, stats) { //编译回调函数
    spinner.stop()
    if (err) throw err //编译失败就抛出异常
    process.stdout.write(stats.toString({ //标准输出流
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})