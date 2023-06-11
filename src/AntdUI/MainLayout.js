import { Icon } from "@iconify/react";
import { Button, Layout, Menu, Slider, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import SideBarAntd from "./SideBarAntd";

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={<Icon icon="fluent-mdl2:breadcrumb" />}
            onClick={() => handleMenuCollapse()}
            style={{
              fontSize: "20px",
              width: 74,
              height: 64,
            }}
          />
          Logo
        </Header>
        <Layout>
          <SideBarAntd
            collapsed={collapsed}
            handleMenuCollapse={handleMenuCollapse}
          />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default MainLayout;
