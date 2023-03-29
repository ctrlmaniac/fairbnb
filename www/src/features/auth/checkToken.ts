import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import {
  checkTokenValidityFail,
  checkTokenValidityStart,
  checkTokenValiditySuccess,
} from "./slice";

export default function checkToken(token: string): AppThunk {
  return async (dispatch) => {
    dispatch(checkTokenValidityStart());
    api
      .post(`${Endpoints.AUTH}`, { token: token })
      .then((response) => {
        dispatch(checkTokenValiditySuccess(response.data));
      })
      .catch((error) => {
        console.error(error);

        dispatch(checkTokenValidityFail(false));
      });
  };
}
