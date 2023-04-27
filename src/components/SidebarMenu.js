import React, { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
function SidebarMenu() {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <>
        <Sidebar>
          <Menu
            onClick={() => {
              setActive(!isActive);
            }}
          >
            <SubMenu open={isActive} label="User Management">
              <MenuItem
                className="active"
                component={<Link to="/home/groups" />}
              >
                Groups
              </MenuItem>
              <MenuItem component={<Link to="/home/permissions" />}>
                {" "}
                Permissions{" "}
              </MenuItem>
              <MenuItem component={<Link to="/home/users" />}> Users </MenuItem>
            </SubMenu>

            <MenuItem component={<Link to="/home/configurations" />}>
              {" "}
              Configuration{" "}
            </MenuItem>
            <MenuItem> Key Management </MenuItem>
            <MenuItem> Setup </MenuItem>
          </Menu>
        </Sidebar>
      </>
    </>
  );
}

export default SidebarMenu;
