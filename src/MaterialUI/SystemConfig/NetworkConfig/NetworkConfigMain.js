import AddIcon from "@mui/icons-material/Add";
import { useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Icon } from "@iconify/react";
import {
  Button,
  Col,
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

import { Option } from "antd/es/mentions";
import SideDrawer from "../../../AntdUI/SideDrawer";
import AntdTable from "../../../AntdUI/AntdTable/AntdTable";
import SideBarPro from "../../../AntdUI/SideBarPro";
import AntdHeader from "../../../AntdUI/AntdHeader";

function NetworkConfigMain() {
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
      dataIndex: "Network_ID",
      key: "Network_ID",
    },
    {
      title: "Description",
      dataIndex: "Network_Description",
      key: "Network_Description",
    },
    {
      title: "ISO Version",
      dataIndex: "ISO_VERSION_DESC",
      key: "ISO_VERSION_DESC",
    },

    {
      title: "ISO Header",
      dataIndex: "ISO_Header_Field",
      key: "ISO_Header_Field",
    },
    {
      title: "Message Type",
      dataIndex: "Message_Type_Field",
      key: "Message_Type_Field",
    },

    {
      title: "MAC Field",
      dataIndex: "MAC_Fields",
      key: "MAC_Fields",
    },
    {
      title: "Signature Field",
      dataIndex: "Signature_Fields",
      key: "Signature_Fields",
    },

    {
      title: "Dynamic Key Exchange",
      dataIndex: "DynamicKey_Fields",
      key: "DynamicKey_Fields",
    },

    {
      title: "Attala Varient",
      dataIndex: "Attala_Varient_Fields",
      key: "Attala_Varient_Fields",
    },

    /*{
      title: "IP",
      dataIndex: "NW_ENV_IP",
      key: "NW_ENV_IP",
    },
    {
      title: "Port",
      dataIndex: "NW_ENV_PORT",
      key: "NW_ENV_PORT",
    },*/
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
    setIsOpenDrawer(true);
    form.setFieldsValue(record);
  };
  const dataSource = [
    {
      key: 1,
      Network_ID: 1,
      Network_Description: "MADA",
      ISO_VERSION_DESC: "ISO8583-97",
      ISO_Header_Field: "Y",
      Message_Type_Field: "ISO",
      MAC_Fields: "0,1,2,3,4,5,11,12,39,47,49,55,59",
      Signature_Fields: "7,24,39,94,96",
      DynamicKey_Fields: "Y",
      Attala_Varient_Fields: 0,
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
                      {/* <CreateGroup /> */}
                    </>
                  ) : (
                    <>
                      {" "}
                      <div className="create-button  ">
                        <div className="d-flex justify-content-between p-3">
                          <h4 className="main-title">Network Details</h4>
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
        title=" Network Details"
        isOpenDrawer={isOpenDrawer}
        handleCloseDrawer={handleCloseDrawer}
      >
        <Form layout={"vertical"} form={form}>
          <Row gutter={16}>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Network Env ID"
                name="NW_ENV_ID"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Network Env ID" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Description"
                name="Network_Description"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Network Description" />
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="ISO Header"
                name="ISO_HEADER"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter ISO Header" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Protocol Type ID"
                name="PROTOCOL_TYPE_ID"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Protocol Type ID" />
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="ISO Header"
                name="ISO_HEADER"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter ISO Header" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="MAC Fields"
                name="MAC_FIELDS"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter MAC Fields" />
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="MAC Required"
                name="MAC_REQUIRED"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter MAC Required" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="PAN Character"
                name="PAN_CHAR"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter PAN Character" />
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="PAN Offset"
                name="PAN_OFFSET"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter PAN Offset" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="PAN Character"
                name="PAN_CHAR"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter PAN Character" />
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Signature Fields"
                name="SIGNATURE_FIELDS"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Signature Fields" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="ZMK ID"
                name="ZMK_ID"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter ZMK ID" />
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="ZPK ID"
                name="ZPK_ID"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter ZPK ID" />
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

export default NetworkConfigMain;
