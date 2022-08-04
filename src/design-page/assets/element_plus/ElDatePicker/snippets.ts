export default [
  {
    title: '日期选择器',
    screenshot: '/images/datetime.png',
    schema: {
      componentName: 'ElDatePicker',
      props: {
        type: 'date',
        placeholder: '请选择',
        format: 'YYYY-MM-DD',
      },
    },
  },
  {
    title: '日期区间',
    screenshot: '/images/datetime-range.png',
    schema: {
      componentName: 'ElDatePicker',
      props: {
        type: 'daterange',
        format: 'YYYY-MM-DD',
      },
    },
  },
]
