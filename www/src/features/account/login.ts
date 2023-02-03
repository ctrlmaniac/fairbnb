import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { loginFail, loginStart, loginSuccess } from "./slice";
import { Account } from "~/types";

export default function login(account: Account): AppThunk {
  return async (dispatch) => {
    dispatch(loginStart());

    api
      .post(`${Endpoints.ACCOUNT}/login`, account)
      .then((response) => {
        dispatch(loginSuccess());
        window.location.href = "/";
      })
      .catch((error) => {
        let message = "errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = error.message;
        }

        dispatch(loginFail(message));
      });
  };
}
