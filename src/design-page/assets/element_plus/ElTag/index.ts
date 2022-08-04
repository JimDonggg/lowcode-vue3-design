import snippets from './snippets'

export default {
  group: '基础组件',
  category: '数据展示',
  componentName: 'ElTag',
  title: '标签',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElTag',
    destructuring: true,
  },
  props: [
    {
      name: 'children',
      propType: {
        type: 'oneOfType',
        value: ['node', 'string'],
      },
      title: '内容',
      setter: ['SlotSetter', 'StringSetter', 'VariableSetter'],
    },
    {
      name: 'type',
      propType: 'string',
      title: '类型',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '主要',
                value: '',
              },
              {
                title: '信息',
                value: 'info',
              },
              {
                title: '成功',
                value: 'success',
              },
              {
                title: '警告',
                value: 'warning',
              },
              {
                title: '危险',
                value: 'danger',
              },
            ],
          },
        },
        'VariableSetter',
      ],
      defaultValue: '',
    },
    {
      name: 'closable',
      propType: 'bool',
      title: '标签可关闭',
    },
    {
      name: 'hit',
      propType: 'bool',
      title: '边框描边',
    },
    // {
    //   name: 'disableTransitions',
    //   propType: 'bool',
    //   title: 'disableTransitions',
    //   setter: 'BoolSetter',
    // },
    {
      name: 'color',
      propType: 'string',
      title: '背景色',
      setter: 'ColorSetter',
    },
    {
      name: 'size',
      propType: 'string',
      title: '尺寸',
      setter: [
        {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '大',
                value: 'large',
              },
              {
                title: '默认',
                value: 'default',
              },
              {
                title: '小',
                value: 'small',
              },
            ],
          },
        },
        'VariableSetter',
      ],
      defaultValue: 'default',
    },
    {
      name: 'effect',
      propType: 'string',
      title: '主题',
      setter: [
        {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '明亮',
                value: 'light',
              },
              {
                title: '暗黑',
                value: 'dark',
              },
              {
                title: '朴素',
                value: 'plain',
              },
            ],
          },
        },
        'VariableSetter',
      ],
      defaultValue: 'light',
    },
    {
      name: 'round',
      propType: 'bool',
      title: '圆角按钮',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onClose', 'onClick'],
    },
    component: {
      isContainer: false,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElTag',
}
