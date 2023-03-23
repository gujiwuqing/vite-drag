import React from "react";
import { Switch } from "antd";
export default function ComSwitch(props) {
  const { defaultChecked, label, onChange } = props;
  console.log("props", props);
  return (
    <div className="deco-control-group flex items-center justify-between">
      <div style={{ width: 200 }}>{label}</div>
      <Switch
        defaultChecked={defaultChecked}
        onChange={(checked) => {
          onChange && onChange(checked);
        }}
      />
    </div>
  );
}
