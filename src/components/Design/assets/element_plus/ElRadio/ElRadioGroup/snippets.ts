export default [
  {
    title: '单选按钮组',
    screenshot: '/images/radio-group.png',
    schema: {
      componentName: 'ElRadioGroup',
      children: [
        {
          componentName: 'ElRadio',
          props: {
            children: ['单选框1'],
            label: 'value1',
          },
        },
        {
          componentName: 'ElRadio',
          props: {
            children: ['单选框2'],
            label: 'value2',
          },
        },
      ],
    },
  },
];
