import React from "react";
import TableClass from "./Table/TableClass";

import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import {
  ClassWrapper,
  ClassTitle,
  ClassContainer,
  ButtonAction,
} from "./style";
import ModalAddClass from "./Modal/ModalAddClass";

import { useDispatch } from "react-redux";
import classAction from "~/redux/action/actionClass";

const Class = () => {
  //redux
  const dispatch = useDispatch();

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
