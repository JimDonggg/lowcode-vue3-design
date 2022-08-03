import * as React from 'react';
import { Nav, Button, Dialog, Form, Radio, Input } from '@alifd/next';
import { project, config } from '@alilc/lowcode-engine';
import { ProjectSchema } from '@alilc/lowcode-types';
import blankJson from './blank.json';
import { getFiles, addFile, getFile } from './file';
import { IFile } from './interface';
const { useEffect, useState } = React;
const { Item } = Nav;
const formItemLayout = {
  labelCol: {
    fixedSpan: 8,
  },
  wrapperCol: {
    span: 14,
  },
};
let dialog: any;
// eslint-disable-next-line react/display-name
export default () => {
  const [files, setFiles] = useState<IFile[]>([]);

  useEffect(() => {
    getFileList();
  }, []);
  function getFileList() {
    const files: IFile[] = getFiles();
    setFiles(files);
  }
  const defaultCurrentPage = config.get('currentPage') || 'home';
  const onSelect = (keys: string[]) => {
    const key: string = keys[0];
    const file = getFile(key);
    // // 加载 schema
    project.removeDocument(project.currentDocument as any);
    project.importSchema(file?.projectSchema);
  };

  const createFile = async (values: IFile, errors: any) => {
    if (errors) return false;
    // project.removeDocument(project.currentDocument as any);
    // project.openDocument(schema);
    // 文件
    if (values.type === 2) {
      values.projectSchema = blankJson as ProjectSchema;
      addFile(values.locator, values);
      project.importSchema(blankJson as ProjectSchema);
      getFileList();
    }
    dialog.hide();
  };

  const openFileCreator = async () => {
    dialog = Dialog.show({
      v2: true,
      title: '新增',
      footer: ' ',
      content: (
        <Form {...formItemLayout} colon>
          <Form.Item name="name" label="文件名" required requiredMessage="请输入文件名称">
            <Input name="name" />
          </Form.Item>
          <Form.Item name="locator" label="路由" required requiredMessage="请输入路由">
            <Input name="locator" />
          </Form.Item>
          <Form.Item name="type" label="类型" required requiredMessage="请选择文件类型">
            <Radio.Group
              name="type"
              shape="button"
              dataSource={[
                // {
                //   label: '文件夹',
                //   value: 1,
                // },
                {
                  label: '文件',
                  value: 2,
                },
              ]}
            />
          </Form.Item>
          <Form.Item label=" " colon={false}>
            <Form.Submit
              type="primary"
              validate
              onClick={createFile}
              style={{ marginRight: 8 }}
            >
              创建
            </Form.Submit>
            <Form.Reset>重置</Form.Reset>
          </Form.Item>
        </Form>
      ),
    });
  };

  return (
    <div>
      <Nav type="line" defaultSelectedKeys={[defaultCurrentPage]} onSelect={onSelect}>
        {files.length
          ? files.map((file) => <Item key={file.locator}>{file.name}</Item>)
          : null}
      </Nav>
      <Button onClick={openFileCreator}> 新建页面 </Button>
    </div>
  );
};
