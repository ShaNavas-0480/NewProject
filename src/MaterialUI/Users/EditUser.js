import { Button, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { toast } from "react-toastify";
import APIService from "../../services/APIService";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import { useSelector } from "react-redux";

function EditUser({ handleCancel }) {
  const token = localStorage.getItem("token");
  const userReducer = useSelector((state) => state.userReducer);
  console.log(userReducer);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOptions, setSelectedOptions] = useState();
  const onSubmit = (data) => {
    console.log(data);
    let gid = selectedOptions.map((ids) => {
      return ids.value;
    });
    gid = gid.join(",");
    console.log(gid);

    data["gid"] = gid;
    data["status"] = 1;
    data["pass_exp_date"] = passwordExpiryDate;
    data["super_user"] = 1;
    data["landing_url"] = null;
    console.log(data);

    // APIService.post(
    //   process.env.REACT_APP_LOCAL_HOST_URL + "/UserSec/CreateUser",
    //   data,
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //       Authorization: token ? `Bearer ${token}` : "",
    //     },
    //   }
    // )
    //   .then((response) => {
    //     console.log(response);
    //     // handleTableDataRefresh();
    //     handleCancel();
    //     reset();
    //     toast.success("User created Successfully");
    //   })
    //   .catch((errors) => {
    //     console.log(errors);
    //     if (errors.response && errors.response.status === 440) {
    //       toast.warn("Session Timed Out");
    //       localStorage.clear();
    //       navigate("/");

    //       return;
    //     }
    //   });
  };
  useEffect(() => {
    listGroups();
  }, []);
  const listGroups = () => {
    APIService.post(
      process.env.REACT_APP_LOCAL_HOST_URL + "/UserSec/ListGroups",
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
          return { value: item.gid, label: item.group_name };
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

  const handleGroupSelect = (e) => {
    setSelectedOptions(e);
  };

  const [passwordExpiryDate, setPasswordExpiryDate] = useState(new Date());
  const handleDateSelect = (e) => {
    let passwordExpiry = moment(passwordExpiryDate).format("DDMMYY");
    console.log(passwordExpiry);

    setPasswordExpiryDate(e);
  };
  const handleDateChange = () => {};

  return (
    <>
      <Paper>
        <div className="container-fluid p-5">
          <div className="form mt-3 create-user">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col">
                  <div className="">
                    <label>
                      {" "}
                      User Name
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User Name"
                        {...register("user_name", {
                          required: "Required",
                        })}
                      />
                    </label>
                  </div>
                  {errors.user_name && (
                    <span className="text-danger smaller-text" role="alert">
                      {errors.user_name.message}
                    </span>
                  )}

                  <div className="mt-3">
                    <label>
                      {" "}
                      Tel Extension
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Tel Extension"
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
                  <div className="mt-3">
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
                <div className="col">
                  <div className="">
                    <label>
                      {" "}
                      Email
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email ID"
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
                      Telephone Number
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Telephone Number"
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
                      Password Expiry Date
                      <DatePicker
                        className="form-control"
                        selected={passwordExpiryDate}
                        dateFormat={"dd-mm-yyyy"}
                        onChange={handleDateSelect} //only when value has changed
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="row ">
                <div className="mt-3">
                  <label className="group-select">
                    {" "}
                    Select Group
                    <Select
                      options={options}
                      isMulti
                      className="basic-multi-select mt-2"
                      onChange={handleGroupSelect}
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
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Paper>
    </>
  );
}

export default EditUser;
