import iconList from '../../setter/utils/iconList'
import { ComponentDescription } from '@alilc/lowcode-types'
function generateIconList() {
  const componentlist: ComponentDescription[] = []
  iconList.forEach((item) => {
    componentlist.push({
      // group: '图标库',
      category: '基础',
      componentName: item,
      npm: {
        package: '@element-plus/icons-vue',
        version: '2.2.6',
        exportName: item,
        destructuring: true,
      },
      props: [
        {
          name: 'width',
          propType: 'string',
          description: '尺寸',
          defaultValue: '20',
        },
        {
          name: 'color',
          propType: 'string',
          description: '颜色',
          setter: 'ColorSetter',
          defaultValue: '#000000',
        },
      ],
      configure: {
        supports: {
          style: false,
          loop: true,
          events: [],
        },
      },
      // snippets: [
      //   {
      //     title: '图标',
      //   },
      // ],
      keywords: [item],
    })
  })
  return componentlist
}
const list = generateIconList()
export default list
