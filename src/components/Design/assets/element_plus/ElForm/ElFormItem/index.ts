import snippets from './snippets';

export default {
  group: '基础组件',
  category: '表单',
  componentName: 'ElFormItem',
  title: '表单项',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElFormItem',
    destructuring: true,
  },
  props: [
    {
      name: 'label',
      propType: 'string',
      title: '标签',
      setter: 'StringSetter',
    },
    {
      name: 'labelWidth',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      title: '标签宽度',
    },
    {
      name: 'size',
      propType: 'string',
      title: '尺寸',
      setter: [
        {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '大',
                value: 'large',
              },
              {
                title: '默认',
                value: 'default',
              },
              {
                title: '小',
                value: 'small',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'prop',
      propType: {
        type: 'oneOfType',
        value: ['string', 'array'],
      },
      title: {
        label: 'model键名',
        tip: 'prop | 表单验证必填',
      },
      setter: 'StringSetter',
    },
    {
      name: 'required',
      propType: 'bool',
      title: '是否必填',
      setter: 'BoolSetter',
    },
    {
      name: 'rules',
      propType: 'object',
      title: '验证规则',
      setter: 'JsonSetter',
    },
    // {
    //   name: 'error',
    //   propType: 'string',
    //   title: 'error',
    //   setter: 'StringSetter',
    // },
    {
      name: 'inlineMessage',
      propType: 'bool',
      title: '行内显示校验信息',
      setter: 'BoolSetter',
    },
    {
      name: 'showMessage',
      propType: 'bool',
      title: '错误信息',
      setter: 'BoolSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onResetField', 'onClearValidate'],
    },
    component: {
      isContainer: true,
      isModal: false,
    },
  },
  snippets,
  // snippets: [
  //   {
  //     screenshot:
  //       'https://helios-allpublic-1257616148.cos.ap-shanghai.myqcloud.com/img/input.png',
  //     title: '表单项',
  //     schema: {
  //       componentName: 'ElFormItem',
  //       props: {
  //         label: '标签',
  //         showMessage: true,
  //       },
  //       children: [
  //         {
  //           componentName: 'ElInput',
  //           props: {
  //             placeholder: '请输入',
  //           }
  //         },
  //       ],
  //     },
  //   },
  // ],
  keywords: 'ElFormItem',
};
