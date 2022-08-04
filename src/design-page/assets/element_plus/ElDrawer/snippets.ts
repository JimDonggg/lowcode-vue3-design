export default [
  {
    title: '侧边抽屉',
    screenshot: '/images/drawer-1.png',
    schema: {
      componentName: 'ElDrawer',
      props: {
        title: '侧边抽屉',
        'v-model': {
          type: 'JSExpression',
          value: 'true',
        },
        direction: 'rtl',
        destroyOnClose: true,
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
    },
  },
  {
    title: '底部抽屉',
    screenshot: '/images/drawer-2.png',
    schema: {
      componentName: 'ElDrawer',
      props: {
        title: '底部抽屉',
        'v-model': {
          type: 'JSExpression',
          value: 'true',
        },
        direction: 'btt',
        destroyOnClose: true,
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
    },
  },
]
