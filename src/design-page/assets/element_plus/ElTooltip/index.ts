import snippets from './snippets'

export default {
  group: '基础组件',
  category: '反馈',
  componentName: 'ElTooltip',
  title: '文字提示',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElTooltip',
    destructuring: true,
  },
  props: [
    {
      name: 'content',
      propType: ['string', 'node'],
      title: '内容',
      setter: 'StringSetter',
    },
    {
      name: 'rawContent',
      propType: 'bool',
      title: {
        label: '支持HTML',
        tip: 'content 中的内容是否作为 HTML 字符串处理',
      },
      setter: 'BoolSetter',
    },
    {
      name: 'placement',
      propType: 'string',
      title: '出现位置',
      defaultValue: 'bottom',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '上左对齐',
                value: 'top-start',
              },
              {
                title: '上居中对齐',
                value: 'top',
              },
              {
                title: '上右对齐',
                value: 'top-end',
              },
              {
                title: '下左对齐',
                value: 'bottom-start',
              },
              {
                title: '下居中对齐',
                value: 'bottom',
              },
              {
                title: '下右对齐',
                value: 'bottom-end',
              },
              {
                title: '左上对齐',
                value: 'left-start',
              },
              {
                title: '左居中对齐',
                value: 'left',
              },
              {
                title: '左下对齐',
                value: 'left-end',
              },
              {
                title: '右上对齐',
                value: 'right-start',
              },
              {
                title: '右居中对齐',
                value: 'right',
              },
              {
                title: '右下对齐',
                value: 'right-end',
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
      name: 'trigger',
      propType: 'string',
      title: '触发方式',
      defaultValue: 'hover',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '悬浮',
                value: 'hover',
              },
              {
                title: '点击',
                value: 'click',
              },
              {
                title: '聚焦',
                value: 'focus',
              },
              {
                title: '右键',
                value: 'contextmenu',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'offset',
      propType: 'number',
      title: '位置偏移量',
      setter: 'NumberSetter',
    },
    // {
    //   name: 'visible',
    //   propType: 'bool',
    //   title: 'visible',
    //   setter: 'BoolSetter',
    // },
    {
      name: 'showAfter',
      propType: 'number',
      title: {
        label: '延迟出现',
        tip: '毫秒',
      },
    },
    {
      name: 'hideAfter',
      propType: 'number',
      title: {
        label: '延迟关闭',
        tip: '毫秒',
      },
      setter: 'NumberSetter',
      defaultValue: 200,
    },
    {
      name: 'popperOptions',
      propType: 'object',
      title: '弹出配置',
      setter: 'JsonSetter',
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
      defaultValue: 'dark',
    },
    {
      name: 'enterable',
      propType: 'bool',
      title: '鼠标可到tooltip中',
      setter: 'BoolSetter',
    },
    {
      name: 'popperClass',
      propType: 'string',
      title: {
        label: '自定义类名',
        tip: 'popper自定义类名',
      },
    },
    // {
    //   name: 'virtualTriggering',
    //   propType: 'bool',
    //   title: 'virtualTriggering',
    //   setter: 'BoolSetter',
    // },
    // {
    //   name: 'appendTo',
    //   propType: {
    //     type: 'oneOfType',
    //     value: ['string'],
    //   },
    //   title: 'appendTo',
    // },
    // {
    //   name: 'transition',
    //   propType: 'string',
    //   title: '动画名称',
    //   setter: 'StringSetter',
    //   defaultValue: 'el-fade-in-linear',
    // },
    // {
    //   name: 'teleported',
    //   propType: 'bool',
    //   title: 'teleported',
    //   setter: 'BoolSetter',
    // },
    // {
    //   name: 'virtualRef',
    //   propType: 'object',
    //   title: 'virtualRef',
    // },
    // {
    //   name: 'visibleArrow',
    //   propType: 'bool',
    //   title: 'visibleArrow',
    //   setter: 'BoolSetter',
    // },
    // {
    //   name: 'showArrow',
    //   propType: 'bool',
    //   title: 'showArrow',
    //   setter: 'BoolSetter',
    // },
  ],
  configure: {
    supports: {
      style: false,
      loop: true,
      events: false,
    },
    component: {
      isContainer: true,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElTooltip',
}
