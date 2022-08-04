// import { Button, Message, Dialog } from '@alifd/next';
import { saveSchema } from '../utils/store'
import { ILowCodePluginContext } from '@alilc/lowcode-engine'
// import blankScema from './template-block/templates/base/blank';

const save = async () => {
  await saveSchema()
  // Message.success('成功保存到本地');
}

const preview = async () => {
  await saveSchema()
  window.open('preview.html')
}
// const resetPage = (project: any) => {
//   Dialog.show({
//     v2: false,
//     title: '提示',
//     content: '页面所有内容（包括数据源及js）都会被清空，确认清空？',
//     onOk: () => {
//       project.removeDocument(project.currentDocument as any);
//       project.openDocument(blankScema);
//     },
//   });
// };

const savePlugin = (ctx: ILowCodePluginContext) => {
  return {
    name: 'saveSample',
    async init() {
      const { skeleton, hotkey, project } = ctx

      // skeleton.add({
      //   name: 'resetSample',
      //   area: 'topArea',
      //   type: 'Widget',
      //   props: { align: 'right' },
      //   content: <Button onClick={() => resetPage(project)}>清空页面</Button>,
      // });

      skeleton.add({
        name: 'saveSample',
        area: 'topArea',
        type: 'Widget',
        props: { align: 'right' },
        content: <button onClick={save}>保存到本地</button>,
      })

      skeleton.add({
        name: 'previewSample',
        area: 'topArea',
        type: 'Widget',
        props: { align: 'right' },
        content: <button onClick={preview}>预览</button>,
      })

      hotkey.bind('command+s', async (e) => {
        e.preventDefault()
        save()
      })
    },
  }
}

savePlugin.pluginName = 'saveSample'

export default savePlugin
