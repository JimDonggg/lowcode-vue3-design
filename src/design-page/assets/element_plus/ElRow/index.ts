import snippets from './snippets'

export default {
  group: '基础组件',
  category: '布局',
  componentName: 'ElRow',
  title: '栅格-栏',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElRow',
    destructuring: true,
  },
  props: [
    // {
    //   name: 'tag',
    //   propType: 'string',
    //   title: 'tag',
    //   setter: 'StringSetter',
    // },
    {
      name: 'gutter',
      propType: 'number',
      title: '栅格间隔',
      setter: false,
    },
    {
      name: 'justify',
      propType: 'string',
      title: '水平排列',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '左对齐',
                value: 'start',
              },
              {
                title: '右对齐',
                value: 'end',
              },
              {
                title: '居中',
                value: 'center',
              },
              {
                title: '间隔相等',
                value: 'space-around',
              },
              {
                title: '两端对齐',
                value: 'space-between',
              },
              // {
              //   title: '间隔相等',
              //   value: 'space-evenly',
              // },
            ],
          },
        },
        'VariableSetter',
      ],
      default: 'start',
    },
    {
      name: 'align',
      propType: 'string',
      title: '垂直排列',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '上对齐',
                value: 'top',
              },
              {
                title: '居中',
                value: 'middle',
              },
              {
                title: '下对齐',
                value: 'bottom',
              },
            ],
          },
        },
        'VariableSetter',
      ],
      default: 'top',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: [],
    },
    component: {
      isContainer: true,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElRow',
}
