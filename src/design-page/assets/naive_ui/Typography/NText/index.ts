import snippets from './snippets'

export default {
  group: '基础组件',
  category: '基础',
  componentName: 'NText',
  title: '文本',
  npm: {
    package: 'naive-ui',
    version: '2.30.6',
    exportName: 'NText',
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
      name: 'code',
      propType: 'bool',
      title: '代码模式',
      setter: 'BoolSetter',
    },
    {
      name: 'delete',
      propType: 'bool',
      title: '删除线',
      setter: 'BoolSetter',
    },
    {
      name: 'strong',
      propType: 'bool',
      title: '粗体',
      setter: 'BoolSetter',
    },
    {
      name: 'italic',
      propType: 'bool',
      title: '斜体',
      setter: 'BoolSetter',
    },
    {
      name: 'underline',
      propType: 'bool',
      title: '下划线',
      setter: 'BoolSetter',
    },
    {
      name: 'depth',
      propType: 'string',
      title: '颜色深度',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '深',
                value: '',
              },
              {
                title: '较深',
                value: '1',
              },
              {
                title: '较浅',
                value: '2',
              },
              {
                title: '浅',
                value: '3',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
    // {
    //   name: 'tag',
    //   propType: 'string',
    //   title: 'tag',
    //   setter: 'StringSetter',
    // },
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
  keywords: 'NText',
}
