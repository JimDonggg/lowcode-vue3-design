import snippets from './snippets'

export default {
  group: '基础组件',
  category: '表单',
  componentName: 'ElForm',
  title: '表单容器',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElForm',
    destructuring: true,
  },
  props: [
    {
      name: 'model',
      propType: 'object',
      title: '数据对象',
      setter: 'ExpressionSetter',
    },
    {
      name: 'rules',
      propType: 'object',
      title: '验证规则',
      setter: 'JsonSetter',
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
      name: 'labelPosition',
      propType: 'string',
      title: '标签位置',
      setter: [
        {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '左',
                value: 'left',
              },
              {
                title: '右',
                value: 'right',
              },
              {
                title: '上',
                value: 'top',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'labelWidth',
      propType: {
        type: 'oneOfType',
        value: ['number', 'string'],
      },
      title: '标签宽度',
    },
    // {
    //   name: 'labelSuffix',
    //   propType: 'string',
    //   title: '标签后缀',
    //   setter: 'StringSetter',
    // },
    {
      name: 'inline',
      propType: 'bool',
      title: '行内表单',
      setter: 'BoolSetter',
    },
    {
      name: 'inlineMessage',
      propType: 'bool',
      title: '行内校验信息',
      setter: 'BoolSetter',
    },
    {
      name: 'showMessage',
      propType: 'bool',
      title: '显示错误信息',
      setter: 'BoolSetter',
    },

    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
    },
    // {
    //   name: 'validateOnRuleChange',
    //   propType: 'bool',
    //   title: 'validateOnRuleChange',
    //   setter: 'BoolSetter',
    // },
    {
      name: 'hideRequiredAsterisk',
      propType: 'bool',
      title: '隐藏必填标记',
      setter: 'BoolSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onValidate'],
    },
    component: {
      isContainer: true,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElForm',
}
