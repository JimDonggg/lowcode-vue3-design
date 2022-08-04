import snippets from './snippets'

export default {
  group: '基础组件',
  category: '表单',
  componentName: 'ElSelect',
  title: '选择框',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElSelect',
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
      defaultValue: '请输入',
    },
    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
    },
    // {
    //   name: 'multiple',
    //   propType: 'bool',
    //   title: '支持多选',
    // },
    // {
    //   name: 'multipleLimit',
    //   propType: 'number',
    //   title: {
    //     label: '最多可选数',
    //     tip: '多选模式可用， 为 0 则不限制',
    //   },
    //   condition: {
    //     type: 'JSFunction',
    //     value: '!!target => target.getProps().getPropValue("multiple")',
    //   },
    // },
    // {
    //   name: 'autocomplete',
    //   propType: 'string',
    //   title: 'autocomplete',
    //   setter: 'StringSetter',
    // },
    // {
    //   name: 'automaticDropdown',
    //   propType: 'bool',
    //   title: 'automaticDropdown',
    //   setter: 'BoolSetter',
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
      name: 'effect',
      propType: 'string',
      title: '主题',
      setter: [
        {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '明亮',
                value: 'light',
              },
              {
                title: '暗黑',
                value: 'dark',
              },
            ],
          },
        },
        'VariableSetter',
      ],
      defaultValue: 'light',
    },
    {
      name: 'clearable',
      propType: 'bool',
      title: '支持清除',
      setter: 'BoolSetter',
    },
    {
      name: 'filterable',
      propType: 'bool',
      title: '支持筛选',
    },
    {
      name: 'noMatchText',
      propType: 'string',
      title: '搜索缺省文本',
    },
    {
      name: 'allowCreate',
      propType: 'bool',
      title: {
        label: '允许创建新条目',
        tip: '只有当 filterable 设置为 true 时才会生效',
      },
    },
    {
      name: 'popperClass',
      propType: 'string',
      title: {
        label: '下拉框的className',
        tip: '用于修改样式',
      },
    },
    // {
    //   name: 'loading',
    //   propType: 'bool',
    //   title: '远程加载',
    // },
    // {
    //   name: 'loadingText',
    //   propType: 'string',
    //   title: 'loading文本',
    // },
    {
      name: 'noDataText',
      propType: 'string',
      title: '无选项缺省文本',
    },
    {
      name: 'remote',
      propType: 'bool',
      title: '远程加载',
    },
    {
      name: 'remoteMethod',
      propType: 'func',
      title: '远程搜索方法',
    },
    {
      name: 'filterMethod',
      propType: 'func',
      title: '自定义筛选方法',
    },
    // {
    //   name: 'defaultFirstOption',
    //   propType: 'bool',
    //   title: 'defaultFirstOption',
    //   setter: 'BoolSetter',
    // },
    // {
    //   name: 'reserveKeyword',
    //   propType: 'bool',
    //   title: 'reserveKeyword',
    //   setter: 'BoolSetter',
    // },
    {
      name: 'valueKey',
      propType: 'string',
      title: {
        label: '作为 value 唯一标识的键名',
        tip: '绑定值为对象类型时必填',
      },
    },
    // {
    //   name: 'collapseTags',
    //   propType: 'bool',
    //   title: 'collapseTags',
    //   setter: 'BoolSetter',
    // },
    // {
    //   name: 'collapseTagsTooltip',
    //   propType: 'bool',
    //   title: 'collapseTagsTooltip',
    //   setter: 'BoolSetter',
    // },
    {
      name: 'teleported',
      propType: 'bool',
      title: '挂载至body',
      setter: true,
    },
    // {
    //   name: 'persistent',
    //   propType: 'bool',
    //   title: 'persistent',
    // },
    // {
    //   name: 'clearIcon',
    //   propType: {
    //     type: 'oneOfType',
    //     value: ['string'],
    //   },
    //   title: 'clearIcon',
    // },
    {
      name: 'fitInputWidth',
      propType: 'bool',
      title: '下拉框的宽度与输入框相同',
    },
    // {
    //   name: 'suffixIcon',
    //   propType: {
    //     type: 'oneOfType',
    //     value: ['string'],
    //   },
    //   title: 'suffixIcon',
    //   setter: false,
    // },
    // {
    //   name: 'tagType',
    //   propType: 'string',
    //   title: 'tagType',
    // },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: [
        'onChange',
        'onClear',
        'onBlur',
        'onFocus',
        'onVisibleChange',
        'onRemoveTag',
      ],
    },
    component: {
      isContainer: true,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElSelect',
}
