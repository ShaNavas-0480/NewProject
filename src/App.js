import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="main-container">
        <Router>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/home" exact element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
