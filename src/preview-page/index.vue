<template>
  <vue-renderer :schema="schema" :components="components"></vue-renderer>
</template>
<script>
import VueRenderer from '@knxcloud/lowcode-vue-renderer'
import { defineComponent } from 'vue'
import * as componentsMap from 'element-plus'
import { NDataTable, NH3, NH2, NText } from 'naive-ui'
export default defineComponent({
  components: {
    VueRenderer,
  },
  setup() {
    const components = {
      NDataTable,
      NH3,
      NH2,
      NText,
    }
    const projectSchema = JSON.parse(
      window.localStorage.getItem('projectSchema') || '{}'
    )
    const schema = projectSchema.componentsTree[0]
    const componentList = projectSchema.componentsMap
    componentList
      .filter((item) => componentsMap[item.exportName])
      .map((item) => {
        components[item.exportName] = componentsMap[item.exportName]
      })
    return {
      schema,
      components,
    }
  },
})
</script>

<style></style>
