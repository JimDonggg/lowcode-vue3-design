// import iconSelectSetter from '../setter/iconSelectSetter'
import snippets from './snippets'

export default {
  group: '基础组件',
  category: '基础',
  componentName: 'ElButton',
  title: '按钮',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElButton',
    destructuring: true,
  },
  props: [
    {
      name: 'children',
      propType: {
        type: 'oneOfType',
        value: ['node', 'string'],
      },
      title: '内容',
      setter: ['SlotSetter', 'StringSetter', 'VariableSetter'],
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
                title: '主要',
                value: 'primary',
              },
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
    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
    },
    // {
    //   name: 'icon',
    //   propType: 'string',
    //   title: '图标组件',
    //   setter: iconSelectSetter,
    // },
    {
      name: 'loading',
      propType: 'bool',
      title: '加载状态',
      setter: 'BoolSetter',
    },
    // {
    //   name: 'loadingIcon',
    //   propType: {
    //     type: 'oneOfType',
    //     value: ['string', 'func'],
    //   },
    //   title: '自定义加载中状态图标',
    //   setter: false,
    // },
    {
      name: 'plain',
      propType: 'bool',
      title: '朴素按钮',
      setter: 'BoolSetter',
    },
    {
      name: 'text',
      propType: 'bool',
      title: '文字按钮',
      setter: 'BoolSetter',
    },
    {
      name: 'link',
      propType: 'bool',
      title: '链接按钮',
      setter: 'BoolSetter',
    },
    // {
    //   name: 'bg',
    //   propType: 'bool',
    //   title: '是否显示文字按钮背景颜色',
    //   setter: 'BoolSetter',
    // },
    // {
    //   name: 'autofocus',
    //   propType: 'bool',
    //   title: '默认选中',
    //   setter: 'BoolSetter',
    // },
    {
      name: 'round',
      propType: 'bool',
      title: '圆角按钮',
      setter: 'BoolSetter',
    },
    {
      name: 'circle',
      propType: 'bool',
      title: '圆形按钮',
      setter: 'BoolSetter',
    },
    // {
    //   name: 'autoInsertSpace',
    //   propType: 'bool',
    //   title: '自动在两个中文字符之间插入空格',
    //   setter: 'BoolSetter',
    // },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onClick'],
    },
    component: {
      isContainer: false,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElButton',
}
