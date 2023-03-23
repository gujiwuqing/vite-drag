import React from "react";
import ComInput from "../../common/ComInput";
import { listAtom } from "../../../model/global";
import { useAtom } from "jotai";
import ComColor from "../../common/ComColor";
import ComSwitch from "../../common/ComSwitch";
export default function BusinessNoticeEdit(props) {
  const { text, background, color, id, scrollable } = props;
  const [list, setList] = useAtom(listAtom);
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
      <div className="com-title">公告</div>
      <ComInput
        label="公告内容"
        defaultValue={text}
        onChange={(value: string) => {
          handleChange({ text: value });
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
      <ComSwitch
        label="是否滚动"
        defaultChecked={scrollable}
        onChange={(scrollable: boolean) => {
          handleChange({ scrollable });
        }}
      />
    </div>
  );
}
