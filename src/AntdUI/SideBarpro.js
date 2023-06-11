import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function SideBarpro() {
  return (
    <>
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <SubMenu defaultOpen={true} label="User Management">
            <MenuItem active={true} component={<Link to="/groups" />}>
              {" "}
              Groups
            </MenuItem>
            <MenuItem component={<Link to="/users" />}> Users</MenuItem>
          </SubMenu>
          {/* <MenuItem component={<Link to="/groups" />}> Groups</MenuItem>
          <MenuItem component={<Link to="/users" />}> Users</MenuItem> */}
        </Menu>
      </Sidebar>
    </>
  );
}

export default SideBarpro;
