export default [
  {
    title: '两栏',
    screenshot: '/images/row-2.png',
    schema: {
      componentName: 'ElRow',
      props: {},
      children: [
        {
          componentName: 'ElCol',
          props: {
            span: 12,
          },
        },
        {
          componentName: 'ElCol',
          props: {
            span: 12,
          },
        },
      ],
    },
  },
  {
    title: '三栏',
    screenshot: '/images/row-3.png',
    schema: {
      componentName: 'ElRow',
      props: {},
      children: [
        {
          componentName: 'ElCol',
          props: {
            span: 8,
          },
        },
        {
          componentName: 'ElCol',
          props: {
            span: 8,
          },
        },
        {
          componentName: 'ElCol',
          props: {
            span: 8,
          },
        },
      ],
    },
  },
  {
    title: '四栏',
    screenshot: '/images/row-4.png',
    schema: {
      componentName: 'ElRow',
      props: {},
      children: [
        {
          componentName: 'ElCol',
          props: {
            span: 6,
          },
        },
        {
          componentName: 'ElCol',
          props: {
            span: 6,
          },
        },
        {
          componentName: 'ElCol',
          props: {
            span: 6,
          },
        },
        {
          componentName: 'ElCol',
          props: {
            span: 6,
          },
        },
      ],
    },
  },
]
