import React, { useState, useEffect } from "react";
import Axios from "axios";

//ant design
import { Space, Table, Button } from "antd";
import { message, Popconfirm } from "antd";

import "antd/dist/antd.css";
import {
  EditOutlined,
  DeleteOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

import ModalEditStudent from "../Modal/ModalEditStudent";

//redux
import { useDispatch } from "react-redux";
import studentAction from "~/redux/action/actionStudent";
import ModalViewStudent from "../Modal/ModalViewStudent";
import { setWebpackOptimizationSplitChunks } from "customize-cra";

const { Column } = Table;

const TableStudent = () => {
  //redux
  const dispatch = useDispatch();

  const [listStudent, setListStudent] = useState([]);
  //view class info
  const [infoStudent, setInfoStudent] = useState({});
  const [listIdClass, setListIdClass] = useState([]);

  var optionClassFilter = {};

  //get details class to show
  useEffect(() => {
    Axios.get("http://localhost:3001/student/getStudent").then((data) => {
      setListStudent(data.data);
    });
  }, [listStudent]);

  useEffect(() => {
    Axios.get("http://localhost:3001/class/getListId").then((data) => {
      setListIdClass(data.data);
    });
  }, []);

  var filterClass = {};

  const optionClassFilterChoice = listIdClass.map((key, index) => {
    filterClass.push({ text: key.id, value: key.id });
  });

  console.log("filterClass", filterClass);

  // console.log("optionClassFilterChoice", optionClassFilterChoice);

  const data = [];
  listStudent.map((value, key) => {
    data.push({
      id: value.id,
      name: value.name,
      age: value.age,
      email: value.email,
      classID: value.classID,
      sex: value.sex,
    });
  });

  //function edit, view Modal
  const editStudent = (idEdit) => {
    Axios.post("http://localhost:3001/student/getInfoById", {
      idEdit: idEdit,
    })

      .then((response) => {
        setInfoStudent(response.data[0]);
      })
      .catch((error) => {
        console.log("error: " + error);
      });

    dispatch(studentAction.activeEditStudentModal(true));
  };

  //delete function
  //notication delete

  const deleteStudent = (idDelete) => {
    Axios.post("http://localhost:3001/student/deleteStudent", {
      idDelete: idDelete,
    });
  };

  const confirm = (idDelete) => {
    message.success("Delete success!");
    deleteStudent(idDelete);
  };

  const cancel = (e) => {
    message.error("Cancel delete!");
  };

  //function view student
  const viewStudent = (idEdit) => {
    Axios.post("http://localhost:3001/student/getInfoById", {
      idEdit: idEdit,
    })

      .then((response) => {
        setInfoStudent(response.data[0]);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
    dispatch(studentAction.activeViewStudentModal(true));
  };

  //data table

  //sort table
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

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

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.name.length - b.name.length,
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
      title: "Class",
      dataIndex: "classID",
      key: "classID",
      filters: [{ ...filterClass }],
      filteredValue: filteredInfo.sex || null,
      onFilter: (value, record) => record.sex.includes(value),
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
  return (
    <div>
      <Table dataSource={data} columns={columns} onChange={handleChangeTable}>
        {/* <Column title="ID" dataIndex="id" key="id" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Class" dataIndex="classID" key="classID" />
        <Column title="Sex" dataIndex="sex" key="sex" /> */}
        <Column
          title="Action"
          key="action"
          render={(_, info) => (
            <Space size="middle">
              <Button
                type="primary"
                icon={<EditOutlined />}
                size="small"
                style={{ margin: "0 10px" }}
                onClick={() => {
                  editStudent(info.id);
                }}
              >
                Edit
              </Button>
              <Button
                type="primary"
                icon={<DeleteOutlined />}
                size="small"
                style={{ margin: "0 10px" }}
              >
                <Popconfirm
                  title="Are you sure to delete this task?"
                  onConfirm={() => confirm(info.id)}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <span
                    style={{
                      color: "white",
                    }}
                  >
                    Delete
                  </span>
                </Popconfirm>
              </Button>
              <Button
                type="primary"
                icon={<UnorderedListOutlined />}
                size="small"
                onClick={() => viewStudent(info.id)}
              >
                View
              </Button>
            </Space>
          )}
        />
      </Table>
      <ModalEditStudent infoStudent={infoStudent} />
      <ModalViewStudent infoStudent={infoStudent} />
    </div>
  );
};

export default TableStudent;
