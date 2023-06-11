import { Icon } from "@iconify/react";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SideBarAntd({ handleMenuCollapse, collapsed, selectedKey }) {
  const navigate = useNavigate();
  // const [selectedKey, setSelectedKey] = useState(["1"]);
  const [selectedSubKey, setSelectedSubKey] = useState(["sub1"]);

  useEffect(() => {
    console.log("called");
    if (window.location.pathname === "/groups") {
      // setSelectedKey(["1"]);
      setSelectedSubKey(["sub1"]);
    } else if (window.location.pathname === "/users") {
      // setSelectedKey(["2"]);
      setSelectedSubKey(["sub1"]);
    }
  }, [window.location.pathname]);

  const handleOnClickMenu = (menu) => {
    console.log(menu.keyPath[0], menu.keyPath[1]);
    let sel_key = menu.keyPath[0];
    // setSelectedKey([]);
    setSelectedSubKey([]);
    // setSelectedKey([sel_key]);
    setSelectedSubKey([menu.keyPath[1]]);
    if (menu.key == 1) {
      navigate("/groups");
    } else {
      navigate("/users");
    }
    console.log(selectedKey, selectedSubKey);
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
      getItem("ISO Header", "4"),
      getItem("Environment Config", "5"),
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
        <div className="mt-3"></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[selectedKey]}
          defaultOpenKeys={selectedSubKey}
          onClick={handleOnClickMenu}
          items={items}
        />
      </Sider>
    </>
  );
}

export default SideBarAntd;
