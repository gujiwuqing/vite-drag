import React from "react";
import ComColor from "../../common/ComColor";
import ComRadio from "../../common/ComRadio";
import ComInput from "../../common/ComInput";
import { listAtom } from "../../../model/global";
import { useAtom } from "jotai";
import { TitleDTO } from "../../../interface";
export default function TitleEdit(props: TitleDTO) {
  const { id, background, fontSize, color, value } = props;
  const [list, setList] = useAtom(listAtom);
  const sizeList = [
    { text: "小", value: 12 },
    { text: "中", value: 14 },
    { text: "大", value: 16 },
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
      <div className="com-title">标题文本</div>
      <ComInput
        label="标题内容"
        defaultValue={value}
        onChange={(value: string) => {
          handleChange({ value });
        }}
      />
      <ComRadio
        list={sizeList}
        defaultValue={fontSize}
        label="标题大小"
        onChange={(value: string) => {
          handleChange({ fontSize: value });
        }}
      />
      <ComColor
        label="背景颜色"
        defaultColor={background}
        onChange={(background: string) => {
          handleChange({ background });
        }}
      />
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
