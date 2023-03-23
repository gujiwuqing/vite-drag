import React from "react";
import ComColor from "../../common/ComColor";
import ComRadio from "../../common/ComRadio";
import ComInput from "../../common/ComInput";
import { listAtom } from "../../../model/global";
import { useAtom } from "jotai";
export default function SearchEdit(props) {
  const { shape = "square", id, background, placeholder, color } = props;
  const [list, setList] = useAtom(listAtom);
  const RadioList = [
    { text: "方形", value: "square" },
    { text: "圆形", value: "round" },
  ];

  const handleChange = (params: any) => {
    const newArr: any[] = list.map((item: any) => {
      if (item.id == id) {
        return { ...item, ...params };
      } else {
        return item;
      }
    });
    setList(newArr);
  };
  return (
    <div>
      <div className="com-title">商品搜索</div>
      <ComInput
        label="占位提示文字"
        defaultValue={placeholder}
        onChange={(value: string) => {
          handleChange({ placeholder: value });
        }}
      />
      <ComRadio
        list={RadioList}
        defaultValue={shape}
        label="框体样式"
        onChange={(value: string) => {
          handleChange({ shape: value });
        }}
      />
      <ComColor
        label="背景颜色"
        defaultColor={background}
        onChange={(background: string) => {
          handleChange({ background });
        }}
      />
      <ComColor label="框体颜色" />
      <ComColor
        label="文本颜色"
        defaultColor={color}
        onChange={(color: string) => {
          handleChange({ color });
        }}
      />
    </div>
  );
}
