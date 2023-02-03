import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { getSuccess, getFail } from "./slice";

export default function get(): AppThunk {
  return async (dispatch) => {
    api
      .get(Endpoints.ACCOUNT)
      .then((response) => {
        dispatch(getSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getFail(error.message));
      });
  };
}
