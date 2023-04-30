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

function App() {
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
            <Route path="/home" element={<MainHome />} />
          </Routes>
        </Router>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
