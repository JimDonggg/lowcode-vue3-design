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
  publicPath: './',
  pages: {
    index: {
      entry: 'src/main', // page 的入口
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    design: {
      entry: 'src/design-page/main',
      template: 'public/design.html',
      filename: 'design.html',
      chunks: ['chunk-vendors', 'chunk-common', 'design'],
    },
  },
  chainWebpack(config) {
    // 移除 prefetch 插件
    // config.plugins.delete('prefetch')
    // config.plugins.delete('prefetch-index')
    // config.plugins.delete('prefetch-design')
    // 删除文件预加载
    // config.plugins.delete('preload')
    config.plugins.delete('preload-index')
    config.plugins.delete('preload-design')
  },
  // 自定义webpack配置
  configureWebpack: {
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
