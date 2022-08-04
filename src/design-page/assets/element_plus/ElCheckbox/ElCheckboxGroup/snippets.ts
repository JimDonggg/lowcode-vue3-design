export default [
  {
    title: '多选框组',
    screenshot: '/images/checkbox-group.png',
    schema: {
      componentName: 'ElCheckboxGroup',
      props: {
        max: 2,
      },
      children: [
        {
          componentName: 'ElCheckbox',
          props: {
            children: ['多选框1'],
            size: 'default',
            label: 'value1',
          },
        },
        {
          componentName: 'ElCheckbox',
          props: {
            children: ['多选框2'],
            size: 'default',
            label: 'value2',
          },
        },
      ],
    },
  },
]
