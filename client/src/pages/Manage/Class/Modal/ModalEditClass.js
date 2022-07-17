import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Modal, Form, Input, notification } from "antd";

import { useSelector, useDispatch } from "react-redux";
import classAction from "~/redux/action/actionClass";

const ModalEditClass = (props) => {
  //react hook
  const infoClass = props.infoClass;
  const oldId = infoClass.id;
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [numOfStu, setNumOfStu] = useState("");

  useEffect(() => {
    setId(infoClass.id);
    setName(infoClass.name);
    setNumOfStu(infoClass.numberOfStudent);
  }, [infoClass]);

  //redux
  const dispatch = useDispatch();
  const classReducer = useSelector((state) => state.Class);

  const handleOk = () => {
    //submit info class to backend

    Axios.post("http://localhost:3001/class/editClass", {
      id: id,
      name: name,
      numOfStu: numOfStu,
      oldId: oldId,
    });
    dispatch(classAction.activeEditClassModal(false));
    noticationEditClassSuccess();
  };

  const handleCancel = () => {
    dispatch(classAction.activeEditClassModal(false));
  };

  //show notication
  const noticationEditClassSuccess = () => {
    notification["success"]({
      message: "Edit class successfully",
      description: "",
      duration: 2,
    });
  };
  return (
    <Modal
      title="Edit class"
      visible={classReducer.activeEditModal}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="ID"
          rules={[
            {
              required: true,
              message: "Please input ID class",
            },
          ]}
        >
          <Input
            type="text"
            onChange={(e) => {
              setId(e.target.value);
            }}
            value={id}
          />
        </Form.Item>
        <Form.Item
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input name class",
            },
          ]}
        >
          <Input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </Form.Item>
        <Form.Item
          label="Number Student"
          rules={[
            {
              required: true,
              message: "Please input number of student",
            },
          ]}
        >
          <Input
            type="text"
            onChange={(e) => {
              setNumOfStu(e.target.value);
            }}
            value={numOfStu}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalEditClass;
