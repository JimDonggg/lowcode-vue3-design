import { ILowCodePluginContext } from '@alilc/lowcode-engine'
import ComponentsPane from '@alilc/lowcode-plugin-components-pane'
// import { Logo } from '../components/logo/logo';
// import PagesPane from './pages';

const builtinPluginRegistry = (ctx: ILowCodePluginContext) => {
  return {
    name: 'builtin-plugin-registry',
    async init() {
      const { skeleton, project } = ctx
      // 注册 logo 面板
      // skeleton.add({
      //   area: 'topArea',
      //   type: 'Widget',
      //   name: 'logo',
      //   content: Logo,
      //   contentProps: {
      //     logo: '/images/logo.png',
      //   },
      //   props: {
      //     align: 'left',
      //   },
      // });

      // 注册组件面板
      const componentsPane = skeleton.add({
        area: 'leftArea',
        type: 'PanelDock',
        name: 'componentsPane',
        content: ComponentsPane,
        props: {
          align: 'top',
          icon: 'zujianku',
          description: '组件库',
        },
      })
      componentsPane.disable()
      project.onSimulatorRendererReady(() => {
        componentsPane.enable()
      })

      // skeleton.add({
      //   index: -1,
      //   area: 'leftArea',
      //   type: 'PanelDock',
      //   name: 'pagesPane',
      //   content: PagesPane,
      //   contentProps: {},
      //   props: {
      //     align: 'top',
      //     icon: 'kaiwenjianjia',
      //     description: '页面管理',
      //   },
      // });
    },
  }
}

builtinPluginRegistry.pluginName = 'builtinPluginRegistry'

export default builtinPluginRegistry
