import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

const BusinessRadioView: React.FC = (props) => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>{props?.title}</div>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
    </div>
  );
};

export default BusinessRadioView;
