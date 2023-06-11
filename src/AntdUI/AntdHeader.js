import { Icon } from "@iconify/react";
import { Button, Dropdown, Menu, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { useNavigate } from "react-router-dom";

function AntdHeader(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  const headerDropdown = (
    <Menu
      items={[
        {
          key: "1",
          label: <a onClick={handleLogout}>Logout</a>,
        },
        // {
        //   key: "2",
        //   label: (
        //     <a
        //       target="_blank"
        //       rel="noopener noreferrer"
        //       href="https://www.antgroup.com"
        //     >
        //       1st menu item
        //     </a>
        //   ),
        // },
      ]}
    />
  );
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      {" "}
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px ",
        }}
      >
        <div>
          <Button
            type="text"
            icon={<Icon icon="fluent-mdl2:breadcrumb" />}
            onClick={() => props.handleMenuCollapse()}
            style={{
              fontSize: "20px",
              width: 74,
              height: 64,
            }}
          />
          Logo
        </div>
        <div>
          <Dropdown overlay={headerDropdown}>
            <a onClick={(e) => e.preventDefault()}>
              <Icon icon="mingcute:user-4-fill" style={{ fontSize: "20px" }} />
            </a>
          </Dropdown>
        </div>
      </Header>
    </>
  );
}

export default AntdHeader;
