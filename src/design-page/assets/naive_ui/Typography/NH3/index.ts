import snippets from './snippets'

export default {
  group: '基础组件',
  category: '基础',
  componentName: 'NH3',
  title: '三级标题',
  npm: {
    package: 'naive-ui',
    version: '2.30.6',
    exportName: 'NH3',
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
                value: 'default',
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
                value: 'error',
              },
              {
                title: '提示',
                value: 'info',
              },
            ],
          },
        },
        'VariableSetter',
      ],
      defaultValue: 'default',
    },
    {
      name: 'prefix',
      propType: 'string',
      title: {
        label: '字首显示条块',
        tip: '只能填bar',
      },
      setter: 'StringSetter',
    },
    {
      name: 'alignText',
      propType: 'bool',
      title: '文本对齐',
      setter: 'BoolSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: [],
    },
    component: {
      isContainer: false,
      isModal: false,
    },
  },
  snippets,
  keywords: 'NH3',
}
