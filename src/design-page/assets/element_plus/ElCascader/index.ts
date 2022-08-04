import snippets from './snippets'

export default {
  group: '基础组件',
  category: '表单',
  componentName: 'ElCascader',
  title: '级联选择',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElCascader',
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
      name: 'options',
      title: { label: '选项数据', tip: '可选项数据源' },
      setter: 'JsonSetter',
    },
    {
      name: 'props',
      title: { label: '配置选项', tip: 'props｜参考element-plus' },
      setter: 'JsonSetter',
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
    {
      name: 'placeholder',
      propType: 'string',
      title: '输入提示',
      setter: 'StringSetter',
    },
    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
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
      title: '支持搜索',
      setter: 'BoolSetter',
    },
    {
      name: 'filterMethod',
      propType: 'func',
      title: '自定义搜索方法',
    },
    {
      name: 'separator',
      propType: 'string',
      title: '分隔符',
      defaultValue: '/',
      setter: 'StringSetter',
    },
    {
      name: 'showAllLevels',
      propType: 'bool',
      title: { label: '完整路径', tip: '输入框中是否显示选中值的完整路径' },
      setter: 'BoolSetter',
    },
    {
      name: 'collapseTags',
      propType: 'bool',
      title: { label: '折叠Tag', tip: '多选模式下可用' },
      setter: 'BoolSetter',
    },
    // {
    //   name: 'collapseTagsTooltip',
    //   propType: 'bool',
    //   title: { label: '折叠Tag', tip: '多选模式下可用' },
    //   setter: 'BoolSetter',
    // },
    // {
    //   name: 'debounce',
    //   propType: 'number',
    //   title: 'debounce',
    //   setter: false,
    // },
    {
      name: 'beforeFilter',
      propType: 'func',
      title: 'beforeFilter',
    },
    // {
    //   name: 'popperClass',
    //   propType: 'string',
    //   title: 'popperClass',
    //   setter: 'StringSetter',
    // },
    // {
    //   name: 'teleported',
    //   propType: 'bool',
    //   title: 'teleported',
    //   setter: 'BoolSetter',
    // },
    {
      name: 'tagType',
      propType: 'string',
      title: '标签类型',
      defaultValue: 'info',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
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
                value: 'danger',
              },
              {
                title: '信息',
                value: 'info',
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
      events: [
        'onChange',
        'onExpandChange',
        'onGetCheckedNodes',
        'onClearCheckedNodes',
      ],
    },
    component: {
      isContainer: false,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElCascader',
}
