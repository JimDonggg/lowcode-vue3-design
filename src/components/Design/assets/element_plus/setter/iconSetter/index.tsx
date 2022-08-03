import React, { Component } from 'react';
import { Select } from '@alifd/next';
const Option = Select.Option;
import iconList from '../utils/iconList';

interface AntdIconSetterProps {
  value: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  hasClear: boolean;
  onChange: (icon: string | object) => undefined;
  icons: string[];
}

const AntdIconSetter = (props: AntdIconSetterProps) => {
  const { value, defaultValue, onChange, placeholder } = props;
  const _value = typeof value === 'object' ? (value as any)?.componentName : value;
  const list = iconList;
  const handleChange = (icon: string) => {
    onChange({
      componentName: icon,
      props: {
        type: icon,
      },
    });
  };

  return (
    <Select
      placeholder={placeholder}
      defaultValue={_value}
      showSearch
      onChange={handleChange}
      style={{ marginRight: 8, width: '100%' }}
    >
      {list.map((item) => {
        return (
          <Option value={item} key={item}>
            {item}
          </Option>
        );
      })}
    </Select>
  );
};

AntdIconSetter.defaultProps = {
  value: undefined,
  type: 'string',
  defaultValue: '',
  hasClear: false,
  placeholder: '请点击选择 Icon',
  onChange: () => undefined,
};

// 因为下面这个问题，setter必须使用class组件
// http://gitlab.alibaba-inc.com/ali-lowcode/ali-lowcode-engine/issues/109046
export default class extends Component<AntdIconSetterProps> {
  render() {
    return <AntdIconSetter {...this.props} />;
  }
}
