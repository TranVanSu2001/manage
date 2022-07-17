import React, { useState } from "react";
import TableStudent from "./TableStudent";

import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import {
  StudentWrapper,
  StudentTitle,
  StudentContainer,
  ButtonAction,
  ButtonFunc,
} from "./style";

const Student = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    console.log("123");
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <StudentWrapper>
      <StudentTitle>Manage Student</StudentTitle>
      <ButtonAction>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ margin: "0 10px" }}
          onClick={showModal}
        >
          Add
        </Button>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Button type="primary" icon={<UnorderedListOutlined />}>
          View
        </Button>
      </ButtonAction>
      <StudentContainer>
        <TableStudent />
      </StudentContainer>
    </StudentWrapper>
  );
};

export default Student;
