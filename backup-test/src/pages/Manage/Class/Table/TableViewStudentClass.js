import React, { useState, useEffect } from "react";
import Axios from "axios";
//antd
import { Space, Table, Button, Modal } from "antd";
import { message, Popconfirm } from "antd";
import "antd/dist/antd.css";

//redux
import { useSelector, useDispatch } from "react-redux";
import classAction from "~/redux/action/actionClass";

const { Column } = Table;

const TableViewStudentClass = (props) => {
  const infoStudentByIdClass = props.infoStudentByIdClass;
  // console.log("info", infoStudentByIdClass);
  //data table
  const data = [];

  // const infoStudentByIdClass = [];

  //redux
  const classReducer = useSelector((state) => state.Class);

  // //get details class to show
  // useEffect(() => {
  //   infoStudentByIdClass.map((value, key) => {
  //     data.push({
  //       id: value.id,
  //       name: value.name,
  //       age: value.age,
  //       email: value.email,
  //     });
  //   });
  // }, [infoStudentByIdClass]);

  infoStudentByIdClass.map((value, key) => {
    data.push({
      id: value.id,
      name: value.name,
      age: value.age,
      email: value.email,
      sex: value.sex,
    });
  });

  const dispatch = useDispatch();

  //modal
  const handleCancel = () => {
    dispatch(classAction.activeViewStudentClass(false));
  };
  const handleOk = () => {
    dispatch(classAction.activeViewStudentClass(false));
  };

  return (
    <div style={{ height: "100vh", width: "50vw", border: "1px solid blue" }}>
      <Modal
        visible={classReducer.activeViewStudentClass}
        onCancel={handleCancel}
        onOk={handleOk}
        width={1000}
      >
        <Table dataSource={data} style={{ height: "100%", width: "100%" }}>
          <Column title="ID" dataIndex="id" key="id" />
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column title="Sex" dataIndex="sex" key="sex" />
        </Table>
      </Modal>
    </div>
  );
};

export default TableViewStudentClass;
