import { Box, Button, Modal, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CreateUser from "./CreateUser";
import UserTable from "./UserTable";
import { Content } from "antd/es/layout/layout";
import { Icon } from "@iconify/react";
import { Layout, Menu, Slider, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import SideBarAntd from "../../AntdUI/SideBarAntd";
function UserHome() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuCollapse = () => {
    setCollapsed(!collapsed);
  };
  const [showUserCreate, setShowUserCreate] = useState(false);
  useEffect(() => {}, [showUserCreate]);
  const [isRefreshTableData, setIsRefreshTableData] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
  };

  const handleTableDataRefresh = () => {
    setIsRefreshTableData(true);
  };
  const handleCancel = () => {
    setShowUserCreate(false);
  };
  return (
    <div>
      {/* <Paper elevation={12} square> */}
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
            <div className="p-3">
              {showUserCreate ? (
                <>
                  <div className="create-button  ">
                    <div className="d-flex justify-content-between p-3">
                      <h3>Create User</h3>
                      <Button
                        variant="contained"
                        className="button-primary"
                        startIcon={<ArrowBackIosIcon />}
                        onClick={() => {
                          setShowUserCreate(false);
                        }}
                      >
                        Back
                      </Button>
                    </div>
                  </div>
                  <CreateUser handleCancel={handleCancel} />
                </>
              ) : (
                <>
                  {" "}
                  <div className="create-button  ">
                    <div className="d-flex justify-content-between p-3">
                      <h3>Users</h3>
                      <Button
                        variant="contained"
                        className="button-primary"
                        startIcon={<AddIcon />}
                        onClick={() => {
                          setShowUserCreate(true);
                        }}
                      >
                        Create
                      </Button>
                    </div>
                  </div>
                  <UserTable isRefreshTableData={isRefreshTableData} />
                </>
              )}
            </div>
          </Content>
        </Layout>
      </Layout>

      {/* </Paper> */}
    </div>
  );
}

export default UserHome;
