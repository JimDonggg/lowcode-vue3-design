import snippets from './snippets';

export default {
  group: '基础组件',
  category: '数据展示',
  componentName: 'ElImage',
  title: '图片预览',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElImage',
    destructuring: true,
  },
  props: [
    {
      name: 'src',
      propType: 'string',
      title: {
        label: '图片地址',
        tip: 'src',
      },
      setter: 'StringSetter',
    },
    {
      name: 'alt',
      propType: 'string',
      title: {
        label: '缺省提示',
        tip: 'alt',
      },
      setter: 'StringSetter',
    },
    {
      name: 'fit',
      propType: 'string',
      title: {
        label: '图片布局',
        tip: 'fit｜同原生object-fit',
      },
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'fill',
                value: 'fill',
              },
              {
                title: 'contain',
                value: 'contain',
              },
              {
                title: 'cover',
                value: 'cover',
              },
              {
                title: 'none',
                value: 'none',
              },
              {
                title: 'scale-down',
                value: 'scale-down',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
    // {
    //   name: 'loading',
    //   propType: 'string',
    //   title: '图像加载策略',
    //   setter: [
    //     {
    //       componentName: 'SelectSetter',
    //       props: {
    //         options: [
    //           {
    //             title: '默认',
    //             value: '',
    //           },
    //           {
    //             title: 'eager',
    //             value: 'eager',
    //           },
    //           {
    //             title: 'lazy',
    //             value: 'lazy',
    //           },
    //         ],
    //       },
    //     },
    //     'VariableSetter',
    //   ],
    // },
    {
      name: 'lazy',
      propType: 'bool',
      title: '延迟渲染',
      setter: 'BoolSetter',
    },
    // {
    //   name: 'scrollContainer',
    //   propType: {
    //     type: 'oneOfType',
    //     value: ['string'],
    //   },
    //   title: 'scrollContainer',
    // },
    {
      name: 'previewSrcList',
      propType: 'array',
      title: {
        label: '预览图片列表',
        tip: 'previewSrcList｜开启图片预览功能',
      },
      defaultValue: [],
      setter: 'JsonSetter',
    },
    {
      name: 'hideOnClickModal',
      propType: 'bool',
      title: '点击遮罩关闭',
      setter: 'BoolSetter',
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("previewSrcList").length',
      },
    },
    // {
    //   name: 'previewTeleported',
    //   propType: 'bool',
    //   title: 'previewTeleported',
    //   setter: 'BoolSetter',
    // },
    {
      name: 'zIndex',
      propType: 'number',
      title: {
        label: '图片层级',
        tip: 'zIndex',
      },
      setter: 'NumberSetter',
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("previewSrcList").length',
      },
    },
    {
      name: 'initialIndex',
      propType: 'number',
      title: '初始索引',
      defaultValue: 0,
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("previewSrcList")?.length',
      },
    },
    {
      name: 'closeOnPressEscape',
      propType: 'bool',
      title: 'ESC关闭',
      setter: 'BoolSetter',
      defaultValue: true,
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("previewSrcList").length',
      },
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onLoad', 'onError', 'onSwitch', 'onClose'],
    },
    component: {
      isContainer: false,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElImage',
};
