import React from "react";
import { Space, Table, Button } from "antd";
import "antd/dist/antd.css";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { ButtonFunc } from "./style";

const { Column, ColumnGroup } = Table;
const data = [
  {
    id: "1",
    name: "Tran Van A",
    classID: 11,
    startTime: "07:30",
    endTime: "09:30",
  },
  {
    id: "2",
    name: "Tran Van B",
    classID: 22,
    startTime: "07:30",
    endTime: "09:30",
  },
  {
    id: "1",
    name: "Tran Van C",
    classID: 33,
    startTime: "07:30",
    endTime: "09:30",
  },
];

const TableSubject = () => (
  <Table dataSource={data}>
    <Column title="ID" dataIndex="id" key="id" />
    <Column title="Name" dataIndex="name" key="name" />
    <Column title="Class ID" dataIndex="classID" key="classID" />
    <Column title="Start time" dataIndex="startTime" key="startTime" />
    <Column title="End time" dataIndex="endTime" key="endTime" />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            size="small"
            style={{ margin: "0 10px" }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            icon={<DeleteOutlined />}
            size="small"
            style={{ margin: "0 10px" }}
          >
            Delete
          </Button>
        </Space>
      )}
    />
  </Table>
);

export default TableSubject;
