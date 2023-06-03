import AddIcon from "@mui/icons-material/Add";
import GroupTable from "./GroupTable";
import CreateGroup from "./CreateGroup";
import { useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Icon } from "@iconify/react";
import { Button, Layout, Menu, Slider, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import SideBarAntd from "../../AntdUI/SideBarAntd";
function GroupHome() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuCollapse = () => {
    setCollapsed(!collapsed);
  };
  const [showGroupCreate, setShowGroupCreate] = useState(false);
  useEffect(() => {}, [showGroupCreate]);
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
            <div>
              {/* <Paper elevation={12} square> */}
              <div className="p-3">
                {showGroupCreate ? (
                  <>
                    <div className="create-button  ">
                      <div className="d-flex justify-content-between p-3">
                        <h3>Create Group</h3>
                        <Button
                          variant="contained"
                          className="button-primary"
                          startIcon={<ArrowBackIosIcon />}
                          onClick={() => {
                            setShowGroupCreate(false);
                          }}
                        >
                          Back
                        </Button>
                      </div>
                    </div>
                    <CreateGroup />
                  </>
                ) : (
                  <>
                    {" "}
                    <div className="create-button  ">
                      <div className="d-flex justify-content-between p-3">
                        <h3>Groups</h3>
                        <Button
                          variant="contained"
                          className="button-primary"
                          startIcon={<AddIcon />}
                          // onClick={() => {
                          //   setShowGroupCreate(true);
                          // }}
                          onClick={handleOpen}
                        >
                          Create
                        </Button>
                      </div>
                    </div>
                    <GroupTable isRefreshTableData={isRefreshTableData} />
                  </>
                )}
              </div>
              {/* </Paper> */}
              <Modal
                open={openModal}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <CreateGroup
                    handleClose={handleClose}
                    handleTableDataRefresh={handleTableDataRefresh}
                  />
                </Box>
              </Modal>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default GroupHome;
