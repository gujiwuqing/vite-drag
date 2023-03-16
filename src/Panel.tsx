import React from "react";
import { Row, Col } from "antd";
import Svg from "./components/common/Svg";
import { listAtom } from "./model/global";
import { useAtom } from "jotai";
import { v4 as uuidv4 } from "uuid";
const Panel = () => {
  const [list, setList] = useAtom(listAtom);
  const panelList = [
    {
      title: "输入框",
      type: "input",
      icon: "iconwenben",
    },
    {
      title: "单选框",
      type: "radio",
      icon: "iconradio-checked",
    },
    {
      title: "复选框",
      type: "checkbox",
      icon: "icondanxuankuang",
    },
    {
      title: "走马灯",
      type: "carousel",
      icon: "iconzoumadeng",
    },
    {
      title: "搜索框",
      type: "search",
      icon: "iconzoumadeng",
    },
    {
      title: "富文本",
      type: "rich",
      icon: "iconzoumadeng",
    },
  ];

  const handleAddItem = (type: string) => {
    if (type == "input") {
      setList([
        ...list,
        {
          id: uuidv4(),
          type,
          value: "",
          placeholder: "请输入内容",
          title: "标题",
        },
      ]);
    } else if (type == "radio") {
      setList([
        ...list,
        {
          id: uuidv4(),
          type,
          value: "",
          placeholder: "请输入内容",
          title: "标题",
        },
      ]);
    } else if (type == "checkbox") {
      setList([
        ...list,
        {
          id: uuidv4(),
          type,
          value: "",
          placeholder: "请输入内容",
          title: "标题",
        },
      ]);
    } else if (type == "carousel") {
      setList([
        ...list,
        {
          id: uuidv4(),
          type,
          value: "",
          placeholder: "请输入内容",
          title: "标题",
        },
      ]);
    } else if (type == "search") {
      setList([
        ...list,
        {
          id: uuidv4(),
          type,
          value: "",
          placeholder: "请输入内容",
          title: "搜索框",
        },
      ]);
    } else if (type == "rich") {
      setList([
        ...list,
        {
          id: uuidv4(),
          type,
          value: "",
          placeholder: "请输入内容",
          title: "搜索框",
        },
      ]);
    }
  };
  return (
    <div className="panel">
      <h1>组件</h1>
      <Row>
        {panelList.map((item) => {
          return (
            <Col
              span={12}
              key={item.type}
              className="panel-item"
              onClick={() => {
                handleAddItem(item.type);
              }}
            >
              <div>{item.title}</div>
              <Svg type={item.icon} style={{ fontSize: 18 }} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Panel;
