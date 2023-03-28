import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { registerFail, registerStart, registerSuccess } from "./slice";
import login from "./login";

interface Payload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export default function register(payload: Payload): AppThunk {
  return async (dispatch) => {
    dispatch(registerStart());

    api
      .post(`${Endpoints.AUTH}/register`, payload)
      .then((response) => {
        dispatch(registerSuccess(response.data));

        const account = { email: payload.email, password: payload.password };
        dispatch(login(account));
      })
      .catch((error) => {
        let message = "Errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = "Errore";
        }

        dispatch(registerFail(message));
      });
  };
}
