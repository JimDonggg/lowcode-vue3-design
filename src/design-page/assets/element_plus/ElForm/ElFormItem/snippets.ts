export default [
  {
    screenshot: '/images/form-item.png',
    title: '表单项',
    schema: {
      componentName: 'ElFormItem',
      props: {
        label: '标签',
        showMessage: true,
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
  },
]
