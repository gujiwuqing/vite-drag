import React, { useState } from "react";
import MdEditor from "md-editor-rt";

export default function BusinessRichEdit() {
  const [text, setText] = useState("hello md-editor-rt！");
  return <MdEditor modelValue={text} onChange={setText} preview={false} />;
}
