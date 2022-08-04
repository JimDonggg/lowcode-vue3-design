export default [
  {
    title: '主要按钮',
    screenshot: '/images/button-1.png',
    // screenshot: '/images/button-1.svg',
    schema: {
      componentName: 'ElButton',
      props: {
        children: ['主要按钮'],
        type: 'primary',
      },
    },
  },
  {
    title: '次要按钮',
    screenshot: '/images/button-2.png',
    schema: {
      componentName: 'ElButton',
      props: {
        children: ['次要按钮'],
      },
    },
  },
  {
    title: '危险按钮',
    screenshot: '/images/button-3.png',
    schema: {
      componentName: 'ElButton',
      props: {
        children: ['危险按钮'],
        type: 'danger',
      },
    },
  },
  {
    title: '图标按钮',
    screenshot: '/images/icon.png',
    schema: {
      componentName: 'ElButton',
      props: {
        icon: 'Edit',
        type: 'primary',
        round: true,
        circle: true,
      },
    },
  },
]
