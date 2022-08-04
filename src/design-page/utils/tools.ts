import { ElMessage, ElMessageBox } from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import SparkMD5 from 'spark-md5';
import dayjs from 'dayjs';
import { App } from 'vue';
// import VueRouter from 'vue-router';
// const router = VueRouter.createRouter({
//   // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//   history: VueRouter.createWebHashHistory(),
//   routes: [], // `routes: routes` 的缩写
// });
export default function init(app: App) {
  app.config.globalProperties.$message = ElMessage;
  app.config.globalProperties.$message = ElMessage;
  app.config.globalProperties.$msgbox = ElMessageBox;
  app.config.globalProperties.$messageBox = ElMessageBox;
  app.config.globalProperties.$alert = ElMessageBox.alert;
  app.config.globalProperties.$confirm = ElMessageBox.confirm;
  app.config.globalProperties.$prompt = ElMessageBox.prompt;
  app.config.globalProperties.$utils = {
    md5: SparkMD5,
    dayjs,
  };
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
  // app.use(router);
}
