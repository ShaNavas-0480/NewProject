import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar_Menu from "../../components/Sidebar_Menu";

function MainLayout() {
  return (
    <div>
      <div className="d-flex">
        <Sidebar_Menu />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
