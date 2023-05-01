import React from "react";

function EditGroup() {
  return (
    <div>
      <div className="container-fluid pb-3">
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
                      {...register("groupID")}
                    />
                  </label>
                </div>

                <div className=" mt-3">
                  <label>
                    {" "}
                    Group Status ID
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Group Status ID"
                      {...register("groupStatusID")}
                    />
                  </label>
                </div>

                <div className="mt-3">
                  <label>
                    {" "}
                    Date Modified
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Department"
                      {...register("dateModified", {
                        required: "Required",
                      })}
                    />
                  </label>
                </div>
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
                <div className=" mt-3">
                  <label>
                    {" "}
                    Date Created
                    <input
                      type="number"
                      className="form-control"
                      placeholder="date created"
                      {...register("date_created")}
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
                      {...register("modified_by")}
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
                <div className=" mt-3">
                  <label>
                    {" "}
                    Created By
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Created By"
                      value={username}
                      disabled
                      {...register("created_by")}
                    />
                  </label>
                </div>
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
              <div className="mt-2 action-buttons">
                <Button variant="contained" type="submit">
                  Submit
                </Button>

                <Button variant="contained" type="button" className="ms-3">
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditGroup;
