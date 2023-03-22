import React, { useState } from "react";
import MdEditor from "md-editor-rt";
import { useAtom } from "jotai";
import { listAtom } from "../../../model/global";
export default function BusinessRichEdit(props) {
  const [list, setList] = useAtom(listAtom);
  const { value, id } = props;
  const changeValue = (value) => {
    const newArr = list.map((item) => {
      if (item.id == id) {
        return { ...item, value };
      } else {
        return item;
      }
    });
    setList(newArr);
  };
  return (
    <MdEditor
      modelValue={value}
      onChange={(value) => {
        changeValue(value);
      }}
      preview={false}
    />
  );
}
