import axios from "axios";
import { isEmpty } from "lodash";
export { Endpoints } from "./endpoints";

export default axios.create({
  responseType: "json",
  baseURL: "http://localhost:8080",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${JSON.parse(
      window.localStorage.getItem("token")!
    )}`,
  },
});
