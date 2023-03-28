import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { loginFail, loginStart, loginSuccess } from "./slice";

interface Payload {
  email: string;
  password: string;
}

export default function login(payload: Payload): AppThunk {
  return async (dispatch) => {
    dispatch(loginStart());

    api
      .post(`${Endpoints.AUTH}/login`, payload)
      .then((response) => {
        dispatch(loginSuccess(response.data));
      })
      .catch((error) => {
        let message = "Errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = "Errore";
        }

        dispatch(loginFail(message));
      });
  };
}
