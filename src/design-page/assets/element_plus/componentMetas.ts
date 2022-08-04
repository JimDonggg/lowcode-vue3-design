import { Snippet, FieldConfig } from '@alilc/lowcode-types'
export type Category = '基础' | '表单' | '数据展示' | '导航' | '反馈' | '布局'
interface ComponentMeta {
  [index: string]: {
    title: string
    category: Category
    isContainer?: boolean // 是否容器组件
    isModal?: boolean // 组件是否带浮层
    snippets?: Snippet[] // 只能手工写
    childrenProp?: boolean // 非自闭合标签需要一个children属性
    slots?: FieldConfig[]
  }
}
export enum CategoryEnum {
  'layout' = '布局',
  'base' = '基础',
  'form' = '表单',
  'data' = '数据展示',
  'nav' = '导航',
  'feedback' = '反馈',
}
const componentMetas: ComponentMeta = {
  NDataTable: {
    title: '表格',
    category: CategoryEnum.data,
    // snippets: [
    //   {
    //     screenshot: '/images/table-1.png',
    //     title: '表格',
    //     schema: {
    //       componentName: 'NDataTable',
    //       props: {
    //         data: [
    //           { no: 3, title: 'Wonderwall', length: '4:18' },
    //           { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
    //           { no: 12, title: 'Champagne Supernova', length: '7:27' }
    //         ],
    //         columns: [{
    //           title: 'No',
    //           key: 'no'
    //         },
    //         {
    //           title: 'Title',
    //           key: 'title'
    //         },
    //         {
    //           title: 'Length',
    //           key: 'length'
    //         }],
    //         bordered: true,
    //         size: 'medium',
    //       }
    //     }
    //   }
    // ]
  },
  NH2: {
    title: '二级标题',
    category: CategoryEnum.base,
    // snippets: [{
    //   title: '二级标题',
    //   schema: {
    //     componentName: 'NH2',
    //     props: {
    //       children: ['文本'],
    //     },
    //   },
    // },]
  },
  NH3: {
    title: '三级标题',
    category: CategoryEnum.base,
    // snippets: [{
    //   title: '三级标题',
    //   schema: {
    //     componentName: 'NH3',
    //     props: {
    //       children: ['文本'],
    //     },
    //   },
    // },]
  },
  NText: {
    title: '文本',
    category: CategoryEnum.base,
    // snippets: [{
    //   title: '文本',
    //   schema: {
    //     componentName: 'NText',
    //     props: {
    //       children: ['文本'],
    //     },
    //   },
    // },]
  },
  // ElAffix: {
  //   title: '固钉',
  //   category: CategoryEnum.feedback,
  // },
  // ElAlert: {
  //   title: '提示',
  //   category: CategoryEnum.feedback,
  // },
  // ElAutocomplete: {
  //   title: '自动补全输入框',
  //   category: CategoryEnum.form,
  // },
  // ElAvatar: {
  //   title: '头像',
  //   category: CategoryEnum.data,
  // },
  // ElBacktop: {
  //   title: '回到顶部',
  //   category: CategoryEnum.nav,
  // },
  // ElBadge: {
  //   title: '徽章',
  //   category: CategoryEnum.data,
  //   isContainer: true,
  // },
  // ElBreadcrumb: {
  //   title: '面包屑',
  //   category: CategoryEnum.nav,
  //   isContainer: true,
  // },
  // ElBreadcrumbItem: {
  //   title: '面包屑项',
  //   category: CategoryEnum.nav,
  // },
  ElButton: {
    title: '按钮',
    category: CategoryEnum.base,
    childrenProp: true,
    // snippets: [
    //   {
    //     title: '主要按钮',
    //     screenshot:
    //       '/images/button-1.png',
    //     schema: {
    //       componentName: 'ElButton',
    //       props: {
    //         children: ['主要按钮'],
    //         size: 'default',
    //         type: 'primary'
    //       },
    //     },
    //   },
    //   {
    //     title: '次要按钮',
    //     screenshot:
    //       '/images/button-2.png',
    //     schema: {
    //       componentName: 'ElButton',
    //       props: {
    //         children: ['次要按钮'],
    //         size: 'default',
    //       },
    //     },
    //   },
    //   {
    //     title: '危险按钮',
    //     screenshot:
    //       '/images/button-3.png',
    //     schema: {
    //       componentName: 'ElButton',
    //       props: {
    //         children: ['危险按钮'],
    //         size: 'danger',
    //       },
    //     },
    //   },
    //   {
    //     title: '图标按钮',
    //     screenshot:
    //       '/images/button-3.png',
    //     schema: {
    //       componentName: 'ElButton',
    //       props: {
    //         "icon": "Edit",
    //         type: 'primary',
    //         "round": true,
    //         "circle": true
    //       },
    //     },
    //   },
    // ],
  },
  ElButtonGroup: {
    title: '按钮组',
    category: CategoryEnum.base,
    isContainer: true,
    // snippets: [
    //   {
    //     title: '按钮组',
    //     screenshot:
    //       '/images/button-group.png',
    //     schema: {
    //       componentName: 'ElButtonGroup',
    //       children: [
    //         {
    //           componentName: 'ElButton',
    //           props: {
    //             children: ['按钮1'],
    //             type: 'primary'
    //           },
    //         },
    //         {
    //           componentName: 'ElButton',
    //           props: {
    //             children: ['按钮2'],
    //           },
    //         },
    //       ],
    //     },
    //   },
    // ],
  },
  // ElCalendar: {
  //   title: '日历',
  //   category: CategoryEnum.data,
  // },
  ElCard: {
    title: '卡片',
    category: CategoryEnum.data,
    isContainer: true,
    // snippets: [
    //   {
    //     title: '卡片',
    //     screenshot:
    //       '/images/card.png',
    //     schema: {
    //       componentName: 'ElCard',
    //       props: {
    //         header: '我是标题',
    //       },
    //     },
    //   },
    // ],
  },
  // ElCarousel: {
  //   title: '走马灯',
  //   category: CategoryEnum.data,
  //   isContainer: true,
  // },
  // ElCarouselItem: {
  //   title: '走马灯项',
  //   category: CategoryEnum.data,
  // },
  ElCascader: {
    title: '级联选择器',
    category: CategoryEnum.form,
    // snippets: [
    //   {
    //     title: '级联选择',
    //     screenshot: '/images/category.png',
    //     schema: {
    //       componentName: 'ElCascader',
    //       props: {
    //         options: [
    //           {
    //             value: 'zhejiang',
    //             label: 'Zhejiang',
    //             children: [
    //               {
    //                 value: 'hangzhou',
    //                 label: 'Hangzhou',
    //                 children: [
    //                   {
    //                     value: 'xihu',
    //                     label: 'West Lake',
    //                   },
    //                 ],
    //               },
    //             ],
    //           },
    //           {
    //             value: 'jiangsu',
    //             label: 'Jiangsu',
    //             children: [
    //               {
    //                 value: 'nanjing',
    //                 label: 'Nanjing',
    //                 children: [
    //                   {
    //                     value: 'zhonghuamen',
    //                     label: 'Zhong Hua Men',
    //                   },
    //                 ],
    //               },
    //             ],
    //           },
    //         ],
    //         placeholder: '请选择',
    //         separator: '/',
    //         tagType: 'info'
    //       },
    //     },
    //   },
    // ]
  },
  ElCheckbox: {
    title: '多选框',
    category: CategoryEnum.form,
    childrenProp: true,
    // snippets: [
    //   {
    //     title: '多选框',
    //     screenshot:
    //       '/images/checkbox.png',
    //     schema: {
    //       componentName: 'ElCheckbox',
    //       props: {
    //         children: ['多选框'],
    //         label: 'value1',
    //         trueLabel: '已选中',
    //         falseLabel: '未选中',
    //       },
    //     },
    //   },
    // ],
  },
  // ElCheckboxButton: {
  //   title: '按钮多选框',
  //   category: CategoryEnum.form,
  //   isContainer: true,
  // },
  ElCheckboxGroup: {
    title: '多选框组',
    category: CategoryEnum.form,
    isContainer: true,
    // snippets: [
    //   {
    //     title: '多选框组',
    //     screenshot:
    //       '/images/checkbox-group.png',
    //     schema: {
    //       componentName: 'ElCheckboxGroup',
    //       props: {
    //         max: 2,
    //       },
    //       children: [
    //         {
    //           componentName: 'ElCheckbox',
    //           props: {
    //             children: ['多选框1'],
    //             size: 'default',
    //             label: 'value1',
    //           },
    //         },
    //         {
    //           componentName: 'ElCheckbox',
    //           props: {
    //             children: ['多选框2'],
    //             size: 'default',
    //             label: 'value2',
    //           },
    //         },
    //       ],
    //     },
    //   },
    // ],
  },
  // ElCollapse: {
  //   title: '折叠面板',
  //   category: CategoryEnum.data,
  //   isContainer: true,
  // },
  // ElCollapseItem: {
  //   title: '折叠面板项',
  //   category: CategoryEnum.data,
  // },
  // ElAside: {
  //   title: '布局容器-侧边栏',
  //   category: CategoryEnum.layout,
  //   isContainer: true,
  // },
  // ElContainer: {
  //   title: '布局容器-外层容器',
  //   category: CategoryEnum.layout,
  //   isContainer: true,
  // },
  // ElFooter: {
  //   title: '布局容器-底栏',
  //   category: CategoryEnum.layout,
  //   isContainer: true,
  // },
  // ElHeader: {
  //   title: '布局容器-顶栏',
  //   category: CategoryEnum.layout,
  //   isContainer: true,
  // },
  // ElMain: {
  //   title: '布局容器-主要部分',
  //   category: CategoryEnum.layout,
  //   isContainer: true,
  // },
  ElDatePicker: {
    title: '日期选择器',
    category: CategoryEnum.form,
    // snippets: [
    //   {
    //     title: '日期选择器',
    //     screenshot:
    //       '/images/datetime.png',
    //     schema: {
    //       componentName: 'ElDatePicker',
    //       props: {
    //         editable: true,
    //         clearable: true,
    //         type: 'date',
    //         placeholder: '请选择',
    //         format: 'YYYY-MM-DD',
    //       },
    //     },
    //   },
    //   {
    //     title: '日期区间',
    //     screenshot:
    //       '/images/datetime-range.png',
    //     schema: {
    //       componentName: 'ElDatePicker',
    //       props: {
    //         editable: true,
    //         clearable: true,
    //         type: 'daterange',
    //         format: 'YYYY-MM-DD',
    //       },
    //     },
    //   },
    // ],
  },
  // ElDescriptions: {
  //   title: '',
  //   category: '',
  // },
  // ElDescriptionsItem: {
  //   title: '',
  //   category: '',
  // },
  ElDialog: {
    title: '弹窗',
    category: CategoryEnum.feedback,
    isContainer: true,
    isModal: true,
    // snippets: [
    //   {
    //     title: '弹窗',
    //     screenshot:
    //       '/images/dialog.png',
    //     schema: {
    //       componentName: 'ElDialog',
    //       props: {
    //         'v-model': {
    //           "type": "JSExpression",
    //           "value": "true"
    //         },
    //         title: '标题',
    //         top: '15vh',
    //         lockScroll: true,
    //         closeOnClickModal: true,
    //         closeOnPressEscape: true,
    //         showClose: true,
    //         footer: {
    //           "type": "JSSlot",
    //           "value": [
    //             {
    //               "componentName": "ElButton",
    //               "props": {
    //                 "children": "取消",
    //                 "size": "default",
    //               },
    //             },
    //             {
    //               "componentName": "ElButton",
    //               "props": {
    //                 "children": "确定",
    //                 "size": "default",
    //                 "type": "primary"
    //               },
    //             }
    //           ]
    //         }
    //       },
    //       children: [],
    //     },
    //   },
    // ],
  },
  // ElDivider: {
  //   title: '分割线',
  //   category: CategoryEnum.base,
  // },
  ElDrawer: {
    title: '抽屉',
    category: CategoryEnum.feedback,
    isContainer: true,
    isModal: true,
    // snippets: [
    //   {
    //     title: '侧边抽屉',
    //     screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/drawer-1.png',
    //     schema: {
    //       componentName: 'ElDrawer',
    //       props: {
    //         title: '侧边抽屉',
    //         'v-model': {
    //           "type": "JSExpression",
    //           "value": "true"
    //         },
    //         direction: 'rtl',
    //         destroyOnClose: true,
    //         footer: {
    //           "type": "JSSlot",
    //           "value": [
    //             {
    //               "componentName": "ElButton",
    //               "props": {
    //                 "children": "取消",
    //                 "size": "default",
    //               },
    //             },
    //             {
    //               "componentName": "ElButton",
    //               "props": {
    //                 "children": "确定",
    //                 "size": "default",
    //                 "type": "primary"
    //               },
    //             }
    //           ]
    //         }
    //       },
    //     },
    //   },
    //   {
    //     title: '底部抽屉',
    //     screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/drawer-2.png',
    //     schema: {
    //       componentName: 'ElDrawer',
    //       props: {
    //         title: '底部抽屉',
    //         'v-model': {
    //           "type": "JSExpression",
    //           "value": "true"
    //         },
    //         direction: 'btt',
    //         destroyOnClose: true,
    //         footer: {
    //           "type": "JSSlot",
    //           "value": [
    //             {
    //               "componentName": "ElButton",
    //               "props": {
    //                 "children": "取消",
    //                 "size": "default",
    //               },
    //             },
    //             {
    //               "componentName": "ElButton",
    //               "props": {
    //                 "children": "确定",
    //                 "size": "default",
    //                 "type": "primary"
    //               },
    //             }
    //           ]
    //         }
    //       },
    //     },
    //   },
    // ]
  },
  // ElCollection: {
  //   title: '',
  //   category: '',
  // },
  // ElCollectionItem: {
  //   title: '',
  //   category: '',
  // },
  // ElDropdown: {
  //   title: '下拉菜单',
  //   category: CategoryEnum.nav,
  //   isContainer: true,
  // },
  // ElDropdownItem: {
  //   title: '下拉菜单项',
  //   category: CategoryEnum.nav,
  // },
  // ElDropdownMenu: {
  //   title: '',
  //   category: '',
  // },
  // ElEmpty: {
  //   title: '缺省',
  //   category: CategoryEnum.data,
  // },
  ElForm: {
    title: '表单',
    category: CategoryEnum.form,
    isContainer: true,
    // snippets: [
    //   {
    //     screenshot:
    //       'images/form.png',
    //     title: '表单容器',
    //     schema: {
    //       componentName: 'ElForm',
    //       props: {
    //         labelWidth: '120',
    //         labelPosition: 'right'
    //       },
    //       children: [
    //         {
    //           componentName: 'ElFormItem',
    //           props: {
    //             label: '用户名',
    //           },
    //           children: [
    //             {
    //               componentName: 'ElInput',
    //               props: {
    //                 placeholder: '请输入',
    //               },
    //             },
    //           ],
    //         },
    //         {
    //           componentName: 'ElFormItem',
    //           props: {
    //             label: '密码',
    //           },
    //           children: [
    //             {
    //               componentName: 'ElInput',
    //               props: {
    //                 type: 'password',
    //                 placeholder: '请输入',
    //               },
    //             },
    //           ],
    //         },
    //         {
    //           componentName: 'ElFormItem',
    //           props: {
    //             label: '',
    //           },
    //           children: [
    //             {
    //               componentName: 'ElButton',
    //               props: {
    //                 children: ['确定'],
    //                 size: 'default',
    //                 type: 'primary'
    //               },
    //             },
    //             {
    //               componentName: 'ElButton',
    //               props: {
    //                 children: ['取消'],
    //                 size: 'default',
    //               },
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   },
    //   {
    //     screenshot:
    //       '/images/form-search.png',
    //     title: '列表搜索框',
    //     schema: {
    //       componentName: 'ElForm',
    //       props: {
    //         labelWidth: '120',
    //         labelPosition: 'right',
    //         inline: true,
    //       },
    //       children: [
    //         {
    //           componentName: 'ElFormItem',
    //           props: {
    //             label: '选项1',
    //           },
    //           children: [
    //             {
    //               componentName: 'ElInput',
    //               props: {
    //                 placeholder: '请输入',
    //               },
    //             },
    //           ],
    //         },
    //         {
    //           componentName: 'ElFormItem',
    //           props: {
    //             label: '选项2',
    //           },
    //           children: [
    //             {
    //               componentName: 'ElInput',
    //               props: {
    //                 placeholder: '请输入',
    //               },
    //             },
    //           ],
    //         },
    //         {
    //           componentName: 'ElFormItem',
    //           props: {
    //             label: '',
    //           },
    //           children: [
    //             {
    //               componentName: 'ElButton',
    //               props: {
    //                 children: ['搜索'],
    //                 size: 'default',
    //                 type: 'primary'
    //               },
    //             },
    //             {
    //               componentName: 'ElButton',
    //               props: {
    //                 children: ['重置'],
    //                 size: 'default',
    //               },
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   },
    // ],
  },
  ElFormItem: {
    title: '表单项',
    category: CategoryEnum.form,
    isContainer: true,
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
  },
  ElIcon: {
    title: '图标',
    category: CategoryEnum.base,
    isContainer: true,
    // snippets: [
    //   {
    //     title: '图标',
    //     screenshot: '/images/icon.png',
    //     schema: {
    //       componentName: 'ElIcon',
    //       props: {
    //         size: 20,
    //       },
    //       children: [{
    //         componentName: 'Edit',
    //         props: {
    //           width: '20'
    //         }
    //       }]
    //     },
    //   },
    // ]
  },
  ElImage: {
    title: '图片',
    category: CategoryEnum.data,
    // snippets: [
    //   {
    //     title: '图片',
    //     screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/image-1.png',
    //     schema: {
    //       componentName: 'ElImage',
    //       props: {
    //         src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //         alt: '图片'
    //       },
    //     },
    //   },
    // ]
  },
  ElImageViewer: {
    title: '图片预览',
    category: CategoryEnum.data,
    // snippets: [{
    //   title: '图片预览',
    //   screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/image-1.png',
    //   schema: {
    //     componentName: 'ElImageViewer',
    //     props: {
    //       urlList: [
    //         'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //         'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    //         'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    //         'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',],
    //     },
    //   },
    // }]
  },
  ElInput: {
    title: '输入框',
    category: CategoryEnum.form,
    // snippets: [
    //   {
    //     title: '输入框',
    //     screenshot:
    //       '/images/input.png',
    //     schema: {
    //       componentName: 'ElInput',
    //       props: {
    //         placeholder: '请输入',
    //       },
    //     },
    //   },
    // ],
  },
  ElInputNumber: {
    title: '数字输入框',
    category: CategoryEnum.form,
    // snippets: [
    //   {
    //     title: '数字输入框',
    //     screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/input-number-1.png',
    //     schema: {
    //       componentName: 'ElInputNumber',
    //       props: {
    //         placeholder: '请输入',
    //       },
    //     },
    //   },
    // ]
  },
  ElLink: {
    title: '链接',
    category: CategoryEnum.base,
    childrenProp: true,
    // snippets: [
    //   {
    //     title: '链接',
    //     schema: {
    //       componentName: 'ElLink',
    //       props: {
    //         children: ['链接'],
    //         icon: 'Delete'
    //       },
    //     },
    //   },
    // ]
  },
  // ElMenu: {
  //   title: '',
  //   category: '',
  // },
  // ElMenuItem: {
  //   title: '',
  //   category: '',
  // },
  // ElMenuItemGroup: {
  //   title: '',
  //   category: '',
  // },
  // ElSubMenu: {
  //   title: '',
  //   category: '',
  // },
  // ElOverlay: {
  //   title: '',
  //   category: '',
  // },
  // ElPageHeader: {
  //   title: '',
  //   category: '',
  // },
  // ElPagination: {
  //   title: '分页',
  //   category: CategoryEnum.data,
  // },
  // ElPopconfirm: {
  //   title: '弹出确认框',
  //   category: CategoryEnum.feedback,
  // },
  // ElPopperArrow: {
  //   title: '',
  //   category: '',
  // },
  // ElPopperTrigger: {
  //   title: '',
  //   category: '',
  // },
  // ElPopperContent: {
  //   title: '',
  //   category: '',
  // },
  // ElPopper: {
  //   title: '气泡卡片',
  //   category: CategoryEnum.feedback,
  // },
  // ElProgress: {
  //   title: '进度条',
  //   category: CategoryEnum.data,
  // },
  ElRadio: {
    title: '单选框',
    category: CategoryEnum.form,
    childrenProp: true,
    // snippets: [
    //   {
    //     title: '单选框',
    //     screenshot:
    //       '/images/radio.png',
    //     schema: {
    //       componentName: 'ElRadio',
    //       props: {
    //         children: ['单选框'],
    //         label: 'value',
    //       },
    //     },
    //   },
    // ],
  },
  // ElRadioButton: {
  //   title: '单选按钮',
  //   category: CategoryEnum.form,
  //   isContainer: true,
  // },
  ElRadioGroup: {
    title: '单选按钮组',
    category: CategoryEnum.form,
    isContainer: true,
    // snippets: [
    //   {
    //     title: '单选按钮组',
    //     screenshot:
    //       '/images/radio-group.png',
    //     schema: {
    //       componentName: 'ElRadioGroup',
    //       children: [
    //         {
    //           componentName: 'ElRadio',
    //           props: {
    //             children: ['单选框1'],
    //             label: 'value1',
    //           },
    //         },
    //         {
    //           componentName: 'ElRadio',
    //           props: {
    //             children: ['单选框2'],
    //             label: 'value2',
    //           },
    //         },
    //       ],
    //     },
    //   },
    // ],
  },
  // ElRate: {
  //   title: '评分',
  //   category: CategoryEnum.form,
  // },
  // ElResult: {
  //   title: '结果',
  //   category: CategoryEnum.data,
  // },
  ElRow: {
    title: '行',
    category: CategoryEnum.layout,
    isContainer: true,
    // snippets: [
    //   {
    //     title: '两栏',
    //     screenshot:
    //       '/images/row-2.png',
    //     schema: {
    //       componentName: 'ElRow',
    //       props: {},
    //       children: [
    //         {
    //           componentName: 'ElCol',
    //           props: {
    //             span: 12,
    //           },
    //         },
    //         {
    //           componentName: 'ElCol',
    //           props: {
    //             span: 12,
    //           },
    //         },
    //       ],
    //     },
    //   },
    //   {
    //     title: '三栏',
    //     screenshot:
    //       '/images/row-3.png',
    //     schema: {
    //       componentName: 'ElRow',
    //       props: {},
    //       children: [
    //         {
    //           componentName: 'ElCol',
    //           props: {
    //             span: 8,
    //           },
    //         },
    //         {
    //           componentName: 'ElCol',
    //           props: {
    //             span: 8,
    //           },
    //         },
    //         {
    //           componentName: 'ElCol',
    //           props: {
    //             span: 8,
    //           },
    //         },
    //       ],
    //     },
    //   },
    //   {
    //     title: '四栏',
    //     screenshot:
    //       '/images/row-4.png',
    //     schema: {
    //       componentName: 'ElRow',
    //       props: {},
    //       children: [
    //         {
    //           componentName: 'ElCol',
    //           props: {
    //             span: 6,
    //           },
    //         },
    //         {
    //           componentName: 'ElCol',
    //           props: {
    //             span: 6,
    //           },
    //         },
    //         {
    //           componentName: 'ElCol',
    //           props: {
    //             span: 6,
    //           },
    //         },
    //         {
    //           componentName: 'ElCol',
    //           props: {
    //             span: 6,
    //           },
    //         },
    //       ],
    //     },
    //   },
    // ],
  },
  ElCol: {
    title: '列',
    category: CategoryEnum.layout,
    isContainer: true,
    // snippets: [
    //   {
    //     title: '列',
    //     screenshot:
    //       '/images/col.png',
    //     schema: {
    //       componentName: 'ElCol',
    //       props: {
    //         span: 6,
    //       },
    //     },
    //   },
    // ],
  },
  // ElScrollbar: {
  //   title: '',
  //   category: '',
  // },
  // ElOptionGroup: {
  //   title: '',
  //   category: '',
  // },
  ElSelect: {
    title: '选择框',
    category: CategoryEnum.form,
    isContainer: true,
    // snippets: [
    //   {
    //     title: '选择框',
    //     screenshot:
    //       '/images/select.png',
    //     schema: {
    //       componentName: 'ElSelect',
    //       children: [
    //         {
    //           componentName: 'ElOption',
    //           props: {
    //             label: '选项1',
    //             value: 'value1',
    //           },
    //         },
    //         {
    //           componentName: 'ElOption',
    //           props: {
    //             label: '选项2',
    //             value: 'value2',
    //           },
    //         },
    //       ],
    //     },
    //   },
    // ],
  },
  ElOption: {
    title: '选择框项',
    category: CategoryEnum.form,
    // snippets: [
    //   {
    //     title: '选择框项',
    //     screenshot:
    //       '/images/select-option.png',
    //     schema: {
    //       componentName: 'ElOption',
    //       props: {
    //         label: '选项1',
    //         value: 'value1',
    //       },
    //     },
    //   },
    // ],
  },
  // ElSelectV2: {
  //   title: '虚拟列表选择器',
  //   category: CategoryEnum.form,
  // },
  // ElSkeleton: {
  //   title: '',
  //   category: '',
  // },
  // ElSkeletonItem: {
  //   title: '',
  //   category: '',
  // },
  // ElSlider: {
  //   title: '滑块',
  //   category: CategoryEnum.form,
  // },
  ElSpace: {
    title: '间距',
    category: CategoryEnum.layout,
    isContainer: true,
  },
  // ElSteps: {
  //   title: '步骤条',
  //   category: CategoryEnum.nav,
  // },
  // ElStep: {
  //   title: '',
  //   category: '',
  // },
  ElSwitch: {
    title: '开关',
    category: CategoryEnum.form,
    // snippets: [
    //   {
    //     title: '开关',
    //     screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/switch-1.png',
    //     schema: {
    //       componentName: 'ElSwitch',
    //       props: {
    //       },
    //     },
    //   },
    // ]
  },
  // ElTable: {
  //   title: '表格',
  //   category: CategoryEnum.data,
  //   isContainer: true,
  // },
  // ElTableColumn: {
  //   title: '表格列',
  //   category: CategoryEnum.data,
  //   slots: [getSlotSetter('header'), getSlotSetter('default')],
  // },
  // ElAutoResizer: {
  //   title: '',
  //   category: '',
  // },
  // ElTableV2: {
  //   title: '虚拟化表格',
  //   category: CategoryEnum.data,
  // },
  ElTabPane: {
    title: '标签面板',
    category: CategoryEnum.nav,
    isContainer: true,
    // snippets: [
    //   {
    //     title: 'tab面板',
    //     screenshot: '/images/tab-pane.png',
    //     schema: {
    //       componentName: 'ElTabPane',
    //       props: {
    //         label: '标签项',
    //         name: 'tab',
    //       },
    //     },
    //   },
    // ],
  },
  ElTabs: {
    title: '标签页',
    category: CategoryEnum.nav,
    isContainer: true,
    // snippets: [
    //   {
    //     title: 'tab-普通',
    //     screenshot:
    //       'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tabs-1.jpg',
    //     schema: {
    //       componentName: 'ElTabs',
    //       props: {
    //         activeName: 'tab-item-1',
    //         tabPosition: 'top',
    //       },
    //       children: [
    //         {
    //           componentName: 'ElTabPane',
    //           props: {
    //             label: '标签项1',
    //             name: 'tab-item-1',
    //           },
    //         },
    //         {
    //           componentName: 'ElTabPane',
    //           props: {
    //             label: '标签项2',
    //             name: 'tab-item-2',
    //           },
    //         },
    //       ],
    //     },
    //   },
    //   {
    //     title: 'tab-卡片',
    //     screenshot:
    //       'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tabs-2.jpg',
    //     schema: {
    //       componentName: 'ElTabs',
    //       props: {
    //         type: 'card',
    //       },
    //       children: [
    //         {
    //           componentName: 'ElTabPane',
    //           props: {
    //             label: '标签项1',
    //             name: 'tab-item-1',
    //           },
    //         },
    //         {
    //           componentName: 'ElTabPane',
    //           props: {
    //             label: '标签项2',
    //             name: 'tab-item-2',
    //           },
    //         },
    //       ],
    //     },
    //   },
    // ],
  },
  ElTag: {
    title: '标签',
    category: CategoryEnum.data,
    // snippets: [
    //   {
    //     title: '标签',
    //     screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tag-1.png',
    //     schema: {
    //       componentName: 'ElTag',
    //       props: {
    //         children: ['标签'],
    //       },
    //     },
    //   },
    // ]
  },
  // ElTimePicker: {
  //   title: '时间选择器',
  //   category: CategoryEnum.form,
  // },
  // ElTimeSelect: {
  //   title: '时间选择',
  //   category: CategoryEnum.form,
  // },
  // ElTimeline: {
  //   title: '时间线',
  //   category: CategoryEnum.data,
  // },
  // ElTimelineItem: {
  //   title: '时间线项',
  //   category: CategoryEnum.data,
  // },
  ElTooltip: {
    title: '文字提示',
    category: CategoryEnum.feedback,
    // snippets: [
    //   {
    //     title: '文字提示',
    //     screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tooltip-1.jpg',
    //     schema: {
    //       componentName: 'ElTooltip',
    //       props: {
    //         content: '提示内容',
    //         popperClass: 'el-tooltip'
    //       },
    //       children: [{
    //         componentName: 'ElButton',
    //         props: {
    //           children: ['按钮'],
    //           size: 'default',
    //           type: 'primary'
    //         }
    //       }]
    //     },
    //   },
    //   {
    //     title: '图标按钮提示',
    //     screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tooltip-1.jpg',
    //     schema: {
    //       componentName: 'ElTooltip',
    //       props: {
    //         content: '编辑',
    //         popperClass: 'el-tooltip',
    //         props: {
    //           offset: 10,
    //         }
    //       },
    //       children: [{
    //         componentName: 'ElButton',
    //         props: {
    //           size: 'default',
    //           type: 'primary',
    //           link: true,
    //           icon: 'Edit'
    //         }
    //       }]
    //     },
    //   },
    // ]
  },
  // ElTransfer: {
  //   title: '穿梭框',
  //   category: CategoryEnum.form,
  // },
  // ElTree: {
  //   title: '树形控件',
  //   category: CategoryEnum.data,
  // },
  // ElTreeSelect: {
  //   title: '树形选择器',
  //   category: CategoryEnum.data,
  // },
  // ElTreeV2: {
  //   title: '虚拟化树形控件',
  //   category: CategoryEnum.data,
  // },
  ElUpload: {
    title: '文件上传',
    category: CategoryEnum.form,
    // snippets: [
    //   {
    //     title: '上传',
    //     screenshot: '/images/upload.png',
    //     schema: {
    //       componentName: 'ElUpload',
    //       props: {},
    //       children: [{
    //         componentName: 'ElButton',
    //         props: {
    //           children: ['上传'],
    //         },
    //       }],
    //     },
    //   },
    // ]
  },
  // ElInfiniteScroll: {
  //   title: '',
  //   category: '',
  // },
  // ElLoading: {
  //   title: '',
  //   category: '',
  // },
  // ElLoadingDirective: {
  //   title: '',
  //   category: '',
  // },
  // ElLoadingService: {
  //   title: '',
  //   category: '',
  // },
  // ElMessage: {
  //   title: '',
  //   category: '',
  // },
  // ElMessageBox: {
  //   title: '',
  //   category: '',
  // },
  // ElNotification: {
  //   title: '',
  //   category: '',
  // },
  // ElPopover: {
  //   title: '',
  //   category: '',
  // },
  // ElPopoverDirective: {
  //   title: '',
  //   category: '',
  // },
}

function getSlotSetter(slotName: string, title?: string): FieldConfig {
  title = title ? title : slotName + '-slot'
  return {
    name: slotName,
    title: title,
    setter: {
      componentName: 'SlotSetter',
      initialValue: {
        type: 'JSSlot',
        title: title,
        value: [],
      },
    },
  }
}
export default componentMetas
