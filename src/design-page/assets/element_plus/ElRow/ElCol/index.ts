import snippets from './snippets'

export default {
  group: '基础组件',
  category: '布局',
  title: '栅格-列',
  componentName: 'ElCol',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElCol',
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
      name: 'span',
      propType: 'number',
      title: '栅格列数',
      setter: false,
    },
    {
      name: 'offset',
      propType: 'number',
      title: '左侧的间隔格数',
    },
    {
      name: 'pull',
      propType: 'number',
      title: '栅格向左移动格数',
    },
    {
      name: 'push',
      propType: 'number',
      title: '栅格向右移动格数',
    },
    {
      name: 'xs',
      propType: {
        type: 'oneOfType',
        value: ['number'],
      },
      title: 'xs',
    },
    {
      name: 'sm',
      propType: {
        type: 'oneOfType',
        value: ['number'],
      },
      title: 'sm',
    },
    {
      name: 'md',
      propType: {
        type: 'oneOfType',
        value: ['number'],
      },
      title: 'md',
    },
    {
      name: 'lg',
      propType: {
        type: 'oneOfType',
        value: ['number'],
      },
      title: 'lg',
    },
    {
      name: 'xl',
      propType: {
        type: 'oneOfType',
        value: ['number'],
      },
      title: 'xl',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onClick'],
    },
    component: {
      isContainer: true,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElCol',
}
