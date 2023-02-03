import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { registerSuccess, registerFail, registerStart } from "./slice";
import { Account } from "~/types";

export default function register(account: Account): AppThunk {
  return async (dispatch) => {
    dispatch(registerStart());

    api
      .post(Endpoints.ACCOUNT, account)
      .then((response) => {
        dispatch(registerSuccess());
        window.location.href = "/";
      })
      .catch((error) => {
        let message = "errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = error.message;
        }

        dispatch(registerFail(message));
      });
  };
}
