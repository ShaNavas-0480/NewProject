import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

function SideBarPro({ collapsed, handleCollapse }) {
  useEffect(() => {
    console.log("called", collapsed);
  }, [collapsed]);
  return (
    <>
      <Sidebar
        defaultCollapsed={collapsed}
        backgroundColor="#0b2a49"
        rootStyles={{
          color: "white",
          minHeight: "90vh",
        }}
      >
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "red",
                color: "#white",
              },
              "&:hover": {
                backgroundColor: "white",
                color: "#0b2a49",
                transition: "all 0.3s",
              },
            },
          }}
        >
          <SubMenu
            rootStyles={{
              ["& > ." + menuClasses.button]: {
                // backgroundColor: "red",
                color: "#9f0099",
                "&:hover": {
                  backgroundColor: "#eecef9",
                },
              },
              ["." + menuClasses.subMenuContent]: {
                backgroundColor: "#3890e7",
              },
            }}
            icon={<Icon icon="fa-solid:users-cog" />}
            label="User Management"
          >
            <MenuItem active component={<Link to="/groups" />}>
              {" "}
              Groups
            </MenuItem>
            <MenuItem component={<Link to="/users" />}> Users</MenuItem>
          </SubMenu>
          <SubMenu
            icon={<Icon icon="grommet-icons:system" />}
            label="System Config"
            rootStyles={{
              ["& > ." + menuClasses.button]: {
                // backgroundColor: "red",
                color: "#9f0099",
                "&:hover": {
                  backgroundColor: "#eecef9",
                },
              },
              ["." + menuClasses.subMenuContent]: {
                backgroundColor: "#3890e7",
              },
            }}
          >
            <MenuItem component={<Link to="/network-details" />}>
              {" "}
              Network Details
            </MenuItem>
            <MenuItem component={<Link to="/network-env-details" />}>
              {" "}
              Network Environment
            </MenuItem>
            <MenuItem component={<Link to="/iso-header" />}>
              {" "}
              ISO Header
            </MenuItem>
            <MenuItem component={<Link to="/transaction-type" />}>
              {" "}
              Transaction Type
            </MenuItem>
            <MenuItem component={<Link to="/terminal-config" />}>
              {" "}
              Terminal Config
            </MenuItem>
            <MenuItem component={<Link to="/merchant-config" />}>
              {" "}
              Merchant Config
            </MenuItem>
          </SubMenu>
          <SubMenu
            icon={<Icon icon="ic:baseline-security" />}
            label="Security Params"
            rootStyles={{
              ["& > ." + menuClasses.button]: {
                // backgroundColor: "red",
                color: "#9f0099",
                "&:hover": {
                  backgroundColor: "#eecef9",
                },
              },
              ["." + menuClasses.subMenuContent]: {
                backgroundColor: "#3890e7",
              },
            }}
          >
            <MenuItem component={<Link to="/key" />}> Keys</MenuItem>
            <MenuItem component={<Link to="/rsa-keys" />}> RSA Keys</MenuItem>
            <MenuItem component={<Link to="/pin-param" />}> PIN Param</MenuItem>
          </SubMenu>
          <MenuItem
            icon={<Icon icon="wpf:bank-cards" />}
            component={<Link to="/cards" />}
          >
            {" "}
            Cards
          </MenuItem>
          <MenuItem
            icon={<Icon icon="file-icons:microsoft-project" />}
            component={<Link to="/project" />}
          >
            {" "}
            Project
          </MenuItem>
          <SubMenu
            icon={<Icon icon="carbon:test-tool" />}
            label="Test Management"
            rootStyles={{
              ["& > ." + menuClasses.button]: {
                // backgroundColor: "red",
                color: "#9f0099",
                "&:hover": {
                  backgroundColor: "#eecef9",
                },
              },
              ["." + menuClasses.subMenuContent]: {
                backgroundColor: "#3890e7",
              },
            }}
          >
            <MenuItem component={<Link to="/create-test" />}>
              {" "}
              Create Test
            </MenuItem>
            <MenuItem component={<Link to="/run-test" />}> Run Test </MenuItem>
          </SubMenu>
          <MenuItem
            icon={<Icon icon="fluent-mdl2:bookmark-report" />}
            component={<Link to="/report" />}
          >
            {" "}
            Report
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}

export default SideBarPro;
