import React, { useState } from "react";
import ComColor from "../../common/ComColor";
import ComRadio from "../../common/ComRadio";
import ComInput from "../../common/ComInput";
import { listAtom } from "../../../model/global";
import { v4 as uuidv4 } from "uuid";
import { useAtom } from "jotai";
import { Button, message } from "antd";
import ComIconSelect from "../../common/ComIconSelect";
import Svg from "../../common/Svg";
import { ImageTextNavDTO } from "../../../interface";
export default function ImageTextNav(props: ImageTextNavDTO) {
  const { id, background, color, tabType, navList = [] } = props;
  const [list, setList] = useAtom(listAtom);
  const [visible, setVisible] = useState(false);
  const [currentId, setCurrentId] = useState("");
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

  /**
   * 新增导航项
   * @returns
   */

  const handleAddItem = () => {
    if (navList.length == 8) return message.error("最多可添加8条导航");
    const newArr: any[] = list.map((item: any) => {
      if (item.id == id) {
        return {
          ...item,
          navList: [
            ...navList,
            {
              icon: "iconshouye1",
              text: `导航${navList.length + 1}`,
              id: uuidv4(),
            },
          ],
        };
      } else {
        return item;
      }
    });
    setList(newArr);
  };

  /**
   * 修改导航项
   * @param id
   * @param type
   * @param value
   */
  const handleChangeItem = (id: string, type: string, value: string) => {
    const item = navList.find((t: { id: string }) => t.id == id);
    item[type] = value;
    handleChange({ navList });
  };

  /**
   * 删除导航项
   * @param id
   */
  const handleDeleteItem = (id: string) => {
    const newArr = navList.filter((t) => t.id !== id);
    handleChange({ navList: newArr });
  };
  return (
    <div>
      <div className="com-title">图文导航</div>
      <div className="deco-control-group--bg-colored deco-control-group">
        {navList.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-between items-center border-solid bg-white mt-3 mb-3 p-3 mr-4 relative"
            >
              <div
                className="flex items-center justify-center cursor-pointer flex-col w-20"
                onClick={() => {
                  setVisible(true);
                  setCurrentId(item.id);
                }}
              >
                <Svg name={item.icon} fontSize={34} />
                <div>更换icon</div>
              </div>
              <ComInput
                style={{ width: 360 }}
                label="标题"
                defaultValue={item.text}
                onChange={(value: string) => {
                  handleChangeItem(item.id, "text", value);
                }}
              />
              <div
                className="absolute right-0 top-0 cursor-pointer"
                onClick={() => {
                  handleDeleteItem(item.id);
                }}
              >
                <Svg name="iconclose" />
              </div>
            </div>
          );
        })}
        <Button
          onClick={handleAddItem}
          type="primary"
          className="mt-2 h-10"
          block
        >
          添加图文导航
        </Button>
      </div>
      <ComIconSelect
        visible={visible}
        defaultValue={navList.find((t) => t.id == currentId)?.icon}
        handleOk={(value: string) => {
          setVisible(false);
          handleChangeItem(currentId, "icon", value);
          setCurrentId("");
        }}
        handleCancel={() => {
          setVisible(false);
          setCurrentId("");
        }}
      />
      <ComRadio
        list={typeList}
        defaultValue={tabType}
        label="选择模板"
        onChange={(value: string) => {
          console.log("value", value);
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
