import { Icon } from "@iconify/react";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SideBarAntd({ handleMenuCollapse, collapsed }) {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState("1");
  const [selectedSubKey, setSelectedSubKey] = useState("sub1");

  const handleOnClickMenu = (menu) => {
    console.log(menu);
    setSelectedKey(menu.key);
    setSelectedSubKey(`sub` + menu.key);
    if (menu.key == 1) {
      navigate("/groups");
    } else if (menu.key == 2) {
      navigate("/users");
    } else if (menu.key == 3) {
      navigate("/network-details");
    } else if (menu.key == 4) {
      navigate("/network-env-details");
    } else if (menu.key == 5) {
      navigate("/iso-header");
    }
  };
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem(
      "User Management",
      "sub1",
      <Icon icon="fluent-mdl2:account-management" />,
      [getItem("Groups", "1"), getItem("Users", "2")]
    ),
    getItem("System Config ", "sub2", <Icon icon={"grommet-icons:system"} />, [
      getItem("Network Config", "3"),
      getItem("Network Environment Details", "4"),
      getItem("ISO Header", "5"),
      getItem("Environment Config", "6"),
    ]),
  ];
  return (
    <>
      {" "}
      <Sider
        width={256}
        collapsible
        collapsed={collapsed}
        onCollapse={handleMenuCollapse}
      >
        <div className="demo-logo-vertical" />
        <div className="mt-3"></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[selectedKey]}
          defaultOpenKeys={[selectedSubKey]}
          onClick={handleOnClickMenu}
          items={items}
        />
      </Sider>
    </>
  );
}

export default SideBarAntd;
