import React, { useState } from "react";
import { SketchPicker } from "react-color";
export default function ComColor(props) {
  const { label = "选择颜色", defaultColor = "#f90", onChange } = props;
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState(defaultColor);
  const handleShow = () => {
    setShowPicker(!showPicker);
  };
  return (
    <div className="flex items-center justify-between w-full deco-control-group">
      <div>{label}</div>
      <div className="w-16 h-8 color-preview">
        <div
          className="w-14 h-6"
          style={{ backgroundColor: color }}
          onClick={handleShow}
        ></div>
        {showPicker && (
          <div className="color_picker">
            <SketchPicker
              onChange={({ hex }) => {
                setColor(hex);
                onChange && onChange(hex);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
