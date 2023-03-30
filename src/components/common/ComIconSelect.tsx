import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Radio, Row } from "antd";
import Svg from "./Svg";
export default function ComIconSelect(props) {
  const { visible, defaultValue = "", handleOk, handleCancel } = props;
  console.log("defaultValue", defaultValue);
  const iconList = [
    { icon: "iconshouye1", text: "首页" },
    { icon: "iconwode1", text: "我的" },
    { icon: "iconyingyongchanpin1", text: "应用产品" },
    { icon: "icondingyue1", text: "订阅" },
    { icon: "icongengduo1", text: "更多" },
    { icon: "iconxiaoxi1", text: "消息" },
    { icon: "iconfaxian1", text: "发现" },
    { icon: "iconshoucang1", text: "收藏" },
    { icon: "iconhuiyuan1", text: "会员" },
    { icon: "iconshangpu1", text: "店铺" },
  ];
  const [value, setValue] = useState("");
  const onOk = () => {
    handleOk && handleOk(value);
  };

  const onCancel = () => {
    handleCancel && handleCancel();
  };
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return (
    <Modal title="图标选择" open={visible} onOk={onOk} onCancel={onCancel}>
      <Radio.Group value={value}>
        <Row gutter={[16, 16]}>
          {iconList.map((item) => {
            return (
              <Col span={6} key={item.icon}>
                <Radio
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  value={item.icon}
                >
                  <div className="flex items-center justify-center flex-col ">
                    <Svg name={item.icon} />
                    <span>{item.text}</span>
                  </div>
                </Radio>
              </Col>
            );
          })}
        </Row>
      </Radio.Group>
    </Modal>
  );
}
