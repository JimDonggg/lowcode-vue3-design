export default [
  {
    title: '弹窗',
    screenshot: '/images/dialog.png',
    schema: {
      componentName: 'ElDialog',
      props: {
        'v-model': {
          type: 'JSExpression',
          value: 'true',
        },
        title: '标题',
        footer: {
          type: 'JSSlot',
          value: [
            {
              componentName: 'ElButton',
              props: {
                children: '取消',
                size: 'default',
              },
            },
            {
              componentName: 'ElButton',
              props: {
                children: '确定',
                size: 'default',
                type: 'primary',
              },
            },
          ],
        },
      },
      children: [],
    },
  },
]
