import snippets from './snippets';

export default {
  group: '基础组件',
  category: '表单',
  componentName: 'ElOption',
  title: '选择框项',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElOption',
    destructuring: true,
  },
  props: [
    {
      name: 'label',
      propType: 'string',
      title: '标签',
    },
    {
      name: 'value',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number', 'bool'],
      },
      title: '值｜value',
    },
    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: [],
    },
    component: {
      isContainer: false,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElOption',
};
