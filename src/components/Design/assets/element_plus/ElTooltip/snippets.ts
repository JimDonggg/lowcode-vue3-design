export default [
  {
    title: '文字提示',
    screenshot: '/images/tooltip-1.png',
    schema: {
      componentName: 'ElTooltip',
      props: {
        content: '提示内容',
        popperClass: 'el-tooltip',
      },
      children: [
        {
          componentName: 'ElButton',
          props: {
            children: ['按钮'],
            size: 'default',
            type: 'primary',
          },
        },
      ],
    },
  },
  {
    title: '图标按钮提示',
    screenshot: '/images/button-tooltip.png',
    schema: {
      componentName: 'ElTooltip',
      props: {
        content: '编辑',
        popperClass: 'el-tooltip',
        props: {
          offset: 10,
        },
      },
      children: [
        {
          componentName: 'ElButton',
          props: {
            size: 'default',
            type: 'primary',
            link: true,
            icon: 'Edit',
          },
        },
      ],
    },
  },
];
