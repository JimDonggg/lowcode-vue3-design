import { defineComponent, h } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
// export const ConfigProvider = defineComponent((_, { slots }) => {
//   return () => {
//     return h(ElConfigProvider, { locale: zhCn }, slots);
//   };
// });

export const ConfigProvider = defineComponent({
  inheritAttrs: false,
  setup: (_, { slots }) => {
    return () => {
      return h(ElConfigProvider, { locale: zhCn }, slots)
    }
  },
})
