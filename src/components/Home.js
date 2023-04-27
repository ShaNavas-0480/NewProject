import React from "react";
import Navbar from "./Navbar";
import SidebarMenu from "./SidebarMenu";
import { Outlet } from "react-router-dom";

function Home() {
  // const { collapseSidebar } = useProSidebar();
  return (
    <div>
      <Navbar />
      <div className="d-flex ">
        <SidebarMenu />
        <div className="p-5 w-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
