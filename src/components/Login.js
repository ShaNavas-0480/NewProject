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
      .post("/MadaSim/UserSec/LoginWithCredentials", {
        Username: loginCredentials.username,
        Password: loginCredentials.password,
      })
      .then((response) => {
        console.log(response);
        let sampleResponse = [
          {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlRlc3RVc2VyIiwibmJmIjoxNjc5MTI5NTQ0LCJleHAiOjE2NzkxMzEzNDQsImlhdCI6MTY3OTEyOTU0NH0.F1eYuuCZQcc9713lpvhxMgCuDywLIKSPr5DMgnSddns",
          },
          {
            pid: 1,
            description: "Listing the users",
            url: "/MadaSim/UserSec/ListUserProfiles",
          },
          {
            pid: 2,
            description: "Test Execution ",
            url: "MadaSim/MadaMsgBuilder/ExecuteTest",
          },
          {
            pid: 3,
            description: "Echo Msg Testing",
            url: "MadaSim/MadaMsgBuilder/TestEchoMsg",
          },
          {
            pid: 4,
            description: "Login with User name Pass",
            url: "MadaSim/MadaMsgBuilder/LoginWithCredentials",
          },
        ];
        let authToken = sampleResponse[0].token;
        localStorage.setItem("authToken", authToken);

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
