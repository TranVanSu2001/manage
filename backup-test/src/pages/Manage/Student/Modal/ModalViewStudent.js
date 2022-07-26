import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Modal, Form, Input } from "antd";

import { useSelector, useDispatch } from "react-redux";
import actionStudent from "~/redux/action/actionStudent";

const ModalViewStudent = (props) => {
  //get info class to view
  const infoStudent = props.infoStudent;

  //redux
  const dispatch = useDispatch();
  const studentReducer = useSelector((state) => state.Student);

  const handleOk = () => {
    dispatch(actionStudent.activeViewStudentModal(false));
  };

  const handleCancel = () => {
    dispatch(actionStudent.activeViewStudentModal(false));
  };

  return (
    <Modal
      title="View student"
      visible={studentReducer.activeViewModal}
      onCancel={handleCancel}
      onOk={handleOk}
      cancelButtonProps={{ style: { display: "none" } }}
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
          <Input type="text" value={infoStudent.id} />
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
          <Input type="text" value={infoStudent.name} />
        </Form.Item>
        <Form.Item
          label="Age"
          rules={[
            {
              required: true,
              message: "Please input number of student",
            },
          ]}
        >
          <Input type="text" value={infoStudent.age} />
        </Form.Item>
        <Form.Item
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input number of student",
            },
          ]}
        >
          <Input type="text" value={infoStudent.email} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalViewStudent;
