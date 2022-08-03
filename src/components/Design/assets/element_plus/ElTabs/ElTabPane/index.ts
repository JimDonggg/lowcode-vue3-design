import snippets from './snippets';

export default {
  group: '基础组件',
  category: '导航',
  title: 'tab面板',
  componentName: 'ElTabPane',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElTabPane',
    destructuring: true,
  },
  props: [
    {
      name: 'label',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
      title: '选项卡标题',
    },
    {
      name: 'name',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      title: {
        label: '激活标识符',
        tip: 'name｜与选项卡绑定值 value 对应的标识符',
      },
    },
    {
      name: 'closable',
      propType: 'bool',
      title: '标签可关闭',
      setter: 'BoolSetter',
    },
    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
    },
    {
      name: 'lazy',
      propType: 'bool',
      title: '延迟渲染',
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
      isContainer: true,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElTabPane',
};
