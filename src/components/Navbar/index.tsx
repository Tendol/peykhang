import { Menu, Space, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const NAV_BAR_COLOR = "#0D99FF";
const Navbar = () => {
  const navigate = useNavigate();
  const navBarItem = [
    {
      key: "books",
      label: "Books",
    },
  ];
  return (
    <Header
      className="header"
      style={{
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          color: "white",
          float: "left",
          fontSize: "20px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        Peykhang
      </div>

      <Space
        size={16}
        style={{ float: "right", flexFlow: "wrap", alignItems: "center" }}
      >
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="books">
            <Typography.Text style={{ color: "white" }}>Books</Typography.Text>
            <Link to="/books" />
          </Menu.Item>
        </Menu>
      </Space>
    </Header>
  );
};
export default Navbar;
