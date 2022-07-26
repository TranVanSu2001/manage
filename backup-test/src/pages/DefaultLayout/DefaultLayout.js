import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { useState } from "react";
import { AiFillHome, AiOutlineUnorderedList } from "react-icons/ai";
import { Link } from "react-router-dom";

import Topbar from "../HomePage/Topbar";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    "Home",
    "1",
    <Link to="/">
      <AiFillHome />
    </Link>
  ),
  getItem(
    "Manage",
    "sub1",
    <Link to="/">
      <AiOutlineUnorderedList />
    </Link>,
    [
      getItem("Class", "2", <Link to="/class"></Link>),
      getItem("Student", "3", <Link to="/student"></Link>),
      getItem("Subject", "4", <Link to="/subject"></Link>),
    ]
  ),
];

const DefaultLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Topbar />
        <div className="content">{children}</div>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Created by Suwj ©2022
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
