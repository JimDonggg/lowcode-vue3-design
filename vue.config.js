const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  devServer: {
    hot: true,
    disableHostCheck: false, // 是否跳过 host 检查
    port: 8080,
    proxy: {
      '/apiService': {
        // target: "http://192.168.11.253:12340/mock/1137/", // mock
        // target: "http://192.168.161.80:8080/", // chenghl
        target: 'http://192.168.11.253:38005/', // 开发环境 http://192.168.11.85:28287/api/federal/user/login
        changeOrigin: true,
        pathRewrite: { '^/apiService': '' }, // 将路径中的某个字段替换成其他内容
      },
      '/gdios/lowcode/proxy': {
        target: 'http://192.168.11.11:30309', // dev
        changeOrigin: true,
        pathRewrite: {
          // '^/gdios/lowcode/proxy': '/',
        },
      },
    },
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  chainWebpack(config) {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 删除文件预加载
    config.plugins.delete('preload')
    // config.module
    //   .rule('less')
    //   .use('less-loader')
    //   .loader('less-loader')
    //   .options({
    //     lessOptions: {
    //       /**less-loader 配置 */
    //       strictMath: true,
    //       noIeCompat: true,
    //     },
    //   })
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    externals: {
      VueRenderer: 'LCVueRenderer',
      '@alilc/next': 'Next',
      '@alilc/lowcode-engine': 'AliLowCodeEngine',
      '@alilc/lowcode-engine-ext': 'AliLowCodeEngineExt',
      '@alilc/lowcode-editor-core': 'AliLowCodeEngine.common.editorCabin',
      '@alilc/lowcode-designer': 'AliLowCodeEngine.common.designerCabin',
      '@alilc/lowcode-editor-skeleton': 'AliLowCodeEngine.common.skeletonCabin',
      '@knxcloud/lowcode-vue-renderer': 'LCVueRenderer',
      '@knxcloud/lowcode-vue-simulator-renderer': 'LCVueSimulatorRenderer',
      lodash: '_',
      moment: 'moment',
      'prop-types': 'PropTypes',
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
}
