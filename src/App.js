import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ProtectedRoute from "./auth/ProtectedRoute";
import Groups from "./components/UserManagement/Groups";
import Permissions from "./components/UserManagement/Permissions";
import Users from "./components/UserManagement/Users";
import Configuration from "./components/Configuration";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MainHome from "./MaterialUI/MainHome/MainHome";
import CreateGroup from "./MaterialUI/Groups/CreateGroup";
import "react-datepicker/dist/react-datepicker.css";
import "antd/dist/reset.css";
import MainLayout from "./AntdUI/MainLayout";
import GroupHome from "./MaterialUI/Groups/GroupHome";
import UserHome from "./MaterialUI/Users/UserHome";
import NetworkConfigMain from "./MaterialUI/SystemConfig/NetworkConfig/NetworkConfigMain";
import NetworkEnvDetialsHome from "./MaterialUI/SystemConfig/NetworkEnvDetails/NetworkEnvDetialsHome";
import ISO_Header from "./MaterialUI/SystemConfig/ISOHeader/ISO_Header";
import TransactionTypeMain from "./MaterialUI/SystemConfig/TransactionType/TransactionTypeMain";
import TerminalConfigHome from "./MaterialUI/SystemConfig/TerminalConfig/TerminalConfigHome";
import MerchantConfigHome from "./MaterialUI/SystemConfig/MerchantConfig/MerchantConfigHome";
import SecurityKeysHome from "./MaterialUI/SecurityParam/SecurityKeys/SecurityKeysHome";
import RSAKeysHome from "./MaterialUI/SecurityParam/RSAKeys/RSAKeysHome";
import PINParamHome from "./MaterialUI/SecurityParam/PINParam/PINParamHome";
import CardsHome from "./MaterialUI/Cards/CardsHome";
import ProjectHome from "./MaterialUI/Project/ProjectHome";
import TestManagementHome from "./MaterialUI/TestManagement/TestManagementHome";
import CreateTestHome from "./MaterialUI/TestManagement/CreateTest/CreateTestHome";
import RunTestHome from "./MaterialUI/TestManagement/RunTest/RunTestHome";
import ReportHome from "./MaterialUI/Report/ReportHome";

function App() {
  const router = [
    {
      path: "/groups",
      element: <GroupHome />,
    },
    {
      path: "/users",
      element: <UserHome />,
    },
    {
      path: "/home",
      element: <MainHome />,
    },
    {
      path: "/network-details",
      element: <NetworkConfigMain />,
    },
    {
      path: "/network-env-details",
      element: <NetworkEnvDetialsHome />,
    },
    {
      path: "/iso-header",
      element: <ISO_Header />,
    },
    {
      path: "/transaction-type",
      element: <TransactionTypeMain />,
    },
    {
      path: "/terminal-config",
      element: <TerminalConfigHome />,
    },
    {
      path: "/merchant-config",
      element: <MerchantConfigHome />,
    },
    {
      path: "/key",
      element: <SecurityKeysHome />,
    },
    {
      path: "/rsa-keys",
      element: <RSAKeysHome />,
    },
    {
      path: "/pin-param",
      element: <PINParamHome />,
    },
    {
      path: "/cards",
      element: <CardsHome />,
    },
    {
      path: "/project",
      element: <ProjectHome />,
    },
    {
      path: "/test-management",
      element: <TestManagementHome />,
    },
    {
      path: "/create-test",
      element: <CreateTestHome />,
    },
    {
      path: "/run-test",
      element: <RunTestHome />,
    },
    {
      path: "/report",
      element: <ReportHome />,
    },
  ];
  return (
    <>
      <div className="main-container">
        <Router>
          <Routes>
            <Route path="/" exact element={<Login />} />

            {/* <Route
              path="/home"
              exact
              element={
                // <ProtectedRoute>
                <Home />
                // </ProtectedRoute>
              }
            >
              <Route path="/home/groups" exact element={<Groups />} />
              <Route path="/home/permissions" exact element={<Permissions />} />
              <Route path="/home/users" exact element={<Users />} />
              <Route
                path="/home/configurations"
                exact
                element={<Configuration />}
              />
            </Route> */}
            {/* Material UI navigations */}
            {/* <Route path="/home" element={<MainHome />} /> */}
            {/* <Route path="/group/add" element={<CreateGroup />} /> */}
            {/* Antd Navigation */}
            {/* <Route path="/home" element={<MainLayout />} /> */}
            {router.map((val) => (
              <Route
                path={val.path}
                key={val.path}
                // element={val.element}
                element={val.element}
              />
            ))}
          </Routes>
        </Router>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
