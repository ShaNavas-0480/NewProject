import React from "react";
import { Col, Nav, Tab } from "react-bootstrap";
import { AiFillSetting } from "react-icons/ai";
import { FaUserCog } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import Configuration from "./Configuration";
import UserManagement from "./UserManagement";

function Sidebar() {
  return (
    <>
      <div className="sidebar-container ">
        <Tab.Container id="left-tabs-example " defaultActiveKey="second">
          <div className="d-flex">
            <Col sm={2} className="sidebar">
              <div className="p-3 mt-2 ">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <FaUserCog /> &nbsp; User Management
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <AiFillSetting />
                      &nbsp;Configuration
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      <MdManageHistory />
                      &nbsp; Key Management
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">
                      <MdAdminPanelSettings /> &nbsp;Setup
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
            <Col sm={1} />
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="user-management container mt-4">
                    <UserManagement />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {" "}
                  <div className="configuration container mt-4">
                    <Configuration />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  {" "}
                  <div className="key-management container mt-4">
                    <h3>Key Management</h3>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  {" "}
                  <div className="test-setup container mt-4">
                    <h3>Test Setup</h3>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </div>
        </Tab.Container>
      </div>
    </>
  );
}

export default Sidebar;
