import snippets from './snippets'

export default {
  group: '基础组件',
  category: '数据展示',
  componentName: 'NDataTable',
  title: '表格',
  npm: {
    package: 'naive-ui',
    version: '2.30.6',
    exportName: 'NDataTable',
    destructuring: true,
  },
  props: [
    {
      name: 'data',
      title: {
        label: '表格数据',
      },
      propType: 'object',
      setter: 'JsonSetter',
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
                value: 'medium',
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
      name: 'loading',
      title: { label: '加载中', tip: 'loading | 是否加载中' },
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false,
    },
    {
      name: 'columns',
      title: {
        label: '表格列',
        tip: '表格列的配置描述，具体项见下表',
      },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'title',
                    title: {
                      label: '列标题',
                      tip: 'title | 列标题',
                    },
                    propType: {
                      type: 'oneOfType',
                      value: ['string', 'func'],
                    },
                    setter: [
                      'StringSetter',
                      {
                        componentName: 'SlotSetter',
                        title: '列标题插槽',
                        initialValue: {
                          type: 'JSSlot',
                          params: ['options'],
                          value: [],
                        },
                      },
                    ],
                  },
                  {
                    name: 'key',
                    title: {
                      label: '数据字段',
                      tip: 'key | 数据字段，不可重复',
                    },
                    propType: 'string',
                    setter: 'StringSetter',
                    isRequired: true,
                  },
                  {
                    name: 'align',
                    title: {
                      label: '对齐方式',
                      tip: 'align | 对齐方式',
                    },
                    propType: {
                      type: 'oneOf',
                      value: ['left', 'right', 'center'],
                    },
                    defaultValue: 'left',
                    setter: [
                      {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: 'left',
                              value: 'left',
                            },
                            {
                              title: 'right',
                              value: 'right',
                            },
                            {
                              title: 'center',
                              value: 'center',
                            },
                          ],
                        },
                      },
                      'VariableSetter',
                    ],
                  },
                  {
                    name: 'fixed',
                    title: {
                      label: '列是否固定',
                      tip: 'fixed | 列是否固定',
                    },
                    description:
                      '（IE 下无效）列是否固定，可选 true (等效于 left) left right',
                    defaultValue: '',
                    propType: {
                      type: 'oneOf',
                      value: [false, 'left', 'right'],
                    },
                    setter: [
                      {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: '不固定',
                              value: false,
                            },
                            {
                              title: '固定在左侧',
                              value: 'left',
                            },
                            {
                              title: '固定在右侧',
                              value: 'right',
                            },
                          ],
                        },
                      },
                      'VariableSetter',
                    ],
                  },
                  {
                    name: 'ellipsis',
                    title: {
                      label: '文本溢出',
                      tip: '文本溢出是否显示为...',
                    },
                    propType: 'bool',
                    setter: 'BoolSetter',
                  },
                  {
                    name: 'className',
                    title: {
                      label: '列样式类名',
                      tip: 'className | 列样式类名',
                    },
                    propType: 'string',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'width',
                    title: {
                      label: '宽度',
                      tip: 'width | 宽度',
                    },
                    propType: {
                      type: 'oneOfType',
                      value: ['number', 'string'],
                    },
                    setter: ['NumberSetter', 'StringSetter', 'VariableSetter'],
                  },
                  {
                    name: 'sorter',
                    title: {
                      label: '排序规则',
                      tip: 'sorter | 排序函数，本地排序使用一个函数，需要服务端排序可设为 true',
                    },
                    propType: {
                      type: 'oneOfType',
                      value: ['bool', 'func'],
                    },
                    setter: ['BoolSetter', 'FunctionSetter', 'VariableSetter'],
                  },
                  {
                    name: 'filter',
                    title: {
                      label: '筛选菜单项',
                      tip: 'filters | 表头的筛选菜单项',
                    },
                    propType: {
                      type: 'oneOfType',
                      value: ['bool', 'func'],
                    },
                    setter: ['BoolSetter', 'FunctionSetter', 'VariableSetter'],
                  },
                  {
                    name: 'render',
                    title: {
                      label: '自定义渲染',
                      tip: 'render | 插槽内的物料表达式可通过this.record获取当前行数据，this.index获取索引',
                    },
                    propType: 'func',
                    setter: [
                      {
                        componentName: 'SlotSetter',
                        title: '单元格插槽',
                        initialValue: {
                          type: 'JSSlot',
                          params: ['row', 'index'],
                          value: [],
                        },
                      },
                      'VariableSetter',
                    ],
                  },
                ],
              },
            },
            initialValue: {
              title: '标题',
            },
          },
        },
      },
    },
    {
      title: '分页',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'pagination',
          title: { label: '显示分页', tip: 'pagination | 显示分页' },
          propType: 'bool',
          setter: 'BoolSetter',
          extraProps: {
            setValue: (target: any, value: any) => {
              if (value) {
                target.parent.setPropValue('pagination', {
                  pageSize: 10,
                })
              }
            },
          },
        },
        {
          name: 'pagination.defaultPage',
          title: {
            label: '非受控默认当前页',
            tip: 'pagination.defaultPage | 非受控模式下的当前页',
          },
          propType: 'number',
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.defaultPageSize',
          title: {
            label: '非受控默认分页',
            tip: 'pagination.defaultPageSize | 非受控模式下的分页大小',
          },
          propType: 'number',
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.pageSize',
          title: { label: '每页条数', tip: 'pagination.pageSize | 每页条数' },
          propType: 'number',
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.itemCount',
          title: { label: '数据总数', tip: 'pagination.itemCount | 数据总数' },
          propType: 'number',
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.pageCount',
          title: { label: '总页数', tip: 'pagination.pageCount | 总页数' },
          propType: 'number',
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.showSizePicker',
          title: {
            label: '页数切换',
            tip: 'pagination.showSizePicker | 是否展示 pageSize 切换器',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'remote',
          propType: 'bool',
          title: {
            label: '自动分页',
            tip: '在异步的状况下你可能需要把它设为 true',
          },
          setter: 'BoolSetter',
        },
        {
          name: 'pagination.showQuickJumper',
          title: {
            label: '快速跳转',
            tip: 'pagination.showQuickJumper | 是否可以快速跳转至某页',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.size',
          title: { label: '分页尺寸', tip: 'pagination.size | 分页尺寸' },
          propType: {
            type: 'oneOf',
            value: ['small', 'medium', 'large'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '小',
                    value: 'small',
                  },
                  {
                    title: '默认',
                    value: 'medium',
                  },
                  {
                    title: '大',
                    value: 'large',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'medium',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
      ],
    },
    {
      title: '其他',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'bordered',
          propType: 'bool',
          title: '显示边框',
          setter: 'BoolSetter',
        },
        {
          name: 'minHeight',
          propType: 'string',
          title: '最小高度',
          setter: 'StringSetter',
        },
        {
          name: 'maxHeight',
          propType: 'string',
          title: '最大高度',
          setter: 'StringSetter',
        },
      ],
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: [
        'onUpdate:page',
        'onUpdate:pageSize',
        'onUpdate:sorter',
        'onUpdate:filters',
        'onUpdate:checkedRowKeys',
        'onUpdate:expandedRowKeys',
      ],
    },
    component: {
      isContainer: false,
      isModal: false,
    },
  },
  snippets,
}
