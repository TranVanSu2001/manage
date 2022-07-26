import React, { useState } from "react";
import TableStudent from "./Table/TableStudent";

//ant design
import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import {
  StudentWrapper,
  StudentTitle,
  StudentContainer,
  ButtonAction,
  ButtonFunc,
} from "./style";

//redux
import { useSelector, useDispatch } from "react-redux";
import studentAction from "~/redux/action/actionStudent";

import ModalAddStudent from "./Modal/ModalAddStudent";

const Student = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  //redux
  const dispatch = useDispatch();
  const classReducer = useSelector((state) => state.Class);

  const showModal = () => {
    dispatch(studentAction.activeAddStudentModal(true));
  };

  const handleOk = () => {
    dispatch(studentAction.activeAddStudentModal(false));
  };

  const handleCancel = () => {
    dispatch(studentAction.activeAddStudentModal(false));
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
        <ModalAddStudent />
      </ButtonAction>
      <StudentContainer>
        <TableStudent />
      </StudentContainer>
    </StudentWrapper>
  );
};

export default Student;
