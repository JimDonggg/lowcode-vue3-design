import snippets from './snippets'

export default {
  group: '基础组件',
  category: '反馈',
  componentName: 'ElDrawer',
  title: '抽屉',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElDrawer',
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
      name: 'title',
      propType: {
        type: 'oneOfType',
        value: ['node', 'string'],
      },
      title: '标题',
      setter: ['SlotSetter', 'StringSetter', 'VariableSetter'],
    },
    {
      name: 'size',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      title: '窗口宽度',
      defaultValue: 30,
    },
    {
      name: 'direction',
      propType: 'string',
      title: '打开的方向',
      defaultValue: 'rtl',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '从右到左',
                value: 'rtl',
              },
              {
                title: '从左到右',
                value: 'ltr',
              },
              {
                title: '上到下',
                value: 'ttb',
              },
              {
                title: '下到上',
                value: 'btt',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'modal',
      propType: 'bool',
      title: '是否遮罩',
      setter: 'BoolSetter',
      defaultValue: true,
    },
    {
      name: 'showClose',
      propType: 'bool',
      title: '显示关闭按钮',
      setter: 'BoolSetter',
      defaultValue: true,
    },
    {
      name: 'beforeClose',
      propType: 'func',
      title: '关闭前回调',
    },
    {
      name: 'destroyOnClose',
      propType: 'bool',
      title: '关闭销毁内容',
      setter: 'BoolSetter',
    },
    {
      name: 'closeOnClickModal',
      propType: 'bool',
      title: '点击遮罩关闭',
      setter: 'BoolSetter',
      defaultValue: true,
    },
    {
      name: 'closeOnPressEscape',
      propType: 'bool',
      title: 'ESC关闭',
      setter: 'BoolSetter',
      defaultValue: true,
    },
    {
      name: 'lockScroll',
      propType: 'bool',
      title: '滚动锁定',
      setter: 'BoolSetter',
      defaultValue: true,
    },

    {
      name: 'openDelay',
      propType: 'number',
      title: '打开延时',
    },
    {
      name: 'closeDelay',
      propType: 'number',
      title: '关闭延时',
    },
    {
      name: 'customClass',
      propType: 'string',
      title: {
        label: '自定义类名',
        tip: 'Drawer 的自定义类名',
      },
      setter: 'StringSetter',
    },
    {
      name: 'modalClass',
      propType: 'string',
      title: '遮罩自定义类名',
      setter: 'StringSetter',
    },
    {
      name: 'footer',
      title: { label: '底部操作', tip: 'Dialog 按钮操作区的内容' },
      propType: { type: 'oneOfType', value: ['node'] },
    },
    {
      name: 'zIndex',
      propType: 'number',
      title: {
        label: '层级',
        tip: 'z-index',
      },
      setter: 'NumberSetter',
    },
    {
      name: 'withHeader',
      propType: 'bool',
      title: '显示头部',
      setter: 'BoolSetter',
      defaultValue: true,
    },
    {
      name: 'appendToBody',
      propType: 'bool',
      title: {
        label: '插入到body',
        tip: '嵌套的 Drawer 必须指定该属性并赋值为 true',
      },
      setter: 'BoolSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onOpen', 'onOpened', 'onClose', 'onClosed'],
    },
    component: {
      isContainer: true,
      isModal: true,
    },
  },
  snippets,
  keywords: 'ElDrawer',
}
