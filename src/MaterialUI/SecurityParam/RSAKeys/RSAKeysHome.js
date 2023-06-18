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

function RSAKeysHome() {
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
      title: "Type",
      dataIndex: "type",
      key: "location",
    },

    {
      title: "Index",
      dataIndex: "index",
      key: "country",
    },
    {
      title: "length",
      dataIndex: "length",
      key: "currency",
    },

    {
      title: "Default TVR",
      dataIndex: "def_tvr",
      key: "def_tvr",
    },
    {
      title: "Amount Authorize",
      dataIndex: "amount_authorize",
      key: "Signature_Fields",
    },

    {
      title: "Other Amount",
      dataIndex: "other_amount",
      key: "other_amount",
    },

    {
      title: " Currency Count",
      dataIndex: "terminal_Currency_count",
      key: "_Currency_count",
    },
    {
      title: " UnPredictable Number",
      dataIndex: "terminal_Currency_count",
      key: "_Currency_count",
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
                          <h4 className="main-title">RSA Key</h4>
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
        title="RSA Key"
        isOpenDrawer={isOpenDrawer}
        handleCloseDrawer={handleCloseDrawer}
      >
        <Form layout={"vertical"} form={form}>
          <Row gutter={16}>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Terminal  ID"
                name="NW_ENV_ID"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Terminal ID" />
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
                <Input placeholder="Enter Terminal Description" />
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Location "
                name="location"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Location" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Country"
                name="country"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Country" />
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Currency"
                name="currency"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Currency" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Default TVR"
                name="default_tvr"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Default TVR" />
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Amount Authorize"
                name="amount_authorize"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Amount Authorize" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Other Amount "
                name="PAN_CHAR"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Other Amount" />
              </Form.Item>
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Terminal Currency Code"
                name="PAN_OFFSET"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Terminal Currency Code" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xxl={12} xl={12} lg={12} md={12}>
              <Form.Item
                label="Un Predictable Number "
                name="PAN_CHAR"
                rules={[
                  {
                    required: true,
                    message: "required",
                  },
                ]}
              >
                <Input placeholder="Enter Un Predictable Number" />
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

export default RSAKeysHome;
