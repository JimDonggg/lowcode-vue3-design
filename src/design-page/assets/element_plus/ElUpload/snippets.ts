export default [
  {
    title: '文件上传',
    screenshot: '/images/upload.png',
    schema: {
      componentName: 'ElUpload',
      props: {},
      children: [
        {
          componentName: 'ElButton',
          props: {
            children: ['上传'],
          },
        },
      ],
    },
  },
];
