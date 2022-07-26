import React, { useState, useEffect } from "react";
import Axios from "axios";
//antd
import { Space, Table, Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { message, Popconfirm } from "antd";
import "antd/dist/antd.css";

//redux
import { useSelector, useDispatch } from "react-redux";
import classAction from "~/redux/action/actionClass";
import studentAction from "~/redux/action/actionStudent";
import ModalAddStudent from "../../Student/Modal/ModalAddStudent";

const { Column } = Table;

const TableViewStudentClass = (props) => {
  //sort table
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  // ------

  useEffect(() => {}, [props]);

  const infoStudentByIdClass = props.infoStudentByIdClass;
  // console.log("info", infoStudentByIdClass);
  //data table
  var data = [];

  //redux
  const classReducer = useSelector((state) => state.Class);
  const studentReducer = useSelector((state) => state.Student);

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

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === "age" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Sex",
      dataIndex: "sex",
      key: "sex",
      filters: [
        {
          text: "Male",
          value: "Male",
        },
        {
          text: "Female",
          value: "Female",
        },
      ],
      filteredValue: filteredInfo.sex || null,
      onFilter: (value, record) => record.sex.includes(value),
    },
  ];

  const handleChangeTable = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
    console.log("clear");
  };

  const clearAll = () => {
    console.log("clear");
    setFilteredInfo({});
    setSortedInfo({});
  };

  const setAgeSort = () => {
    console.log("clear");
    setSortedInfo({
      order: "descend",
      columnKey: "age",
    });
  };

  const addMoreStudentInClass = () => {
    dispatch(studentAction.activeAddStudentModal(true));
    console.log("123");
  };

  return (
    <div>
      <Modal
        visible={classReducer.activeViewStudentClass}
        onCancel={handleCancel}
        onOk={handleOk}
        width={1060}
        bodyStyle={{ padding: "2.6rem", alignItems: "center" }}
        title={
          infoStudentByIdClass.length === 0
            ? ""
            : `Student in class ${infoStudentByIdClass[0].classID}`
        }
      >
        <Space
          style={{
            marginBottom: 16,
            // display: "none",
          }}
        >
          <Button onClick={setAgeSort}>Sort age</Button>
          <Button onClick={clearFilters}>Clear filters</Button>
          <Button onClick={clearAll}>Clear filters and sorters</Button>
        </Space>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ margin: "0 10px" }}
          onClick={addMoreStudentInClass}
        >
          Add more
        </Button>
        <Table
          columns={columns}
          dataSource={data}
          style={{ height: "100%", width: "100%" }}
          onChange={handleChangeTable}
          pagination={false}
        >
          {/* <Column title="ID" dataIndex="id" key="id" />
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column title="Sex" dataIndex="sex" key="sex" /> */}
        </Table>
      </Modal>
      <ModalAddStudent></ModalAddStudent>
    </div>
  );
};

export default TableViewStudentClass;
