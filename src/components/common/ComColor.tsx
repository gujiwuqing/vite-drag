import React from "react";
import { SketchPicker } from "react-color";
export default function ComColor(props) {
  const { title = "选择颜色", defaultColor = "#f90" } = props;
  return (
    <div className="flex items-center justify-between w-full">
      <div>{title}</div>
      <div style={{ backgroundColor: defaultColor }} className="w-16 h-8 color-preview"></div>
      {/* <SketchPicker /> */}
    </div>
  );
}
