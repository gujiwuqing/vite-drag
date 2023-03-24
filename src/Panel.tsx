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

  const handleAddView = (type: string, name: string): ViewListItem => {
    if (type == "title") {
      return {
        id: uuidv4(),
        type,
        value: "标题文本",
        fontSize: 12,
        color: "#000",
        background: "#fff",
        name,
      };
    } else if (type == "carousel") {
      return {
        id: uuidv4(),
        type,
        value: "",
        name,
      };
    } else if (type == "rich_text") {
      return {
        id: uuidv4(),
        type,
        value: "这是一个富文本",
        placeholder: "请输入内容",
        name,
      };
    } else if (type == "notice") {
      return {
        id: uuidv4(),
        type,
        text: "这是一条默认公告",
        color: "#3f45ff",
        background: "#edeeff",
        scrollable: true,
        name,
      };
    } else if (type == "image_text_nav") {
      return {
        id: uuidv4(),
        type,
        name,
        tabType: "image_text",
        background: "#fff",
        color: "#000",
        navList: [
          {
            icon: "iconshouye1",
            text: "导航一",
            id: uuidv4(),
          },
          {
            icon: "iconshouye1",
            text: "导航二",
            id: uuidv4(),
          },
          {
            icon: "iconshouye1",
            text: "导航三",
            id: uuidv4(),
          },
          {
            icon: "iconshouye1",
            text: "导航四",
            id: uuidv4(),
          },
        ],
      };
    } else if (type == "elevator_navigation") {
      return {
        id: uuidv4(),
        type,
        name,
        tabType: "line",
        background: "#fff",
        color: "#3f45ff",
        navList: [
          {
            text: "标签1",
            id: uuidv4(),
          },
          {
            text: "标签2",
            id: uuidv4(),
          },
          {
            text: "标签3",
            id: uuidv4(),
          },
        ],
      };
    } else if (type == "search") {
      return {
        id: uuidv4(),
        type,
        name,
        placeholder: "请输入内容",
        shape: "square",
        background: "#fff",
        color: "#323232",
      };
    } else {
      return {
        id: uuidv4(),
        type,
        name,
        value: "",
      };
    }
  };

  const handleAddItem = (type: string, name: string): void => {
    const newItem = handleAddView(type, name);
    setList([...list, newItem]);
  };
  return (
    <div className="com">
      <h1>组件</h1>
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
