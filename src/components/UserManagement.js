import React from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

function UserManagement() {
  return (
    <>
      <div className="user-management container-fluid">
        <div className="d-flex justify-content-between">
          <h3>UserManagement</h3>
          <div className="search-box w-25 mt-1">
            <div className="input-group ">
              <input
                className="form-control border-end-0 border search-bar"
                type="text"
                value="search"
                id="example-search-input"
              />
              <span className="input-group-append">
                <button
                  className="btn btn-outline-secondary bg-white border-start-0 border  ms-n3"
                  type="button"
                >
                  <FaSearch />
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="form mt-3">
          <form>
            <div className="row">
              <div className="col">
                <div className="">
                  <label>
                    {" "}
                    First Name
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter FirstName"
                    />
                  </label>
                </div>
                <div className=" mt-3">
                  <label>
                    {" "}
                    Email
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                  </label>
                </div>
                <div className="mt-3">
                  <label>
                    {" "}
                    Department
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Department"
                    />
                  </label>
                </div>
                <div className="mt-3">
                  <label>
                    {" "}
                    User ID
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Department"
                    />
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="">
                  <label>
                    {" "}
                    Middle Name
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Middle Name"
                    />
                  </label>
                </div>
                <div className=" mt-3">
                  <label>
                    {" "}
                    Phone Number
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Phone Number"
                    />
                  </label>
                </div>
                <div className="mt-3">
                  <label>
                    {" "}
                    Section
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Section"
                    />
                  </label>
                </div>
                <div className="mt-3">
                  <label>
                    {" "}
                    User Group
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter User Group"
                    />
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="">
                  <label>
                    {" "}
                    Last Name
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Last Name"
                    />
                  </label>
                </div>
                <div className=" mt-3">
                  <label>
                    {" "}
                    Extension
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Extension"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="">
                <label>
                  {" "}
                  Password
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                  />
                </label>
              </div>
            </div>
            <div className="row mt-3">
              <div className="mt-2 action-buttons">
                <Button type="button">Add</Button>
                <Button type="button" className="ms-3">
                  Modify
                </Button>
                <Button type="button" className="ms-3">
                  Delete
                </Button>
                <Button type="button" className="ms-3">
                  Set Password
                </Button>
                <Button type="button" className="ms-3">
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserManagement;
