import snippets from './snippets'

export default {
  group: '基础组件',
  category: '表单',
  componentName: 'ElCheckboxGroup',
  title: '多选框组',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElCheckboxGroup',
    destructuring: true,
  },
  props: [
    {
      name: 'v-model',
      propType: 'string',
      title: 'v-model',
      setter: 'ExpressionSetter',
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
    },
    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
    },
    {
      name: 'min',
      propType: 'number',
      title: {
        label: '最小数量',
        tip: '可被勾选的 checkbox 的最小数量',
      },
    },
    {
      name: 'max',
      propType: 'number',
      title: {
        label: '最大数量',
        tip: '可被勾选的 checkbox 的最大数量',
      },
    },
    // {
    //   name: 'fill',
    //   propType: 'string',
    //   title: 'fill',
    //   setter: 'StringSetter',
    // },
    // {
    //   name: 'textColor',
    //   propType: 'string',
    //   title: 'textColor',
    //   setter: 'StringSetter',
    // },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onChange'],
    },
    component: {
      isContainer: true,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElCheckboxGroup',
}
