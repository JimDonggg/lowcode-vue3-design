import { material, project, config } from '@alilc/lowcode-engine'
import { filterPackages } from '@alilc/lowcode-plugin-inject'
import { TransformStage } from '@alilc/lowcode-types'
import { updateFile, fileMap } from '../plugins/pages/file'
export const setPackgesToLocalStorage = async () => {
  const packages = await filterPackages(material.getAssets().packages)
  window.localStorage.setItem('packages', JSON.stringify(packages))
}

export const setProjectSchemaToLocalStorage = () => {
  const key: string = config.get('currentPage') || 'home'
  const schema = project.exportSchema(TransformStage.Save)
  fileMap[key].projectSchema = schema
  updateFile(key, fileMap[key])
  window.localStorage.setItem('projectSchema', JSON.stringify(schema))
}

export const getProjectSchemaToLocalStorage = () => {
  const data = window.localStorage.getItem('projectSchema')
  return data && JSON.parse(data)
}

export const saveSchema = async () => {
  setProjectSchemaToLocalStorage()
  await setPackgesToLocalStorage()
}
