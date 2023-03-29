import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import {
  getPrincipalFail,
  getPrincipalStart,
  getPrincipalSuccess,
} from "./slice";

export default function getPrincipal(token: string): AppThunk {
  return async (dispatch) => {
    dispatch(getPrincipalStart());

    api
      .post(`${Endpoints.ACCOUNT}/principal`, { token: token })
      .then((response) => {
        dispatch(getPrincipalSuccess(response.data));
      })
      .catch((error) => {
        let message = "Errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = "Errore";
        }

        dispatch(getPrincipalFail(message));
      });
  };
}
