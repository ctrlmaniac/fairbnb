import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { postFail, postStart, postSuccess } from "./slice";
import Apartment from "~/types/Apartment";

export default function post(apt: Apartment): AppThunk {
  return async (dispatch) => {
    dispatch(postStart());

    api
      .post(`${Endpoints.APARTMENTS}`, apt)
      .then((response) => {
        dispatch(postSuccess(response.data));
      })
      .catch((error) => {
        let message = "Errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = "Errore";
        }

        dispatch(postFail(message));
      });
  };
}
