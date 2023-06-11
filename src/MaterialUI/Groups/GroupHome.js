import AddIcon from "@mui/icons-material/Add";
import GroupTable from "./GroupTable";
import CreateGroup from "./CreateGroup";
import { useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Icon } from "@iconify/react";
import {
  Button,
  Col,
  Dropdown,
  Form,
  Input,
  Layout,
  Menu,
  Radio,
  Row,
  Select,
  Slider,
  Space,
  theme,
} from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import SideBarAntd from "../../AntdUI/SideBarAntd";
import SideBarPro from "../../AntdUI/SideBarPro";
import AntdTable from "../../AntdUI/AntdTable/AntdTable";
import SideDrawer from "../../AntdUI/SideDrawer";
import { Option } from "antd/es/mentions";
import { useNavigate } from "react-router-dom";
import AntdHeader from "../../AntdUI/AntdHeader";
function GroupHome() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuCollapse = () => {
    console.log("clicked");
    setCollapsed(!collapsed);
  };
  const [showGroupCreate, setShowGroupCreate] = useState(false);
  useEffect(() => {}, [showGroupCreate, collapsed]);
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
  const columns = [
    {
      title: "ID",
      dataIndex: "gid",
      key: "gid",
    },
    {
      title: "Name",
      dataIndex: "group_name",
      key: "group_name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Created Date",
      dataIndex: "create_date",
      key: "created_date",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "created_date",
      render: (text, record, index) => {
        return (
          <>
            <span onClick={() => handleEdit(record)}>
              <Icon icon={"material-symbols:edit"} />
            </span>
          </>
        );
      },
    },
  ];

  const handleEdit = (record) => {
    setIsOpenDrawer(true);
    form.setFieldsValue(record);
  };
  const dataSource = [
    {
      gid: 3,
      group_name: "Supervisor",
      description: "Supervisor Group",
      status: 1,
      create_date: null,
      created_by: null,
      modify_date: null,
      modified_by: null,
      email: "supervisor@madasim.com",
    },
    {
      gid: 2,
      group_name: "Testers",
      description: "Tester Group",
      status: 1,
      create_date: null,
      created_by: null,
      modify_date: null,
      modified_by: null,
      email: "testers@madasim.com",
    },
  ];

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    form.resetFields();
    setIsOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
  };
  const [form] = Form.useForm();

  const handleCancel = () => setOpenModal(false);

  const handleDeleteOk = () => {
    setOpenModal(false);
  };
  const handleDelete = (e) => {
    setOpenModal(true);
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <AntdHeader handleMenuCollapse={handleMenuCollapse} />
        <Layout>
          {/* <SideBarAntd
            collapsed={collapsed}
            handleMenuCollapse={handleMenuCollapse}
          /> */}
          <div className="d-flex">
            <SideBarPro collapsed={collapsed} />
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
                            className="button-primary"
                            icon={<Icon icon={"material-symbols:add"} />}
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
                          <h4 className="main-title">Groups</h4>
                          <div>
                            <Button
                              // type=""
                              className="button-primary me-3"
                              icon={<Icon icon={"material-symbols:add"} />}
                              // onClick={handleOpen}
                              onClick={handleOpenDrawer}
                            >
                              Create
                            </Button>

                            <Button
                              danger
                              // type=""
                              className="button-primary"
                              icon={<Icon icon={"material-symbols:add"} />}
                              onClick={handleDelete}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                      {/* <GroupTable isRefreshTableData={isRefreshTableData} /> */}
                      <AntdTable columns={columns} dataSource={dataSource} />
                    </>
                  )}
                </div>
                {/* </Paper> */}
                {/* <Modal
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
                </Modal> */}
              </div>
            </Content>
          </div>
        </Layout>
      </Layout>
      <SideDrawer
        title=" Group"
        isOpenDrawer={isOpenDrawer}
        handleCloseDrawer={handleCloseDrawer}
      >
        <Form layout={"vertical"} form={form}>
          <Row gutter={16}>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Group Name"
                name="group_name"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Group Name" />
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Group Description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Group Description" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xxl={24} xl={24} lg={24} md={24}>
              <Form.Item
                label="Group Mail"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Group Mail" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xxl={24} xl={24} lg={24} md={24}>
              <Form.Item
                label="Permissions"
                name="permisions"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  style={{
                    width: "100%",
                  }}
                  placeholder="select permission"
                  // onChange={handleChange}
                  optionLabelProp="label"
                >
                  <Option value="1" label="Listing the Users">
                    Listing the Users
                  </Option>
                  <Option value="2" label="Test Execution">
                    Test Execution
                  </Option>
                  <Option value="3" label="Echo Msg Testing">
                    Echo Msg Testing
                  </Option>
                  <Option value="4" label="Login with User name Pass">
                    Login with User name Pass
                  </Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <br />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </SideDrawer>
      <Modal
        open={openModal}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="delete-card-body">
            <div>
              <div className="d-flex justify-content-center mb-3 warning-icon">
                <Icon icon={"ph:warning-fill"} />
              </div>
              <p className="alert-delete-text mt-2">
                Are you Sure You want to Delete{" "}
                {/* <span className="highlight-name">{selectedRow.user_name}?</span> */}
              </p>

              <div className="buttons">
                <Button variant="contained" onClick={handleDeleteOk}>
                  OK
                </Button>

                <Button
                  variant="contained"
                  className="ms-3"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default GroupHome;
