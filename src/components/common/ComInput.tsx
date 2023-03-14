import React from "react";
import { Input } from "antd";
export default function ComInput(props) {
  const { title = "", value } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ width: 120 }}>{title}</div>
      <Input value={value} />
    </div>
  );
}
