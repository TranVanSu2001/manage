import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Modal, Form, Input, notification } from "antd";

import { useSelector, useDispatch } from "react-redux";
import studentAction from "~/redux/action/actionStudent";

const ModalEditStudent = (props) => {
  const infoStudent = props.infoStudent;
  // console.log("infoStudent: " + infoStudent);

  //state
  const oldId = infoStudent.id;
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log("info: ", infoStudent);
    setId(infoStudent.id);
    setName(infoStudent.name);
    setAge(infoStudent.age);
    setEmail(infoStudent.email);
  }, [infoStudent]);

  //redux
  const dispatch = useDispatch();
  const studentReducer = useSelector((state) => state.Student);

  const handleOk = () => {
    //submit info class to backend

    Axios.post("http://localhost:3001/student/editStudent", {
      id: id,
      name: name,
      age: age,
      email: email,
      oldId: oldId,
    });
    dispatch(studentAction.activeEditStudentModal(false));
    if (oldId != id) {
      noticationEditClassSuccess();
    }
  };

  const handleCancel = () => {
    dispatch(studentAction.activeEditStudentModal(false));
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
      title="Edit student"
      visible={studentReducer.activeEditModal}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={"Edit"}
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

export default ModalEditStudent;
