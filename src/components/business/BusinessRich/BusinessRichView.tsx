import React, { useState } from "react";
import MdEditor from "md-editor-rt";

export default function BusinessRichView(props) {
  const { value, id } = props;
  return (
    <MdEditor
      modelValue={value}
      previewOnly={true}
      onHtmlChanged={(value) => {
        console.log("value", value);
      }}
    />
  );
}
