import { Button } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import APIService from "../../services/APIService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
function CreateGroup({ handleClose, handleTableDataRefresh }) {
  const token = localStorage.getItem("token");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState();
  useEffect(() => {
    listPermissionsAPI();
  }, []);
  const listPermissionsAPI = () => {
    APIService.post(
      process.env.REACT_APP_LOCAL_HOST_URL + "/UserSec/ListPermissions",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: token ? `Bearer ${token}` : "",
        },
      }
    )
      .then((response) => {
        console.log(response);
        let optionData = response.data.map((item) => {
          return { value: item.pid, label: item.description };
        });
        setOptions(optionData);
      })
      .catch((errors) => {
        console.log(errors);
        if (errors.response && errors.response.status === 440) {
          toast.warn("Session Timed Out");
          localStorage.clear();
          navigate("/");

          return;
        }
      });
  };
  const onSubmit = (data) => {
    let authUrls = selectedOptions.map((ids) => {
      return ids.value;
    });
    authUrls = authUrls.join(",");
    console.log(authUrls);

    data["auth_urls"] = authUrls;
    data["status"] = 1;
    console.log(data);

    APIService.post(
      process.env.REACT_APP_LOCAL_HOST_URL + "/UserSec/CreateGroup",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: token ? `Bearer ${token}` : "",
        },
      }
    )
      .then((response) => {
        console.log(response);
        handleTableDataRefresh();
        handleClose();
        reset();
        toast.success("Group created Successfully");
      })
      .catch((errors) => {
        console.log(errors);
        if (errors.response && errors.response.status === 440) {
          toast.warn("Session Timed Out");
          localStorage.clear();
          navigate("/");

          return;
        }
      });
  };

  const handlePermissions = (e) => {
    console.log(e);
    setSelectedOptions(e);
  };

  return (
    <>
      <div className="container-fluid pb-3">
        <div className="d-flex justify-content-between">
          <h3>Create Group</h3>
        </div>
        <div className="form mt-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col">
                <div className="">
                  <label>
                    {" "}
                    Group Name
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Group Name"
                      {...register("group_name", {
                        required: "Required",
                      })}
                    />
                  </label>
                </div>
                {errors.group_name && (
                  <span className="text-danger smaller-text" role="alert">
                    {errors.group_name.message}
                  </span>
                )}
              </div>
              <div className="col">
                <div className="">
                  <label>
                    {" "}
                    Group Description
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Group Description"
                      {...register("description", {
                        required: "Required",
                      })}
                    />
                  </label>
                </div>
                {errors.description && (
                  <span className="text-danger smaller-text" role="alert">
                    {errors.description.message}
                  </span>
                )}
              </div>
            </div>
            <div className="row mt-3">
              <div className="mt-3">
                <label className="">
                  {" "}
                  Group Mail
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Group Mail"
                    {...register("email", {
                      required: "Required",
                    })}
                  />
                </label>
              </div>
              {errors.email && (
                <span className="text-danger smaller-text" role="alert">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="row mt-3">
              <div className="mt-3">
                <label className="w-75">
                  {" "}
                  Permissions
                  <Select
                    options={options}
                    isMulti
                    className="basic-multi-select"
                    onChange={handlePermissions}
                  />
                </label>
              </div>
            </div>
            <div className="row mt-5">
              <div className="mt-2 action-buttons">
                <Button variant="contained" type="submit">
                  Submit
                </Button>

                <Button
                  variant="contained"
                  type="button"
                  className="ms-3"
                  onClick={handleClose}
                >
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

export default CreateGroup;
