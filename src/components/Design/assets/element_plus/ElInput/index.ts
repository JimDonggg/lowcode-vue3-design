// import iconSelectSetter from '../setter/iconSelectSetter'
import snippets from './snippets'

export default {
  group: '基础组件',
  category: '表单',
  componentName: 'ElInput',
  title: '输入框',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElInput',
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
      name: 'placeholder',
      propType: 'string',
      title: '输入提示',
      setter: 'StringSetter',
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
      name: 'maxLength',
      title: { label: '最大长度', tip: '最大长度' },
      propType: 'number',
      setter: 'NumberSetter',
    },
    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
    },
    {
      name: 'type',
      propType: 'string',
      title: '类型',
      defaultValue: 'text',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '文本',
                value: 'text',
              },
              {
                title: '密码框',
                value: 'password',
              },
              {
                title: '文本框',
                value: 'textarea',
              },
              {
                title: '数字',
                value: 'number',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
    // {
    //   name: 'formatter',
    //   propType: 'func',
    //   title: 'formatter',
    //   setter: false,
    // },
    // {
    //   name: 'parser',
    //   propType: 'func',
    //   title: 'parser',
    //   setter: false,
    // },
    {
      name: 'readonly',
      propType: 'bool',
      title: '是否只读',
      setter: 'BoolSetter',
    },
    {
      name: 'clearable',
      propType: 'bool',
      title: '支持清除',
      setter: 'BoolSetter',
    },
    {
      name: 'showPassword',
      propType: 'bool',
      title: '密码框',
      setter: 'BoolSetter',
    },
    {
      name: 'showWordLimit',
      propType: 'bool',
      title: '字数统计',
      setter: 'BoolSetter',
    },
    // {
    //   name: 'prefixIcon',
    //   propType: 'string',
    //   title: '前缀图标',
    //   setter: iconSelectSetter,
    // },
    // {
    //   name: 'suffixIcon',
    //   propType: 'string',
    //   title: '后缀图标',
    //   setter: iconSelectSetter,
    // },
    {
      name: 'append',
      title: { label: '前置标签', tip: '前置标签' },
      propType: 'node',
      condition: {
        type: 'JSFunction',
        value:
          'target => target.getProps().getPropValue("type").includes("text")',
      },
    },
    {
      name: 'prepend',
      title: { label: '后置标签', tip: '后置标签' },
      propType: 'node',
      condition: {
        type: 'JSFunction',
        value:
          'target => target.getProps().getPropValue("type").includes("text")',
      },
    },
    // {
    //   name: 'prefix',
    //   title: { label: '前缀', tip: '前缀' },
    //   propType: { type: 'oneOfType', value: ['string', 'node'] },
    // },
    // {
    //   name: 'suffix',
    //   title: { label: '后缀', tip: '后缀' },
    //   propType: { type: 'oneOfType', value: ['string', 'node'] },
    // },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onInput', 'onChange', 'onFocus', 'onBlur', 'onClear'],
    },
    component: {
      isContainer: false,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElInput',
}
