import snippets from './snippets'

export default {
  group: '基础组件',
  category: '表单',
  componentName: 'ElInputNumber',
  title: '数字输入框',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElInputNumber',
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
      name: 'min',
      propType: 'number',
      title: '最小值',
      setter: 'NumberSetter',
    },
    {
      name: 'max',
      propType: 'number',
      title: '最大值',
      setter: 'NumberSetter',
    },
    {
      name: 'step',
      propType: 'number',
      title: '计数器步长',
      setter: 'NumberSetter',
    },
    {
      name: 'stepStrictly',
      propType: 'bool',
      title: '只能输入步长倍数',
      setter: 'BoolSetter',
    },
    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
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
      name: 'controls',
      propType: 'bool',
      title: '使用控制按钮',
      setter: 'BoolSetter',
      defaultValue: true,
    },
    {
      name: 'controlsPosition',
      propType: 'string',
      title: '控制按钮位置',
      defaultValue: '',
      setter: [
        {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '两侧',
                value: '',
              },
              {
                title: '右侧',
                value: 'right',
              },
            ],
          },
        },
        'VariableSetter',
      ],
      condition: {
        type: 'JSFunction',
        value: 'target => !!target.getProps().getPropValue("controls")',
      },
    },
    // {
    //   name: 'valueOnClear',
    //   propType: {
    //     type: 'oneOfType',
    //     value: ['string', 'number', 'any'],
    //   },
    //   title: 'valueOnClear',
    //   setter: false,
    // },
    {
      name: 'precision',
      propType: 'number',
      title: '数值精度',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onChange', 'onBlur', 'onFocus'],
    },
    component: {
      isContainer: false,
      isModal: false,
    },
  },
  snippets,
  // snippets: [
  //   {
  //     title: '数字输入框',
  //     screenshot:
  //       'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/input-number-1.png',
  //     schema: {
  //       componentName: 'ElInputNumber',
  //       props: {
  //         placeholder: '请输入',
  //       },
  //     },
  //   },
  // ],
  keywords: 'ElInputNumber',
}
