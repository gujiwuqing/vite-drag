import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value: string) => console.log(value);

const App: React.FC = () => (
  <Search
    addonBefore="https://"
    placeholder="input search text"
    allowClear
    onSearch={onSearch}
    style={{ width: 304 }}
  />
);

export default App;
