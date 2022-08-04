export default [
  {
    title: 'tab-普通',
    screenshot: '/images/tabs-1.png',
    schema: {
      componentName: 'ElTabs',
      props: {
        activeName: 'tab-item-1',
        tabPosition: 'top',
      },
      children: [
        {
          componentName: 'ElTabPane',
          props: {
            label: '标签项1',
            name: 'tab-item-1',
          },
        },
        {
          componentName: 'ElTabPane',
          props: {
            label: '标签项2',
            name: 'tab-item-2',
          },
        },
      ],
    },
  },
  {
    title: 'tab-卡片',
    screenshot: '/images/tabs-2.png',
    schema: {
      componentName: 'ElTabs',
      props: {
        type: 'card',
      },
      children: [
        {
          componentName: 'ElTabPane',
          props: {
            label: '标签项1',
            name: 'tab-item-1',
          },
        },
        {
          componentName: 'ElTabPane',
          props: {
            label: '标签项2',
            name: 'tab-item-2',
          },
        },
      ],
    },
  },
]
