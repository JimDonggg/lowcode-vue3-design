export default [
  {
    screenshot: 'images/form.png',
    title: '表单容器',
    schema: {
      componentName: 'ElForm',
      props: {
        labelWidth: 120,
        labelPosition: 'right',
      },
      children: [
        {
          componentName: 'ElFormItem',
          props: {
            label: '用户名',
          },
          children: [
            {
              componentName: 'ElInput',
              props: {
                placeholder: '请输入',
              },
            },
          ],
        },
        {
          componentName: 'ElFormItem',
          props: {
            label: '密码',
          },
          children: [
            {
              componentName: 'ElInput',
              props: {
                type: 'password',
                placeholder: '请输入',
              },
            },
          ],
        },
        {
          componentName: 'ElFormItem',
          props: {
            label: '',
          },
          children: [
            {
              componentName: 'ElButton',
              props: {
                children: ['确定'],
                size: 'default',
                type: 'primary',
              },
            },
            {
              componentName: 'ElButton',
              props: {
                children: ['取消'],
                size: 'default',
              },
            },
          ],
        },
      ],
    },
  },
  {
    screenshot: '/images/form-search.png',
    title: '列表搜索框',
    schema: {
      componentName: 'ElForm',
      props: {
        // labelWidth: 120,
        labelPosition: 'right',
        inline: true,
      },
      children: [
        {
          componentName: 'ElFormItem',
          props: {
            label: '选项1',
          },
          children: [
            {
              componentName: 'ElInput',
              props: {
                placeholder: '请输入',
              },
            },
          ],
        },
        {
          componentName: 'ElFormItem',
          props: {
            label: '选项2',
          },
          children: [
            {
              componentName: 'ElInput',
              props: {
                placeholder: '请输入',
              },
            },
          ],
        },
        {
          componentName: 'ElFormItem',
          props: {
            label: '',
          },
          children: [
            {
              componentName: 'ElButton',
              props: {
                children: ['搜索'],
                size: 'default',
                type: 'primary',
              },
            },
            {
              componentName: 'ElButton',
              props: {
                children: ['重置'],
                size: 'default',
              },
            },
          ],
        },
      ],
    },
  },
]
