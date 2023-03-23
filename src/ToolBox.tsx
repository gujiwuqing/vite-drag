import React from "react";
import upwardIcon from "./assets/FueYv1jc5D0AkaF0v3K4diy1DPKG.png";
import downIcon from "./assets/FrIFvEtzBFK3edruBVYb-2Is6ym7.png";
import copyIcon from "./assets/FmUtrCDn22WQfzkUYwgsjTkRNyuO.png";
import deleteIcon from "./assets/Fn8qANLH3hZN30maWPVmk6goG73i.png";
import { Button, Divider, Segmented, Tooltip } from "antd";
import { v4 as uuidv4 } from "uuid";
import { useAtom } from "jotai";
import { activeItemIdAtom, listAtom } from "./model/global";
export default function ToolBox() {
  const [activeItemId] = useAtom(activeItemIdAtom);
  const [list, setList] = useAtom(listAtom);
  const toolList = [
    {
      text: "向上移动",
      type: "upward",
      icon: upwardIcon,
    },
    {
      text: "向下移动",
      type: "down",
      icon: downIcon,
    },
    {
      text: "复制",
      type: "copy",
      icon: copyIcon,
    },
    {
      text: "删除",
      type: "delete",
      icon: deleteIcon,
    },
  ];

  const handleClick = (type: string) => {
    switch (type) {
      case "upward":
        let upwardArr = JSON.parse(JSON.stringify(list));
        let j = upwardArr.findIndex((t) => t.id == activeItemId);
        if (j != 0) {
          upwardArr.splice(j, 1, ...upwardArr.splice(j - 1, 1, upwardArr[j]));
        }
        setList([...upwardArr]);
        break;
      case "down":
        let downArr = JSON.parse(JSON.stringify(list));
        let i = downArr.findIndex((t) => t.id == activeItemId);
        if (i < downArr.length) {
          downArr.splice(i, 1, ...downArr.splice(i + 1, 1, downArr[i]));
        }
        setList([...downArr]);
        break;
      case "copy":
        let copyArr = JSON.parse(JSON.stringify(list));
        let item = copyArr.find((t) => t.id == activeItemId);
        let index = copyArr.findIndex((t) => t.id == activeItemId);
        copyArr.splice(index + 1, 0, { ...item, id: uuidv4() });
        setList([...copyArr]);
        break;
      case "delete":
        let arr = list.filter((t) => t.id != activeItemId);
        setList(arr);
        break;
      default:
        break;
    }
  };
  return (
    <div className="com-operate">
      {toolList.map((item) => {
        return (
          <Tooltip key={item.type} placement="right" title={item.text}>
            <div
              className="com-operate-img"
              onClick={() => {
                handleClick(item.type);
              }}
            >
              <img src={item.icon} alt="" />
            </div>
          </Tooltip>
        );
      })}
    </div>
  );
}
