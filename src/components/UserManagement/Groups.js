import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Groups() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {};
  return (
    <>
      {" "}
      <div className="groups container-fluid">
        <div className="d-flex justify-content-between">
          <h3>Groups</h3>
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
                    Group ID
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Group ID"
                      {...register("groupID", {
                        required: "Required",
                      })}
                    />
                  </label>
                </div>
                {errors.groupID && (
                  <span className="text-danger smaller-text" role="alert">
                    {errors.groupID.message}
                  </span>
                )}
                <div className=" mt-3">
                  <label>
                    {" "}
                    Group Status ID
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Group Status ID"
                      {...register("groupStatusID", {
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
                    Date Modified
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
              </div>
              <div className="col">
                <div className="">
                  <label>
                    {" "}
                    Group Name
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Group Name"
                      {...register("groupName")}
                    />
                  </label>
                </div>
                <div className=" mt-3">
                  <label>
                    {" "}
                    Date Created
                    <input
                      type="number"
                      className="form-control"
                      placeholder="date created"
                      {...register("date_created", {
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
                    Modified By
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Section"
                      {...register("section")}
                    />
                  </label>
                </div>
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
                      {...register("groupDescription", {
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
                    Created By
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Created By"
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
                <label className="w-75">
                  {" "}
                  Group Mail
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Group Mail"
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

export default Groups;
