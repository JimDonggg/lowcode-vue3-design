export default [
  {
    title: '按钮组',
    screenshot: '/images/button-group.png',
    schema: {
      componentName: 'ElButtonGroup',
      children: [
        {
          componentName: 'ElButton',
          props: {
            children: ['按钮1'],
            type: 'primary',
          },
        },
        {
          componentName: 'ElButton',
          props: {
            children: ['按钮2'],
          },
        },
      ],
    },
  },
]
