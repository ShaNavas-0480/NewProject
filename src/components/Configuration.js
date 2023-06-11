import React from "react";
import { Button } from "react-bootstrap";

function Configuration() {
  return (
    <>
      <div className="configuration container-fluid">
        <h3>Configuration</h3>
      </div>
      <div className="form mt-3">
        <form>
          <div className="row">
            <div className="col">
              <div className="">
                <label>
                  {" "}
                  Send Echo
                  <select type="text" className="form-control">
                    <option selected>Choose ...</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="col">
              <div className="">
                <label>
                  {" "}
                  Message header
                  <select type="text" className="form-control">
                    <option selected>Choose ...</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="row mt-3">
              <div className="d-flex availability">
                <div className="p-2 me-5 ms-2 labelStyle d-flex">
                  <input
                    type="radio"
                    name="selectedRadioButton"
                    value="yes"
                    className="margin-right1"
                  />
                  &nbsp; Server
                </div>
                <div className="p-2 me-5 ms-2 labelStyle d-flex">
                  <input
                    type="radio"
                    name="selectedRadioButton"
                    className="margin-right1"
                    value="no"
                  />
                  &nbsp; Client
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className=" mt-3">
                  <label>
                    {" "}
                    IP Address
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter IP Address"
                    />
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="mt-3 ">
                  <label>
                    {" "}
                    Port
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Port"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="row ">
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
          </div>
        </form>
      </div>
    </>
  );
}

export default Configuration;
