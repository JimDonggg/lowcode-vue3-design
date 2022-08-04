import snippets from './snippets'

export default {
  group: '基础组件',
  category: '数据展示',
  componentName: 'ElCard',
  title: '卡片',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElCard',
    destructuring: true,
  },
  props: [
    {
      name: 'header',
      propType: {
        type: 'oneOfType',
        value: ['node', 'string'],
      },
      title: '标题',
      setter: ['SlotSetter', 'StringSetter', 'VariableSetter'],
    },
    {
      name: 'shadow',
      propType: 'string',
      title: '阴影时机',
      defaultValue: 'always',
      setter: [
        {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '总是',
                value: 'always',
              },
              {
                title: '悬浮',
                value: 'hover',
              },
              {
                title: '从不',
                value: 'never',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: [],
    },
    component: {
      isContainer: true,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElCard',
}
