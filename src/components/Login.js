import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import apiService from "../services/APIService";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (loginCredentials) => {
    console.log(loginCredentials);

    apiService
      .post(
        "/UserSec/LoginWithCredentials",
        {},
        {
          auth: {
            Username: loginCredentials.username,
            Password: loginCredentials.password,
          },
        }
      )
      .then((response) => {
        console.log(response);

        // let authToken = sampleResponse[0].token;
        // localStorage.setItem("authToken", authToken);

        navigate("/home");
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return (
    <div>
      <div className="container login-container ">
        <div className="">
          <Card style={{ width: "25rem" }} className="shadow">
            <div className="d-flex justify-content-center p-4">
              <h4>Login</h4>
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
                        <label>
                          {" "}
                          Password
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            {...register("password", {
                              required: "Password is required",
                            })}
                          />
                        </label>
                      </div>
                      {errors.password && (
                        <span className="text-danger smaller-text" role="alert">
                          {errors.password.message}
                        </span>
                      )}
                      <div className="mt-4 d-flex justify-content-center">
                        <Button type="submit">Sign In</Button>
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
