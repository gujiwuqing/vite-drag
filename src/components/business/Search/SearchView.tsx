import React from "react";
import { Search } from "react-vant";
export default function SearchView(props) {
  const { value = "", placeholder, shape, background, color } = props;
  console.log("props", props);
  return (
    <div>
      <Search
        value={value}
        placeholder={placeholder}
        shape={shape}
        background={background}
        style={{
          "--rv-input-text-color": color,
        }}
      />
    </div>
  );
}
