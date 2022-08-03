import { AssetsJson, ComponentDescription } from '@alilc/lowcode-types'
import ElButton from './ElButton'
import ElButtonGroup from './ElButton/ElButtonGroup'
import ElCard from './ElCard'
import ElInput from './ElInput'
import NDataTable from '../naive_ui/NDataTable'
import ElCheckbox from './ElCheckbox'
import ElCheckboxGroup from './ElCheckbox/ElCheckboxGroup'
import ElDatePicker from './ElDatePicker'
import ElRadio from './ElRadio'
import ElRadioGroup from './ElRadio/ElRadioGroup'
import ElForm from './ElForm'
import ElFormItem from './ElForm/ElFormItem'
import ElSelect from './ElSelect'
import ElOptions from './ElSelect/ElOptions'
import ElTabs from './ElTabs'
import ElTabPane from './ElTabs/ElTabPane'
// import ElIcon from './ElIcon';
import ElDialog from './ElDialog'
import ElRow from './ElRow'
import ElCol from './ElRow/ElCol'
import ElCascader from './ElCascader'
import ElTag from './ElTag'
import ElUpload from './ElUpload'
import NH2 from '../naive_ui/Typography/NH2'
import NH3 from '../naive_ui/Typography/NH3'
import NText from '../naive_ui/Typography/NText'
import icons from './ElIcon/icons'
import ElInputNumber from './ElInputNumber'
import ElLink from './ElLink'
import ElSwitch from './ElSwitch'
import ElImage from './ElImage'
import ElTooltip from './ElTooltip'
import ElDrawer from './ElDrawer'
// import ElImageViewer from './ElImage/ElImageViewer';
// import ElSpace from './ElSpace';
export default main()
function main() {
  const components = [
    NText,
    NH2,
    NH3,
    ElButton,
    ElButtonGroup,
    NDataTable,
    ElCard,
    ElDatePicker,
    ElInput,
    ElInputNumber,
    ElCheckbox,
    ElCheckboxGroup,
    ElRadio,
    ElRadioGroup,
    ElSelect,
    ElOptions,
    ElForm,
    ElFormItem,
    ElTabs,
    ElTabPane,
    // ElIcon,
    ElDialog,
    ElRow,
    ElCol,
    ElCascader,
    ElSwitch,
    ElTag,
    ElUpload,
    ElLink,
    ElTooltip,
    ElImage,
    // ElImageViewer,
    ElDrawer,
    ...icons,
    // ElSpace,
  ] as ComponentDescription[]
  const assets: AssetsJson = {
    version: '2.2.6',
    packages: [
      {
        package: 'vue',
        version: '3.2.33',
        urls: ['https://unpkg.com/vue@3.2.37/dist/vue.runtime.global.js'],
        library: 'Vue',
      },
      {
        package: 'element-plus',
        version: '2.2.6',
        urls: ['//unpkg.com/element-plus@2.2.6'],
        library: 'ElementPlus',
      },
      {
        package: 'naive-ui',
        version: '2.30.6',
        urls: ['https://unpkg.com/naive-ui@2.30.6/dist/index.prod.js'],
        library: 'naive',
      },
      {
        package: '@element-plus/icons-vue',
        version: '2.2.6',
        urls: ['//unpkg.com/@element-plus/icons-vue'],
        library: 'ElementPlusIconsVue',
      },
    ],
    components,
    // groupList: ['基础组件'],
    sort: {
      groupList: ['基础组件'],
      categoryList: ['布局', '基础', '表单', '数据展示', '导航', '反馈'],
    },
  }
  return assets
}
