// import iconSelectSetter from '../setter/iconSelectSetter'
import snippets from './snippets'

export default {
  group: '基础组件',
  category: '基础',
  componentName: 'ElLink',
  title: '链接',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElLink',
    destructuring: true,
  },
  props: [
    {
      name: 'children',
      title: '内容',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
      setter: ['StringSetter', 'SlotSetter', 'VariableSetter'],
    },
    {
      name: 'href',
      propType: 'string',
      title: 'href｜链接',
    },
    {
      name: 'type',
      propType: 'string',
      title: '类型',
      defaultValue: 'default',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '默认',
                value: 'default',
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
                title: '提示',
                value: 'info',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'underline',
      propType: 'bool',
      title: '下划线',
      setter: 'BoolSetter',
      defaultValue: true,
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
    //   title: '图标',
    //   setter: iconSelectSetter,
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
  keywords: 'ElLink',
}
