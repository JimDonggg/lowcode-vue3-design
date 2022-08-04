export default [
  {
    screenshot: '/images/table-1.png',
    title: '表格',
    schema: {
      componentName: 'NDataTable',
      props: {
        data: [
          { no: 3, title: 'Wonderwall', length: '4:18' },
          { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
          { no: 12, title: 'Champagne Supernova', length: '7:27' },
        ],
        columns: [
          {
            title: 'No',
            key: 'no',
          },
          {
            title: 'Title',
            key: 'title',
          },
          {
            title: 'Length',
            key: 'length',
          },
        ],
        bordered: true,
        size: 'medium',
      },
    },
  },
]
