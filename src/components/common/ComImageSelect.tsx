import React, { useState } from "react";
import { Button, Modal } from "antd";
export default function ComImageSelect(props) {
  const { visible } = props;
  const [isModalOpen, setIsModalOpen] = useState(visible);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      ComImageSelect
    </Modal>
  );
}
