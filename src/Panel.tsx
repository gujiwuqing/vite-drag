import React from "react";
import { Row, Col } from "antd";
import Svg from "./components/common/Svg";
import { listAtom } from "./model/global";
import { useAtom } from "jotai";
import { v4 as uuidv4 } from "uuid";
import noticeIcon from "./assets/FlcvwSqlns7YVxDk8Zi2yAG6oEji.png";
import titleIcon from "./assets/FloUI22mSkzU6U70Ayuvf3hayCwH.png";
import carouselIcon from "./assets/Fgyd5N9R29QGAJXE7daGUWFpdv5z.png";
import searchIcon from "./assets/FsW9Sbp2UH3-1suib4UB-RwyaR3y.png";
import elevatorNavigationIcon from "./assets/Fpy_YxZ69hGiYl-SUDkDn7Sz2sNH.png";
import imageTextNavIcon from "./assets/FnCMmkIRcBPKq5oeY8kX7lq_7hk4.png";
import goodsIcon from "./assets/FirnSShEAotLWTHOsk21GdYa-SdX.png";
import richTextIcon from "./assets/FloUI22mSkzU6U70Ayuvf3hayCwH.png";
import { ViewListItem } from "./interface";
import { handleAddView } from "./util";
const Panel = () => {
  const [list, setList] = useAtom(listAtom);
  const panelList = [
    {
      type: "title",
      icon: titleIcon,
      name: "标题文本",
    },
    {
      type: "elevator_navigation",
      icon: elevatorNavigationIcon,
      name: "电梯导航",
    },
    {
      type: "goods",
      icon: goodsIcon,
      name: "商品",
    },
    {
      type: "carousel",
      icon: carouselIcon,
      name: "图文广告",
    },
    {
      type: "image_text_nav",
      icon: imageTextNavIcon,
      name: "图文导航",
    },
    {
      type: "rich_text",
      icon: richTextIcon,
      name: "富文本",
    },
    {
      type: "search",
      icon: searchIcon,
      name: "商品搜索",
    },
    {
      type: "notice",
      icon: noticeIcon,
      name: "公告",
    },
  ];

  const handleAddItem = (type: string, name: string): void => {
    const newItem = handleAddView(type, name);
    setList([...list, newItem]);
  };

  return (
    <div className="com bg-white">
      <h1 className="h-10 flex justify-center items-center border-solid border-black border-b-2">
        组件
      </h1>
      <Row>
        {panelList.map((item) => {
          return (
            <Col
              span={12}
              key={item.type}
              className="com-item"
              onClick={() => {
                handleAddItem(item.type, item.name);
              }}
              draggable={true}
              data-type={item.type}
              data-name={item.name}
            >
              <i
                className="com-item__icon"
                style={{ backgroundImage: `url(${item.icon})` }}
              ></i>
              <div>{item.name}</div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Panel;
