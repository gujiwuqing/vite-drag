import React from "react";
import ComColor from "../../common/ComColor";
import ComRadio from "../../common/ComRadio";
import ComInput from "../../common/ComInput";
import { listAtom } from "../../../model/global";
import { v4 as uuidv4 } from "uuid";
import { useAtom } from "jotai";
import { Button, message } from "antd";
export default function ImageTextNav(props) {
  const { id, background, placeholder, color, tabType, navList = [] } = props;
  const [list, setList] = useAtom(listAtom);
  const typeList = [
    { text: "图片导航", value: "image_text" },
    { text: "文字导航", value: "text" },
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

  const handleAddItem = () => {
    if (navList.length == 8) return message.error("最多可添加8条导航");
    const newArr: any[] = list.map((item: any) => {
      if (item.id == id) {
        return {
          ...item,
          navList: [
            ...navList,
            { icon: "", text: `导航${navList.length + 1}`, id: uuidv4() },
          ],
        };
      } else {
        return item;
      }
    });
    setList(newArr);
  };

  const handleChangeItem = (id: string, type: string, value: string) => {
    const item = navList.find((t: { id: string }) => t.id == id);
    item[type] = value;
    handleChange({ navList });
  };
  return (
    <div>
      <div className="com-title">图文导航</div>
      <div className="deco-control-group--bg-colored deco-control-group">
        {navList.map((item) => {
          return (
            <div key={item.id}>
              <img src="" alt="" />
              <ComInput
                label="标题"
                defaultValue={item.text}
                onChange={(value: string) => {
                  handleChangeItem(item.id, "text", value);
                }}
              />
            </div>
          );
        })}
        <Button onClick={handleAddItem}>添加图文导航</Button>
      </div>
      <ComRadio
        list={typeList}
        defaultValue={tabType}
        label="选择模板"
        onChange={(value: string) => {
          handleChange({ tabType: value });
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
