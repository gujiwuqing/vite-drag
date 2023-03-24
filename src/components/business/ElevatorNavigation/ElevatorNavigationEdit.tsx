import React from "react";
import ComColor from "../../common/ComColor";
import ComRadio from "../../common/ComRadio";
import ComInput from "../../common/ComInput";
import { listAtom } from "../../../model/global";
import { useAtom } from "jotai";
import { v4 as uuidv4 } from "uuid";
import { Button, message } from "antd";
import Svg from '../../common/Svg';
import {ElevatorNavigationDTO} from '../../../interface';
export default function ElevatorNavigationEdit(props:ElevatorNavigationDTO) {
  const { id, background, color, tabType, navList = [] } = props;
  const [list, setList] = useAtom(listAtom);
  const typeList = [
    { text: "默认", value: "line" },
    { text: "胶囊", value: "capsule" },
    { text: "卡片", value: "card" },
  ];

  const getLabel = (tabType: string) => {
    switch (tabType) {
      case "line":
        return "下划线颜色和选中项颜色";
      case "capsule":
        return "选中项背景色";
      case "card":
        return "线框色和选中项背景色";
    }
  };
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
            { icon: "", text: `标签${navList.length + 1}`, id: uuidv4() },
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
      <div className="com-title">电梯导航</div>
      <div className="deco-control-group--bg-colored deco-control-group">
        {navList.map((item) => {
          return (
            <div key={item.id}  className="flex justify-between items-center border-solid bg-white mt-3 mb-3 p-3 mr-4 relative">
              <ComInput
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
        <Button onClick={handleAddItem} type="primary" className="mt-2 h-10" block>添加导航</Button>
      </div>
      <ComRadio
        list={typeList}
        defaultValue={tabType}
        label="框体样式"
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
        label={getLabel(tabType)}
        defaultColor={color}
        onChange={(color: string) => {
          handleChange({ color });
        }}
      />
    </div>
  );
}
