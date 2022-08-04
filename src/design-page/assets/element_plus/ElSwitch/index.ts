import snippets from './snippets'

export default {
  group: '基础组件',
  category: '表单',
  componentName: 'ElSwitch',
  title: '开关',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElSwitch',
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
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
    },
    {
      name: 'width',
      propType: 'number',
      title: '宽度',
      setter: 'NumberSetter',
    },
    {
      name: 'size',
      propType: 'string',
      title: '尺寸',
      defaultValue: 'default',
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
    // {
    //   name: 'inlinePrompt',
    //   propType: 'bool',
    //   title: 'inlinePrompt',
    //   setter: 'BoolSetter',
    // },
    // {
    //   name: 'activeIcon',
    //   propType: {
    //     type: 'oneOfType',
    //     value: ['string', 'func'],
    //   },
    //   title: 'activeIcon',
    // },
    // {
    //   name: 'inactiveIcon',
    //   propType: {
    //     type: 'oneOfType',
    //     value: ['string', 'func'],
    //   },
    //   title: 'inactiveIcon',
    // },
    {
      name: 'activeText',
      propType: 'string',
      title: '激活描述',
      setter: 'StringSetter',
    },
    {
      name: 'activeValue',
      propType: {
        type: 'oneOfType',
        value: ['bool', 'string', 'number'],
      },
      title: '激活的值',
      defaultValue: true,
    },
    {
      name: 'inactiveText',
      propType: 'string',
      title: '未激活描述',
      setter: 'StringSetter',
    },
    {
      name: 'inactiveValue',
      propType: {
        type: 'oneOfType',
        value: ['bool', 'string', 'number'],
      },
      title: '未激活的值',
      defaultValue: false,
    },
    // {
    //   name: 'name',
    //   propType: 'string',
    //   title: 'name',
    //   setter: 'StringSetter',
    // },
    {
      name: 'loading',
      propType: 'bool',
      title: '显示加载状态',
      setter: 'BoolSetter',
    },
    {
      name: 'beforeChange',
      propType: 'func',
      title: 'beforeChange',
      setter: 'FunctionSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onChange', 'onFocus'],
    },
    component: {
      isContainer: false,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElSwitch',
}
