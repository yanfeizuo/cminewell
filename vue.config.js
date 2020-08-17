module.exports = {
  // 基本路径
  publicPath: './',
  // 构建时的输出路径
  outputDir: 'dist',
  // 放置生成的静态资源的目录
  assetsDir: 'assets',
  // html的输出路径
  indexPath: 'index.html',
  // 文件名哈希
  filenameHashing: true,
  // 用于多页配置，默认undefined
  pages: {
    index: {
      // page的入口文件
      entry: 'src/main.js',
      // 模板文件
      template: 'public/index.html',
      // 在dist/index.html的输出文件
      filename: 'index.html',
      // 当使用页面title选项时
      // template中的title标签需要是<title><%=htmlWebpackPlugin.options.title%></title>
      title: '铭伟科技'
    }
  },
  // 是否在保存时使用 eslint-loader 进行检查
  lintOnSave: true,
  // 配置webpack-dev-server 行为
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8088,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        ws: true, // 是否进行websocket代理
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .tap(options => {
        options.fix = true
        return options
      })
  }
}
