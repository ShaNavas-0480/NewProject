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
        </Menu>
      </Sidebar>
    </>
  );
}

export default SideBarPro;
