import { Icon } from "@iconify/react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Layout,
  Row,
  Select,
  theme,
} from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import AntdTable from "../../AntdUI/AntdTable/AntdTable";
import SideBarPro from "../../AntdUI/SideBarPro";
import CreateUser from "./CreateUser";
import SideDrawer from "../../AntdUI/SideDrawer";
import { Option } from "antd/es/mentions";
import { Box, Modal } from "@mui/material";
import AntdHeader from "../../AntdUI/AntdHeader";
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

  const columns = [
    {
      title: "User ID",
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: "User Name",
      dataIndex: "user_name",
      key: "user_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Created By",
      dataIndex: "created_by",
      key: "created_by",
    },
    {
      title: "Tel Extension",
      dataIndex: "tel_exten",
      key: "tel_exten",
    },
    {
      title: "Tel Number",
      dataIndex: "user_tel_no",
      key: "user_tel_no",
    },
    {
      title: "Last Login Date",
      dataIndex: "last_login_date",
      key: "user_tel_no",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "",
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
    form.setFieldsValue(record);
    setIsOpenDrawer(true);
  };
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

  const dataSource = [
    {
      user_id: "TestUser",
      user_name: "Test User",
      password: "pass",
      pass_exp_date: null,
      create_date: null,
      created_by: null,
      modify_date: null,
      modified_by: null,
      gid: 1,
      status: 1,
      last_login_date: "2023-04-12 01:06:13",
      last_logoff_date: null,
      login_flag: "Y",
      super_user: 1,
      user_tel_no: null,
      tel_exten: null,
      landing_url: null,
      email: null,
    },
    {
      user_id: "TestUser3",
      user_name: "Test User3",
      password: "pass",
      pass_exp_date: "230318",
      create_date: "230319",
      created_by: "TestUser",
      modify_date: "230319",
      modified_by: "TestUser",
      gid: 1,
      status: 1,
      last_login_date: null,
      last_logoff_date: null,
      login_flag: null,
      super_user: 1,
      user_tel_no: "0501234567",
      tel_exten: "1234",
      landing_url: null,
      email: "TestUserEmail@email.com",
    },
  ];

  return (
    <div>
      {/* <Paper elevation={12} square> */}
      <Layout style={{ minHeight: "100vh" }}>
        <AntdHeader handleMenuCollapse={handleMenuCollapse} />
        <Layout>
          {/* <SideBarAntd
            collapsed={collapsed}
            handleMenuCollapse={handleMenuCollapse}
          /> */}
          <div className="d-flex">
            <SideBarPro
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
                        <h4 className="main-title">Users</h4>
                        <div>
                          <Button
                            className="button-primary me-3"
                            icon={<Icon icon={"material-symbols:add"} />}
                            // onClick={() => {
                            //   setShowUserCreate(true);
                            // }}
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
                    <AntdTable columns={columns} dataSource={dataSource} />
                  </>
                )}
              </div>
            </Content>
          </div>
        </Layout>
      </Layout>

      <SideDrawer
        title=" User"
        isOpenDrawer={isOpenDrawer}
        handleCloseDrawer={handleCloseDrawer}
      >
        <Form layout={"vertical"} form={form}>
          <Row gutter={16}>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="User Name"
                name="user_name"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter User Name" />
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Email" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Tel Extension"
                name="tel_exten"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Tel Extension" />
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Telephone Number"
                name="user_tel_no"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Telephone Number" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input type="password" placeholder="Enter Password" />
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Password Expiry Date"
                name="password_expiry_Date"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xxl={12} xl={12} lg={24} md={24}>
              <Form.Item
                label="Select Group"
                name=""
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
                  placeholder="select group"
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
            <Col xxl={12} xl={12} lg={24} md={24}>
              <Form.Item
                label="Select Department"
                name=""
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
                  placeholder="select department"
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
    </div>
  );
}

export default UserHome;
