import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import APIService from "../../services/APIService";
function Users() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    console.log(values);
    const token = localStorage.getItem("token");

    APIService.post(
      process.env.REACT_APP_LOCAL_HOST_URL + "/UserSec/CreateUser",
      { values },
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
          <form onSubmit={handleSubmit(onSubmit)}>
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
                      {...register("firstName", {
                        required: "Required",
                      })}
                    />
                  </label>
                </div>
                {errors.firstName && (
                  <span className="text-danger smaller-text" role="alert">
                    {errors.firstName.message}
                  </span>
                )}
                <div className=" mt-3">
                  <label>
                    {" "}
                    Email
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email"
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
                <div className="mt-3">
                  <label>
                    {" "}
                    Department
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Department"
                      {...register("department", {
                        required: "Required",
                      })}
                    />
                  </label>
                </div>
                {errors.department && (
                  <span className="text-danger smaller-text" role="alert">
                    {errors.department.message}
                  </span>
                )}
                <div className="mt-3">
                  <label>
                    {" "}
                    User ID
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Department"
                      {...register("user_id", {
                        required: "Required",
                      })}
                    />
                  </label>
                </div>
                {errors.user_id && (
                  <span className="text-danger smaller-text" role="alert">
                    {errors.user_id.message}
                  </span>
                )}
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
                      {...register("middleName")}
                    />
                  </label>
                </div>
                <div className=" mt-3">
                  <label>
                    {" "}
                    Phone Number
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Phone Number"
                      {...register("user_tel_no", {
                        required: "Required",
                      })}
                    />
                  </label>
                </div>
                {errors.user_tel_no && (
                  <span className="text-danger smaller-text" role="alert">
                    {errors.user_tel_no.message}
                  </span>
                )}
                <div className="mt-3">
                  <label>
                    {" "}
                    Section
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Section"
                      {...register("section")}
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
                      {...register("user_group", {
                        required: "Required",
                      })}
                    />
                  </label>
                </div>
                {errors.user_group && (
                  <span className="text-danger smaller-text" role="alert">
                    {errors.user_group.message}
                  </span>
                )}
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
                      {...register("lastName", {
                        required: "Required",
                      })}
                    />
                  </label>
                </div>
                {errors.lastName && (
                  <span className="text-danger smaller-text" role="alert">
                    {errors.lastName.message}
                  </span>
                )}
                <div className=" mt-3">
                  <label>
                    {" "}
                    Extension
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Extension"
                      {...register("tel_exten", {
                        required: "Required",
                      })}
                    />
                  </label>
                </div>
                {errors.tel_exten && (
                  <span className="text-danger smaller-text" role="alert">
                    {errors.tel_exten.message}
                  </span>
                )}
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
                    {...register("password", {
                      required: "Required",
                    })}
                  />
                </label>
              </div>
              {errors.password && (
                <span className="text-danger smaller-text" role="alert">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="row mt-3">
              <div className="mt-2 action-buttons">
                <Button type="submit">Add</Button>
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

export default Users;
