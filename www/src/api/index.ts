import axios from "axios";

export default axios.create({
  responseType: "json",
  withCredentials: true,
  baseURL: "http://localhost:8080",
});
