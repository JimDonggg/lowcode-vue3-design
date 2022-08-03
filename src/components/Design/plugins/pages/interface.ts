import { ProjectSchema } from '@alilc/lowcode-types';

export interface IFile {
  type: 1 | 2; // 1文件夹 2页面
  name: string;
  locator: string;
  projectSchema?: ProjectSchema;
  root?: boolean; // 分级
  parent?: string; // 分级
}
