import React, { useState, useEffect } from "react";
import { Button, Modal, Checkbox, Form, Input } from "antd";

import { useSelector, useDispatch } from "react-redux";
import classAction from "~/redux/action/actionClass";

const ModalClass = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // console.log("props", props);
  console.log("modal");

  //redux
  const dispatch = useDispatch();

  const classReducer = useSelector((state) => state.Class);

  const handleOk = () => {
    dispatch(classAction.activeAddClassModal(false));
  };

  const handleCancel = () => {
    dispatch(classAction.activeAddClassModal(false));
  };

  // const details = [
  //   { label: "ID", name: "id" },
  //   { label: "Name", name: "name" },
  //   { label: "Number Student", name: "numStu" },
  // ];

  return (
    <div>
      <Modal
        title="Add infomation class"
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
          {/* {info.map((item, key) => (
            <Form.Item
              label={item.label}
              name={item.name}
              rules={[
                {
                  required: false,
                  message: "Please input class id!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          ))} */}
        </Form>
      </Modal>
    </div>
  );
};

export default ModalClass;
