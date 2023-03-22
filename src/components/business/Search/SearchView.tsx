import React from "react";
import { Search } from "react-vant";
export default function SearchView(props) {
  const { value = "", placeholder = "请输入搜索关键词" } = props;
  return (
    <div>
      <Search value={value} placeholder={placeholder} />
    </div>
  );
}
