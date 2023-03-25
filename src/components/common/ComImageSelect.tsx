import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Radio, Row } from "antd";
import { v4 as uuidv4 } from "uuid";
export default function ComIconSelect(props) {
  const { visible, defaultValue = "", handleOk, handleCancel } = props;
  const imgList = [
    {
      url: "https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF",
      id: uuidv4(),
    },
    {
      url: "https://t7.baidu.com/it/u=2397542458,3133539061&fm=193&f=GIF",
      id: uuidv4(),
    },
    {
      url: "https://t7.baidu.com/it/u=938052523,709452322&fm=193&f=GIF",
      id: uuidv4(),
    },
    {
      url: "https://t7.baidu.com/it/u=3124693600,356058981&fm=193&f=GIF",
      id: uuidv4(),
    },
    {
      url: "https://t7.baidu.com/it/u=3908717,2002330211&fm=193&f=GIF",
      id: uuidv4(),
    },
    {
      url: "https://t7.baidu.com/it/u=4151878322,2414972490&fm=193&f=GIF",
      id: uuidv4(),
    },
    {
      url: "https://t7.baidu.com/it/u=1622404526,544341949&fm=193&f=GIF",
      id: uuidv4(),
    },
    {
      url: "https://t7.baidu.com/it/u=1506897211,10158787&fm=193&f=GIF",
      id: uuidv4(),
    },
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
    <Modal
      title="图片选择"
      open={visible}
      onOk={onOk}
      onCancel={onCancel}
      width={900}
    >
      <Radio.Group value={value}>
        <Row gutter={[16, 16]}>
          {imgList.map((item) => {
            return (
              <Col span={6} style={{ height: 190 }}>
                <Radio
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  value={item.url}
                >
                  <img src={item.url} alt="" />
                </Radio>
              </Col>
            );
          })}
        </Row>
      </Radio.Group>
    </Modal>
  );
}
