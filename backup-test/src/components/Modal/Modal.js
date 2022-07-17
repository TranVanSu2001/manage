import React, { useState, useEffect } from "react";
import { Button, Modal, Checkbox, Form, Input } from "antd";

import { useSelector, useDispatch } from "react-redux";
import classAction from "~/redux/action/actionClass";

const ModalClass = (props) => {
  const { modalClassInfomation, modalTableClass } = props;

  console.log("props: ", modalClassInfomation);

  //redux
  const dispatch = useDispatch();
  const classReducer = useSelector((state) => state.Class);

  useEffect(() => {}, []);

  const handleOk = () => {
    dispatch(classAction.activeAddClassModal(false));
  };

  const handleCancel = () => {
    dispatch(classAction.activeAddClassModal(false));
  };

  const infoModal =
    modalClassInfomation === undefined ? modalTableClass : modalClassInfomation;

  return (
    <Modal
      title={infoModal.title}
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
        {infoModal.details.map((item, key) => (
          <Form.Item
            label={item.label}
            name={item.name}
            rules={[
              {
                required: false,
                message: "Please input class id!",
              },
            ]}
            key={item.label}
          >
            <Input />
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
};

export default ModalClass;
