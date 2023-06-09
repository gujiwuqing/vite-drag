import React from "react";
import { Input } from "antd";
export default function ComInput(props) {
  const { label = "", defaultValue, onChange, style } = props;
  return (
    <div
      className="deco-control-group flex items-center justify-between"
      style={style}
    >
      <div style={{ width: 200 }}>{label}</div>
      <Input
        value={defaultValue}
        style={{ width: 200 }}
        onChange={(e) => {
          onChange && onChange(e.target.value);
        }}
      />
    </div>
  );
}
