import snippets from './snippets';

export default {
  group: '基础组件',
  category: '表单',
  componentName: 'ElDatePicker',
  title: '日期选择器',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElDatePicker',
    destructuring: true,
  },
  props: [
    {
      name: 'v-model',
      propType: 'string',
      title: 'v-model',
      setter: 'ExpressionSetter',
    },

    // {
    //   name: 'popperClass',
    //   propType: 'string',
    //   title: 'popperClass',
    //   setter: 'StringSetter',
    // },
    {
      name: 'format',
      propType: 'string',
      title: '显示格式',
      setter: 'StringSetter',
    },
    {
      name: 'valueFormat',
      propType: 'string',
      title: '值格式',
      setter: 'StringSetter',
    },
    {
      name: 'type',
      propType: 'string',
      title: '显示类型',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '年',
                value: 'year',
              },
              {
                title: '月',
                value: 'month',
              },
              {
                title: '星期',
                value: 'week',
              },
              {
                title: '天',
                value: 'date',
              },
              {
                title: '日期时间',
                value: 'datetime',
              },
              {
                title: '月范围',
                value: 'monthrange',
              },
              {
                title: '日期范围',
                value: 'daterange',
              },
              {
                title: '日期时间范围',
                value: 'datetimerange',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'placeholder',
      propType: 'string',
      title: '输入提示',
      setter: 'StringSetter',
      condition: {
        type: 'JSFunction',
        value: 'target => !target.getProps().getPropValue("type").includes("range")',
      },
    },
    {
      name: 'startPlaceholder',
      propType: 'string',
      title: '开始输入提示',
      setter: 'StringSetter',
      condition: {
        type: 'JSFunction',
        value: 'target => target.getProps().getPropValue("type").includes("range")',
      },
    },
    {
      name: 'endPlaceholder',
      propType: 'string',
      title: '结束输入提示',
      setter: 'StringSetter',
      condition: {
        type: 'JSFunction',
        value: 'target => target.getProps().getPropValue("type").includes("range")',
      },
    },
    {
      name: 'clearable',
      propType: 'bool',
      title: '支持清除',
      defaultValue: true,
      setter: 'BoolSetter',
    },
    // {
    //   name: 'clearIcon',
    //   propType: {
    //     type: 'oneOfType',
    //     value: ['string'],
    //   },
    //   title: 'clearIcon',
    //   setter: false,
    // },
    {
      name: 'editable',
      propType: 'bool',
      title: '支持输入',
      defaultValue: true,
      setter: 'BoolSetter',
    },
    // {
    //   name: 'prefixIcon',
    //   propType: {
    //     type: 'oneOfType',
    //     value: ['string'],
    //   },
    //   title: 'prefixIcon',
    // },
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
      name: 'readonly',
      propType: 'bool',
      title: '是否只读',
      setter: 'BoolSetter',
    },
    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
    },
    {
      name: 'rangeSeparator',
      propType: 'string',
      title: '分隔符',
      defaultValue: '-',
      setter: 'StringSetter',
    },
    // {
    //   name: 'startPlaceholder',
    //   propType: 'string',
    //   title: 'startPlaceholder',
    //   setter: 'StringSetter',
    // },
    // {
    //   name: 'endPlaceholder',
    //   propType: 'string',
    //   title: 'endPlaceholder',
    //   setter: 'StringSetter',
    // },
    // {
    //   name: 'defaultValue',
    //   propType: {
    //     type: 'oneOfType',
    //     value: ['string', 'array'],
    //   },
    //   title: 'defaultValue',
    // },
    // {
    //   name: 'defaultTime',
    //   propType: {
    //     type: 'oneOfType',
    //     value: ['string', 'array'],
    //   },
    //   title: 'defaultTime',
    //   setter: false,
    // },
    // {
    //   name: 'cellClassName',
    //   propType: 'func',
    //   title: '自定义类名',
    // },
    // {
    //   name: 'shortcuts',
    //   propType: 'array',
    //   title: '快捷选项',
    // },
    {
      name: 'unlinkPanels',
      propType: 'bool',
      title: {
        label: '面板联动',
        tip: '只能在范围选择器中使用',
      },
      setter: 'BoolSetter',
      condition: {
        type: 'JSFunction',
        value: 'target => target.getProps().getPropValue("type").includes("range")',
      },
    },
    {
      name: 'disabledDate',
      propType: 'func',
      title: {
        label: '日期禁用',
        tip: 'disabled-date',
      },
      setter: 'FunctionSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onChange', 'onBlur', 'onFocus', 'onCalendarChange', 'onVisibleChange'],
    },
    component: {
      isContainer: false,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElDatePicker',
};
