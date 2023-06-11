import { Icon } from "@iconify/react";
import { Drawer } from "antd";
import React from "react";

function SideDrawer(props) {
  const placement = "right";
  return (
    <>
      {" "}
      <Drawer
        title={props.title}
        placement={placement}
        closable={true}
        onClose={props.handleCloseDrawer}
        open={props.isOpenDrawer}
        key={placement}
        // size={"large"}
        width={500}
        // closeIcon={<Icon icon={"material-symbols:close"} />}
      >
        {props.children}
      </Drawer>
    </>
  );
}

export default SideDrawer;
