import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import apiService from "../services/APIService";
import { Buffer } from "buffer";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoaderSpinner from "./LoaderSpinner";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const [showSpinner, setShowSpinner] = useState(false);
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const onSubmit = (loginCredentials) => {
    setShowSpinner(true);
    console.log(loginCredentials);
    const token = `${loginCredentials.username}:${loginCredentials.password}`;
    const encodedToken = Buffer.from(token).toString("base64");
    const headers = { Authorization: "Basic " + encodedToken };

    // apiService
    //   .post(
    //     process.env.REACT_APP_LOCAL_HOST_URL + "/UserSec/LoginWithCredentials",
    //     {},
    //     {
    //       headers: headers,
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     let token = response.data[0].token;
    //     localStorage.setItem("token", token);
    //     localStorage.setItem("username", loginCredentials.username);
    //     setShowSpinner(false);
    //   navigate("/groups");

    //   })
    //   .catch((errors) => {
    //     console.log(errors);
    //     setShowSpinner(false);
    //     toast.error("Username/password Incorrect");
    //   });
    navigate("/groups");
  };

  return (
    <div>
      <div className=" login-container ">
        <div className="">
          <Card className="shadow login">
            <div className="d-flex justify-content-center p-4">
              <h3>Login</h3>
            </div>
            <Card.Body>
              <div className="">
                <div className="d-flex justify-content-center">
                  <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="">
                        <label>
                          {" "}
                          Username
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter username"
                            name="username"
                            {...register("username", {
                              required: "Username is required",
                            })}
                          />
                        </label>
                      </div>
                      {errors.username && (
                        <span className="text-danger smaller-text" role="alert">
                          {errors.username.message}
                        </span>
                      )}
                      <div className="mt-3">
                        <label className="">
                          {" "}
                          Password
                          <div className="d-flex">
                            <input
                              type={passwordType}
                              className="form-control"
                              placeholder="Enter password"
                              {...register("password", {
                                required: "Password is required",
                              })}
                            />
                            <div className="input-group-btn">
                              <span
                                className="position-absolute eye-icon"
                                onClick={togglePassword}
                              >
                                {passwordType === "password" ? (
                                  <FaEyeSlash />
                                ) : (
                                  <FaEye />
                                )}
                              </span>
                            </div>
                          </div>
                        </label>
                      </div>
                      {errors.password && (
                        <span className="text-danger smaller-text" role="alert">
                          {errors.password.message}
                        </span>
                      )}
                      <div className="mt-4 d-flex justify-content-center">
                        <Button type="submit">
                          {showSpinner ? (
                            <LoaderSpinner loaderClass="loginLoader" />
                          ) : (
                            "Sign In"
                          )}
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
                <br />
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
