import axios from "axios";
const token = localStorage.getItem("token");
console.log({ token });
const APIService = axios.create({
  baseURL: process.env.REACT_APP_LOCAL_HOST_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default APIService;
