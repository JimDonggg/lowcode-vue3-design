import snippets from './snippets'

export default {
  group: '基础组件',
  category: '反馈',
  componentName: 'ElDialog',
  title: '弹窗',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElDialog',
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
      propType: 'string',
      title: '标题',
      setter: 'StringSetter',
    },
    {
      name: 'width',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      title: '宽度',
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
      name: 'center',
      propType: 'bool',
      title: '内容居中',
      setter: 'BoolSetter',
    },
    {
      name: 'top',
      propType: 'string',
      title: '距离顶部',
      setter: 'StringSetter',
      defaultValue: '15vh',
    },
    {
      name: 'customClass',
      propType: 'string',
      title: {
        label: '自定义类名',
        tip: 'Dialog 的class类名，用于修改样式',
      },
      setter: 'StringSetter',
    },
    // {
    //   name: 'draggable',
    //   propType: 'bool',
    //   title: '弹窗可拖拽',
    //   setter: 'BoolSetter',
    // },
    {
      name: 'fullscreen',
      propType: 'bool',
      title: '是否全屏',
      setter: 'BoolSetter',
    },
    {
      name: 'showClose',
      propType: 'bool',
      title: '显示关闭按钮',
      setter: 'BoolSetter',
      defaultValue: true,
    },

    // {
    //   name: 'appendToBody',
    //   propType: 'bool',
    //   title: 'appendToBody',
    //   setter: 'BoolSetter',
    // },
    {
      name: 'beforeClose',
      propType: 'func',
      title: '关闭前的回调',
      setter: 'FunctionSetter',
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
      name: 'modal',
      propType: 'bool',
      title: '显示遮罩',
      setter: 'BoolSetter',
      defaultValue: true,
    },
    // {
    //   name: 'openDelay',
    //   propType: 'number',
    //   title: 'openDelay',
    // },
    // {
    //   name: 'closeDelay',
    //   propType: 'number',
    //   title: 'closeDelay',
    // },
    {
      name: 'footer',
      title: { label: '底部操作', tip: 'Dialog 按钮操作区的内容' },
      propType: { type: 'oneOfType', value: ['node'] },
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: [
        'onOpen',
        'onOpened',
        'onClose',
        'onClosed',
        'onOpenAutoFocus',
        'onCloseAutoFocus',
      ],
    },
    component: {
      isContainer: true,
      isModal: true,
    },
  },
  snippets,
  keywords: 'ElDialog',
}
