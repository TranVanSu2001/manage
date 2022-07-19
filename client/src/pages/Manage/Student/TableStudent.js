import React, { useState, useEffect } from "react";
import Axios from "axios";

//ant design
import { Space, Table, Tag, Button } from "antd";
import { message, Popconfirm } from "antd";

import "antd/dist/antd.css";
import {
  EditOutlined,
  DeleteOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

import { ButtonFunc } from "./style";
import ModalEditStudent from "./Modal/ModalEditStudent";

//redux
import { useSelector, useDispatch } from "react-redux";
import studentAction from "~/redux/action/actionStudent";
import ModalViewStudent from "./Modal/ModalViewStudent";

const { Column, ColumnGroup } = Table;

const TableClass = () => {
  //redux
  const dispatch = useDispatch();

  const [listStudent, setListStudent] = useState([]);
  //view class info
  const [infoStudent, setInfoStudent] = useState({});

  //get details class to show
  useEffect(() => {
    Axios.get("http://localhost:3001/student/getStudent").then((data) => {
      setListStudent(data.data);
    });
  }, [listStudent]);

  const data = [];
  listStudent.map((value, key) => {
    data.push({
      id: value.id,
      name: value.name,
      age: value.age,
      email: value.email,
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
  return (
    <div>
      <Table dataSource={data}>
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Email" dataIndex="email" key="email" />
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

export default TableClass;
