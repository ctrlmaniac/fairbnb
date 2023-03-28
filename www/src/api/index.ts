import axios from "axios";
export { Endpoints } from "./endpoints";

export default axios.create({
  responseType: "json",
  baseURL: "http://localhost:8080",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});
