import { IFile } from './interface';
const files = localStorage.getItem('files');
import blankJson from './blank.json';

export const fileMap: Record<string, IFile> = files
  ? JSON.parse(files)
  : {
      home: {
        type: 2,
        name: '主页',
        locator: 'home',
        projectSchema: blankJson,
      },
    };
export const getFiles = (): IFile[] => {
  return [...Object.values(fileMap)];
};

export const addFile = (id: string, file: IFile): boolean => {
  if (fileMap[id]) {
    return false;
  }
  fileMap[id] = file;
  localStorage.setItem('files', JSON.stringify(fileMap));
  return true;
};

export const delFile = (id: string): boolean => {
  if (fileMap[id]) {
    delete fileMap[id];
    localStorage.setItem('files', JSON.stringify(fileMap));
    return true;
  }
  return false;
};

export const updateFile = (id: string, file: IFile) => {
  fileMap[id] = file;
  localStorage.setItem('files', JSON.stringify(fileMap));
};

export const getFile = (id: string): IFile | undefined => {
  return fileMap[id];
};
