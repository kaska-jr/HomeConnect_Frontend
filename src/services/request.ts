import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:5005/api",
});

export default request;
