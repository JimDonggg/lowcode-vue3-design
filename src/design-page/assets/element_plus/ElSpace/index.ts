export default {
  group: '基础组件',
  category: '布局',
  componentName: 'ElSpace',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElSpace',
    destructuring: true,
  },
  props: [
    {
      name: 'direction',
      propType: 'string',
      title: 'direction',
      setter: 'StringSetter',
    },
    {
      name: 'class',
      propType: {
        type: 'oneOfType',
        value: ['string', 'array'],
      },
      title: 'class',
      setter: false,
    },
    {
      name: 'style',
      propType: {
        type: 'oneOfType',
        value: ['string', 'array'],
      },
      title: 'style',
      setter: false,
    },
    {
      name: 'alignment',
      propType: 'string',
      title: 'alignment',
      setter: 'StringSetter',
    },
    {
      name: 'prefixCls',
      propType: 'string',
      title: 'prefixCls',
      setter: 'StringSetter',
    },
    {
      name: 'spacer',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number', 'array'],
      },
      title: 'spacer',
      setter: false,
    },
    {
      name: 'wrap',
      propType: 'bool',
      title: 'wrap',
      setter: 'BoolSetter',
    },
    {
      name: 'fill',
      propType: 'bool',
      title: 'fill',
      setter: 'BoolSetter',
    },
    {
      name: 'fillRatio',
      propType: 'number',
      title: 'fillRatio',
      setter: false,
    },
    {
      name: 'size',
      propType: {
        type: 'oneOfType',
        value: ['string', 'array', 'number'],
      },
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
  keywords: 'ElSpace',
}
