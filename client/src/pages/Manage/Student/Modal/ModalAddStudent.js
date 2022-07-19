import React, { useState } from "react";
import Axios from "axios";

import { Modal, Form, Input, notification } from "antd";

import { useSelector, useDispatch } from "react-redux";
import classAction from "~/redux/action/actionClass";
import studentAction from "~/redux/action/actionStudent";

const ModalAddStudent = () => {
  //react hook
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  //redux
  const dispatch = useDispatch();
  const classReducer = useSelector((state) => state.Student);

  const handleOk = () => {
    //submit info class to backend

    Axios.post("http://localhost:3001/student/add", {
      id: id,
      name: name,
      age: age,
      email: email,
    });
    setId("");
    setName("");
    setAge(0);
    setEmail("");
    dispatch(studentAction.activeAddStudentModal(false));

    var listID = [];

    Axios.get("http://localhost:3001/class/getListId").then((data) => {
      listID = data.data;
    });
    noticationAddClassSuccess();
  };

  const handleCancel = () => {
    dispatch(studentAction.activeAddStudentModal(false));
  };

  //show notication after add successfully
  const noticationAddClassSuccess = () => {
    notification["success"]({
      message: "Add class successfully",
      description: "",
      duration: 2,
    });
  };

  return (
    <Modal
      title="Add class"
      visible={classReducer.activeAddModal}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={"Add"}
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
              message: "Please input ID student",
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
              message: "Please input name student",
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
          label="Age"
          rules={[
            {
              required: true,
              message: "Please input age of student",
            },
          ]}
        >
          <Input
            type="text"
            onChange={(e) => {
              setAge(e.target.value);
            }}
            value={age}
          />
        </Form.Item>
        <Form.Item
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input email of student",
            },
          ]}
        >
          <Input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalAddStudent;
