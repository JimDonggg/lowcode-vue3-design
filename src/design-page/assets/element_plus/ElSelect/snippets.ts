export default [
  {
    title: '选择框',
    screenshot: '/images/select.png',
    schema: {
      componentName: 'ElSelect',
      props: {
        clearable: true,
      },
      children: [
        {
          componentName: 'ElOption',
          props: {
            label: '选项1',
            value: 'value1',
          },
        },
        {
          componentName: 'ElOption',
          props: {
            label: '选项2',
            value: 'value2',
          },
        },
      ],
    },
  },
]
