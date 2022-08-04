import snippets from './snippets'

export default {
  group: '基础组件',
  category: '表单',
  title: '文件上传',
  componentName: 'ElUpload',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElUpload',
    destructuring: true,
  },
  props: [
    {
      name: 'v-model:fileList',
      propType: 'array',
      title: {
        label: '上传文件列表',
        tip: 'fileList | 当前上传的文件列表（受控）',
      },
      setter: 'ExpressionSetter',
    },
    {
      name: 'action',
      propType: 'string',
      title: '请求URL',
      setter: 'StringSetter',
    },
    {
      name: 'multiple',
      propType: 'bool',
      title: '支持多选',
      setter: 'BoolSetter',
    },
    {
      name: 'limit',
      propType: 'number',
      title: '最大上传数',
      defaultValue: 10,
    },
    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
    },
    {
      name: 'headers',
      title: {
        label: '上传请求头',
        tip: 'headers | 设置上传的请求头部，IE10 以上有效',
      },
      propType: 'object',
      setter: 'JsonSetter',
    },
    {
      name: 'method',
      title: {
        label: '请求Method',
        tip: 'method | 上传请求的 http method',
      },
      propType: {
        type: 'oneOf',
        value: ['get', 'post', 'put', 'head', 'options', 'patch', 'delete'],
      },
      defaultValue: 'post',
      setter: 'StringSetter',
    },
    {
      name: 'data',
      propType: 'object',
      title: {
        label: '额外参数',
        tip: '上传时附带的额外参数 | data',
      },
      setter: 'JsonSetter',
    },
    {
      name: 'name',
      propType: 'string',
      title: '文件字段名',
      setter: 'StringSetter',
      defaultValue: 'file',
    },
    {
      name: 'drag',
      propType: 'bool',
      title: '拖拽上传',
      setter: 'BoolSetter',
      defaultValue: false,
    },
    {
      name: 'withCredentials',
      propType: 'bool',
      title: {
        label: '支持发送 cookie',
        tip: '支持发送 cookie 凭证信息',
      },
      defaultValue: false,
      setter: 'BoolSetter',
    },
    {
      name: 'showFileList',
      propType: 'bool',
      title: '显示已上传文件',
      setter: 'BoolSetter',
      defaultValue: true,
    },
    {
      name: 'accept',
      propType: 'string',
      title: {
        label: '上传文件类型',
        tip: 'accept | 接受上传的文件类型, 例如 .doc,.docx,application/msword',
      },
      setter: 'StringSetter',
    },
    {
      name: 'autoUpload',
      propType: 'bool',
      title: '自动上传',
      setter: 'BoolSetter',
      defaultValue: true,
    },
    {
      name: 'listType',
      title: {
        label: '上传列表样式',
        tip: 'listType | 上传列表的内建样式，支持三种基本样式 `text`, `picture` 和 `picture-card`',
      },
      propType: {
        type: 'oneOf',
        value: ['text', 'picture', 'picture-card'],
      },
      defaultValue: 'text',
      setter: [
        {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '文本',
                value: 'text',
              },
              {
                title: '图片',
                value: 'picture',
              },
              {
                title: '图片卡片',
                value: 'picture-card',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'httpRequest',
      propType: 'func',
      title: {
        label: '自定义上传',
        value: '覆盖默认的 Xhr 行为，允许自行实现上传文件的请求',
      },
    },
    {
      title: '回调函数',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'beforeUpload',
          propType: 'func',
          title: {
            label: '上传前回调',
            tip: 'beforeUpload',
          },
          setter: 'FunctionSetter',
        },
        {
          name: 'beforeRemove',
          propType: 'func',
          title: {
            label: '移除前回调',
            tip: 'beforeRemove',
          },
          setter: 'FunctionSetter',
        },
        {
          name: 'onRemove',
          propType: 'func',
          title: {
            label: '移除时回调',
            tip: 'onRemove',
          },
          setter: 'FunctionSetter',
        },
        {
          name: 'onChange',
          propType: 'func',
          title: {
            label: '文件改变时回调',
            tip: 'onChange ｜ 添加文件、上传成功和上传失败时都会被调用',
          },
          setter: 'FunctionSetter',
        },
        {
          name: 'onPreview',
          propType: 'func',
          title: {
            label: '预览文件回调',
            tip: 'onPreview',
          },
          setter: 'FunctionSetter',
        },
        {
          name: 'onProgress',
          propType: 'func',
          title: {
            label: '上传时回调',
            tip: 'onProgress',
          },
          setter: 'FunctionSetter',
        },
        {
          name: 'onSuccess',
          propType: 'func',
          title: {
            label: '上传成功回调',
            tip: 'onSuccess',
          },
          setter: 'FunctionSetter',
        },
        {
          name: 'onError',
          propType: 'func',
          title: {
            label: '错误回调',
            tip: 'onError',
          },
          setter: 'FunctionSetter',
        },
        {
          name: 'onExceed',
          propType: 'func',
          title: {
            label: '超出限制回调',
            tip: 'onExceed',
          },
          setter: 'FunctionSetter',
        },
      ],
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
  keywords: 'ElUpload',
}
