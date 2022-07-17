import React, { useState, useEffect } from "react";
import Axios from "axios";
import TableClass from "./TableClass";

import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import {
  ClassWrapper,
  ClassTitle,
  ClassContainer,
  ButtonAction,
} from "./style";
import ModalAddClass from "./Modal/ModalAddClass";

import { useSelector, useDispatch } from "react-redux";
import classAction from "~/redux/action/actionClass";

const Class = () => {
  //react hook
  //modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  //redux
  const dispatch = useDispatch();
  const classReducer = useSelector((state) => state.Class);

  const showModal = () => {
    dispatch(classAction.activeAddClassModal(true));
  };

  return (
    <ClassWrapper>
      <ClassTitle>Manage Class</ClassTitle>
      <ButtonAction>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ margin: "0 10px" }}
          onClick={showModal}
        >
          Add
        </Button>
        <ModalAddClass></ModalAddClass>
      </ButtonAction>
      <ClassContainer>
        <TableClass />
      </ClassContainer>
    </ClassWrapper>
  );
};

export default Class;
