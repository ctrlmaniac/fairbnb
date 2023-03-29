import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { listFail, listStart, listSuccess } from "./slice";

export default function list(): AppThunk {
  return async (dispatch) => {
    dispatch(listStart());

    api
      .get(`${Endpoints.APARTMENTS}`)
      .then((response) => {
        dispatch(listSuccess(response.data));
      })
      .catch((error) => {
        let message = "Errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = "Errore";
        }

        dispatch(listFail(message));
      });
  };
}
