// vue.config.js
const path = require('path')

/* 根据指定目录名得到根目录的绝对路径 */
function resolve (dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  /* 编写webpack支持的配置 */
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'components': resolve('src/components'),
        'pages': resolve('src/pages'),
      }
    },
  },
  devServer: {
    open: true,
    proxy: {
      '/api': { // 匹配所有以'/api'开头的请求路径
        target: 'http://localhost:4000', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: { // 重写路径: 去掉路径开头的'/api'
          '^/api': ''
        }
      }
    }
  },
    
}