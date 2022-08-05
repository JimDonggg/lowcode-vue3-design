<template>
  <div id="lce-container" style="height: 100vh"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Inject from '@alilc/lowcode-plugin-inject'
import { init, plugins } from '@alilc/lowcode-engine'
// import UndoRedoPlugin from '@alilc/lowcode-plugin-undo-redo';
import SchemaPlugin from '@alilc/lowcode-plugin-schema'
import { EngineOptions } from '@alilc/lowcode-editor-core'
import DataSource from '@alilc/lowcode-plugin-datasource-pane'
import CodeEditor from '@alilc/lowcode-plugin-code-editor'
import RegistryPlugin from './plugins/registry'
import InitPlugin from './plugins/init'
import SetterPlugin from './plugins/setter'
import { registerRefProp } from './plugins/set-ref-prop'
import Actions from './plugins/actions'
export default defineComponent({
  setup() {
    onMounted(async () => {
      const preference = new Map()

      preference.set('DataSourcePane', {
        importPlugins: [],
        dataSourceTypes: [
          {
            type: 'fetch',
          },
        ],
      })
      await plugins.register(Inject)
      await plugins.register(RegistryPlugin)
      // await plugins.register(UndoRedoPlugin);
      await plugins.register(SchemaPlugin)
      await plugins.register(DataSource)
      await plugins.register(SetterPlugin)
      await plugins.register(InitPlugin)
      await plugins.register(CodeEditor)
      await plugins.register(Actions)
      await plugins.register(registerRefProp)
      await init(
        document.getElementById('lce-container')!,
        {
          enableCondition: true,
          enableCanvasLock: true,
          supportVariableGlobally: true,
          simulatorUrl: [
            // 'https://unpkg.com/vue-router/dist/vue-router.global.prod.js',
            // '/lib/vue-simulator-renderer.js',
            'https://unpkg.com/@knxcloud/lowcode-vue-simulator-renderer/dist/vue-simulator-renderer.js',
            'https://unpkg.com/@knxcloud/lowcode-vue-simulator-renderer/dist/vue-simulator-renderer.css',
            // '/lib/vue-simulator-renderer.css',
            // '/js/simulator.js',
            '/js/theme.js',
            '/styles/element-plus.css',
          ],
          // 目前appHelper未支持
          // appHelper: {
          //   utils: {
          //     ...tools,
          //   },
          // },
        } as EngineOptions,
        preference
      )
    })
  },
})
</script>
