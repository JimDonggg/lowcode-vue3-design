import snippets from './snippets'

export default {
  group: '基础组件',
  category: '导航',
  componentName: 'ElTabs',
  title: '标签页-tabs',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElTabs',
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
      name: 'activeName',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      title: {
        label: '激活Tab',
        tip: '当前激活Tab ｜ activeName',
      },
      setter: false,
    },
    {
      name: 'type',
      propType: 'string',
      title: '类型',
      defaultValue: '',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '默认',
                value: '',
              },
              {
                title: '卡片',
                value: 'card',
              },
              {
                title: '带边框带卡片',
                value: 'border-card',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },

    {
      name: 'closable',
      propType: 'bool',
      title: '标签可关闭',
      setter: 'BoolSetter',
    },
    {
      name: 'addable',
      propType: 'bool',
      title: '标签可增加',
      setter: 'BoolSetter',
    },
    {
      name: 'editable',
      propType: 'bool',
      title: '标签可增加、关闭',
      setter: 'BoolSetter',
    },
    {
      name: 'tabPosition',
      propType: 'string',
      title: '选项卡位置',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '上',
                value: 'top',
              },
              {
                title: '左',
                value: 'left',
              },
              {
                title: '下',
                value: 'bottom',
              },
              {
                title: '右',
                value: 'right',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'stretch',
      propType: 'bool',
      title: '宽度自撑开',
      setter: 'BoolSetter',
    },
    {
      name: 'beforeLeave',
      propType: 'func',
      title: 'beforeLeave',
      setter: 'FunctionSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: [
        'onTabClick',
        'onTabChange',
        'onEdit',
        'onTabRemove',
        'onTabAdd',
      ],
    },
    component: {
      isContainer: true,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElTabs',
}
