import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Account from "~/types/Account";

interface State {
  response?: string;
  principal?: Account;
  gettingPrincipal: boolean;
  getPrincipalError: boolean;
}

const initialState: State = {
  response: undefined,
  principal: undefined,
  getPrincipalError: false,
  gettingPrincipal: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    unsetResponse: (state) => {
      state.response = undefined;
    },
    unsetPrincipal: (state) => {
      state.principal = undefined;
    },
    getPrincipalStart: (state) => {
      state.gettingPrincipal = true;
      state.getPrincipalError = false;
      state.principal = undefined;
    },
    getPrincipalSuccess: (state, action: PayloadAction<Account>) => {
      state.principal = action.payload;
      state.getPrincipalError = false;
      state.gettingPrincipal = false;
    },
    getPrincipalFail: (state, action: PayloadAction<string>) => {
      state.principal = undefined;
      state.getPrincipalError = true;
      state.response = action.payload;
      state.gettingPrincipal = false;
    },
  },
});

export const {
  unsetResponse,
  unsetPrincipal,
  getPrincipalFail,
  getPrincipalStart,
  getPrincipalSuccess,
} = accountSlice.actions;

export default accountSlice.reducer;
