import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Space, Table, Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { message, Popconfirm } from "antd";

import { useDispatch } from "react-redux";
import classAction from "~/redux/action/actionClass";

import TableViewStudentClass from "./TableViewStudentClass";

import ModalEditClass from "../Modal/ModalEditClass";
import ModalViewClass from "../Modal/ModalViewClass";

const { Column } = Table;

const TableClass = () => {
  const [listClass, setListClass] = useState([]);
  //view class info
  const [infoClass, setInfoClass] = useState({});
  const [infoStudentByIdClass, setInfoStudentByClass] = useState([]);

  //get details class to show
  useEffect(() => {
    Axios.get("http://localhost:3001/class/getClass").then((data) => {
      setListClass(data.data);
    });
  }, [listClass]);
  const data = [];
  listClass.map((value, key) => {
    data.push({
      id: value.id,
      name: value.name,
      numStu: value.numberOfStudent,
    });
  });

  const dispatch = useDispatch();

  const editClass = (idEdit) => {
    Axios.post("http://localhost:3001/class/getInfoById", {
      idEdit: idEdit,
    })

      .then((response) => {
        setInfoClass(response.data[0]);
      })
      .catch((error) => {
        console.log("error: " + error);
      });

    dispatch(classAction.activeEditClassModal(true));
  };

  const deleteClass = (idDelete) => {
    Axios.post("http://localhost:3001/class/deleteClass", {
      idDelete: idDelete,
    });
  };

  const viewClass = (idClass) => {
    Axios.post("http://localhost:3001/class/getListStudentById", {
      idClass: idClass,
    })

      .then((response) => {
        setInfoStudentByClass(response.data);
        console.log("data", response.data);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
    dispatch(classAction.activeViewStudentClass(true));
  };

  //notication delete
  const confirm = (idDelete) => {
    message.success("Delete success!");
    deleteClass(idDelete);
  };

  const cancel = (e) => {
    message.error("Cancel delete!");
  };

  return (
    <div>
      <Table dataSource={data}>
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Number of Student" dataIndex="numStu" key="numStu" />
        <Column
          title="Action"
          key="action"
          render={(value, info) => (
            <Space size="middle">
              <Button
                type="primary"
                icon={<EditOutlined />}
                size="small"
                style={{ margin: "0 10px" }}
                onClick={() => {
                  editClass(info.id);
                }}
              >
                Edit
              </Button>
              <Button
                type="primary"
                icon={<DeleteOutlined />}
                size="small"
                style={{ margin: "0 10px" }}
                onClick={() => {
                  // deleteClass(info.id);
                }}
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
                onClick={() => viewClass(info.id)}
              >
                View
              </Button>
              {/* <TableViewStudentClass idClass={info.id}></TableViewStudentClass> */}
            </Space>
          )}
        />
      </Table>
      <ModalEditClass infoClass={infoClass}></ModalEditClass>
      <ModalViewClass infoClass={infoClass} />
      <TableViewStudentClass infoStudentByIdClass={infoStudentByIdClass} />
    </div>
  );
};

export default TableClass;
