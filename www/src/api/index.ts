import axios from "axios";

export { Endpoints } from "./endpoints";

export default axios.create({
  responseType: "json",
  withCredentials: true,
  baseURL: "/api",
});
