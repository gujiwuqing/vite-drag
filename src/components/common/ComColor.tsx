import React, { useState, useRef, useEffect } from "react";
import { SketchPicker } from "react-color";
export default function ComColor(props) {
  const colorRef = useRef(null);
  const { label = "选择颜色", defaultColor = "#f90", onChange } = props;
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState(defaultColor);
  const handleShow = () => {
    setShowPicker(!showPicker);
  };

  useEffect(() => {
    const handler = (e: any) => {
      const target = e.target as HTMLElement;
      if (
        colorRef.current === target ||
        colorRef.current === target.parentElement
      ) {
        setShowPicker(true);
      } else if (colorRef.current?.contains(e.target)) {
        // 点击色板
      } else {
        setShowPicker(false);
      }
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  return (
    <div className="flex items-center justify-between w-full deco-control-group">
      <div>{label}</div>
      <div className="w-16 h-8 color-preview" ref={colorRef}>
        <div
          className="w-14 h-6"
          style={{ backgroundColor: color }}
          // onClick={handleShow}
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
