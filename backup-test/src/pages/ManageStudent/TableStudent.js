import React from "react";
import { Space, Table, Tag, Button } from "antd";
import "antd/dist/antd.css";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { ButtonFunc } from "./style";

const { Column, ColumnGroup } = Table;
const data = [
  {
    id: "1",
    name: "Tran Van A",
    age: 11,
    email: "tranvana@gmail.com",
  },
  {
    id: "2",
    name: "Tran Van B",
    age: 22,
    email: "tranvanb@gmail.com",
  },
  {
    id: "3",
    name: "Tran Van C",
    age: 33,
    email: "tranvanc@gmail.com",
  },
];

const TableClass = () => (
  <Table dataSource={data}>
    <Column title="ID" dataIndex="id" key="id" />
    <Column title="Name" dataIndex="name" key="name" />
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Email" dataIndex="email" key="email" />
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

export default TableClass;
