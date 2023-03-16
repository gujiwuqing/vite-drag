import React from "react";
import ComInput from "../../common/ComInput";
export default function BusinessSearchEdit() {
  return (
    <div>
      <ComInput title="标题" placeholder="" />
      <ComInput title="提示语" value="请输入搜索值" />
    </div>
  );
}
