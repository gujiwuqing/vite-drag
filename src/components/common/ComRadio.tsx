import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

interface RadioItem {
  value: string;
  text: string;
}
const ComRadio = (props) => {
  const { list = [], defaultValue, label = "", onChange } = props;
  const [value, setValue] = useState(defaultValue);

  const onChangeValue = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <div className="deco-control-group flex items-center justify-between">
      <div>{label}</div>
      <Radio.Group onChange={onChangeValue} value={value} buttonStyle="solid">
        {list.map((item: RadioItem) => {
          return <Radio.Button value={item.value}>{item.text}</Radio.Button>;
        })}
      </Radio.Group>
    </div>
  );
};

export default ComRadio;
