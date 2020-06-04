var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge') // 在大型项目中，可能 webpack.config.js 会变得越来越臃肿，这个时候可以利用做 webpack-merge 插件。将配置定义在一个目录下面的不同文件中，然后通过 webpack-merge 来合并成最终的配置。
var baseWebpackConfig = require('./webpack.base.conf')

//可以将单个文件或整个目录复制到构建目录中
var CopyWebpackPlugin = require('copy-webpack-plugin')

// 一个可以插入 html 并且创建新的 .html 文件的插件
var HtmlWebpackPlugin = require('html-webpack-plugin')

// 一个 webpack 扩展，可以提取一些代码并且将它们和文件分离开
// 如果我们想将 webpack 打包成一个文件 css js 分离开，那我们需要这个插件
var ExtractTextPlugin = require('extract-text-webpack-plugin')

//一个个优化/最小化css资源的插件
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

var env = config.build.env

//合并 webpack.base.conf.js中的配置,里面具体的配置参考webpack.base.conf.js里面的注释
var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true,
    })
  },

  devtool: config.build.productionSourceMap ? config.build.devtool : false,

  output: {
    path: config.build.assetsRoot, //指定生产环境输出路径
    filename: utils.assetsPath('js/[name].[chunkhash].js'), //编译输出带hash的文件名,可以指定hash长度(chunkhash:6)
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js') // 没有指定输出名的文件输出的文件名
  },

  plugins: [

    // http://vuejs.github.io/vue-loader/en/workflow/production.html

    // definePlugin 接收字符串插入到代码当中, 所以你需要的话可以写上 JS 的字符串

    new webpack.DefinePlugin({
      'process.env': env
    }),

    // 压缩 js (同样可以压缩 css)
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        },
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true,
    }),

    // extract css into its own file
    //将 css 文件分离出来

    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      allChunks: true,
    }),

    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    //压缩css代码

    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),

    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    // 输入输出的 .html 文件

    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing' ?
        'index.html' : config.build.index,
      template: 'index.html',
      inject: true, // 是否注入 html
      minify: { // 压缩的方式
        removeComments: true, //移除带html的注释
        collapseWhitespace: true, //移除空格
        removeAttributeQuotes: true //移除属性的引号

        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },

      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      //https://doc.webpack-china.org/plugins/commons-chunk-plugin/

      chunksSortMode: 'dependency' //资源按照依赖关系去插入
    }),

    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),

    // split vendor js into its own file//将引用的库文件拆出来打包到一个[name].js文件中

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {

        // any required modules inside node_modules are extracted to vendor
        //任何一个从node_modules中引用的模块都会被打包进来

        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),

    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    //https://doc.webpack-china.org/concepts/manifest/
    //把webpack的runtime和manifest这些webpack管理所有模块交互的代码打包到[name].js文件中,防止build之后vendor的hash值被更新

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),

    // copy custom static assets
    //复制自定义的静态资源文件到dist/static文件夹中

    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: config.build.assetsSubDirectory,
      ignore: ['.*']
    }])
  ]

})

// 开启 gzip 的情况下使用下方的配置

if (config.build.productionGzip) {
  // Gzip依赖 compression-webpack-plugin 插件

  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  // 向webpackconfig.plugins中加入下方的插件

  webpackConfig.plugins.push(
    // 使用 compression-webpack-plugin 插件进行压缩,https://doc.webpack-china.org/plugins/compression-webpack-plugin/

    new CompressionWebpackPlugin({
      asset: '[path].gz[query]', //目标资源名称
      algorithm: 'gzip', //压缩方式
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ), //所有匹配该正则的资源都会被处理。默认值是全部资源。
      threshold: 10240, //只有大小大于该值的资源会被处理。单位是 bytes。默认值是 0。
      minRatio: 0.8 //只有压缩率小于这个值的资源才会被处理。默认值是 0.8。
    })
  )
}

//配置项目分析工具加载下方插件
if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}
module.exports = webpackConfig