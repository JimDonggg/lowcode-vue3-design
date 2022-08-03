<template>
  <div class="hello" id="lce-container"></div>
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
      // await plugins.register(UndoRedoPlugin);
      await plugins.register(SchemaPlugin)
      await plugins.register(DataSource)
      await plugins.register(CodeEditor)
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
            '/js/simulator.js',
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
