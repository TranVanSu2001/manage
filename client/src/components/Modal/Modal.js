import React, { useState, useEffect } from "react";
import { Button, Modal, Checkbox, Form, Input } from "antd";

import { useSelector, useDispatch } from "react-redux";
import classAction from "~/redux/action/actionClass";

const ModalClass = (props) => {
  const { modalClassInfomation } = props;

  //redux
  const dispatch = useDispatch();
  const classReducer = useSelector((state) => state.Class);

  useEffect(() => {}, []);

  const handleOk = () => {
    //submit info class to backend
    dispatch(classAction.activeAddClassModal(false));
  };

  const handleCancel = () => {
    dispatch(classAction.activeAddClassModal(false));
  };

  return (
    <Modal
      title={modalClassInfomation.title}
      visible={classReducer.activeAddModal}
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
        {modalClassInfomation.details.map((item, index) => (
          <Form.Item
            label={item.label}
            name={item.name}
            // rules={[
            //   {
            //     required: false,
            //     message: `Please input class ${item.name}!`,
            //   },
            // ]}
            key={index}
          >
            <Input />
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
};

export default ModalClass;
