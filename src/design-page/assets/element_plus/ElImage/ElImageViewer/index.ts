import snippets from './snippets'

export default {
  group: '基础组件',
  category: '数据展示',
  componentName: 'ElImageViewer',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElImageViewer',
    destructuring: true,
  },
  props: [
    {
      name: 'urlList',
      propType: 'array',
      title: '图片链接列表',
      defaultValue: [],
      setter: 'JsonSetter',
    },
    {
      name: 'zIndex',
      propType: 'number',
      title: {
        label: '遮罩层级',
        tip: 'z-index',
      },
      setter: 'NumberSetter',
    },
    {
      name: 'initialIndex',
      propType: 'number',
      title: '初始预览图像索引',
      defaultValue: 0,
      setter: 'NumberSetter',
    },
    {
      name: 'infinite',
      propType: 'bool',
      title: '无限循环预览',
      setter: 'BoolSetter',
      defaultValue: true,
    },
    {
      name: 'hideOnClickModal',
      propType: 'bool',
      title: '点击遮罩层关闭',
      setter: 'BoolSetter',
    },
    // {
    //   name: 'teleported',
    //   propType: 'bool',
    //   title: 'teleported',
    //   setter: 'BoolSetter',
    // },
    // {
    //   name: 'closeOnPressEscape',
    //   propType: 'bool',
    //   title: 'ESC关闭',
    //   setter: 'BoolSetter',
    // },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onClose', 'onSwitch'],
    },
    component: {
      isContainer: false,
      isModal: false,
    },
  },
  snippets,
  // snippets: [
  //   {
  //     title: '图片预览',
  //     screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/image-1.png',
  //     schema: {
  //       componentName: 'ElImageViewer',
  //       props: {
  //         urlList: [
  //           'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //           'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  //           'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  //           'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  //         ],
  //       },
  //     },
  //   },
  // ],
  keywords: 'ElImageViewer',
}
