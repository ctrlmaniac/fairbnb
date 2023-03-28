import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginSuccessResponse {
  email: string;
  accessToken: string;
}

interface State {
  response?: string;
  login: boolean;
  loginError: boolean;
  registering: boolean;
  registerError: boolean;
}

const initialState: State = {
  response: undefined,
  login: false,
  loginError: false,
  registering: false,
  registerError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    unsetResponse: (state) => {
      state.response = undefined;
    },
    loginStart: (state) => {
      state.login = true;
      state.response = undefined;
      state.loginError = false;
    },
    loginSuccess: (state, action: PayloadAction<LoginSuccessResponse>) => {
      state.response = "Utente autenticato";
      state.loginError = false;
      state.login = false;

      window.localStorage.setItem("token", JSON.stringify(action.payload));
    },
    loginFail: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.loginError = true;
      state.login = false;
    },
    registerStart: (state) => {
      state.registering = true;
      state.response = undefined;
      state.registerError = false;
    },
    registerSuccess: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.registerError = false;
      state.registering = false;
    },
    registerFail: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.registerError = true;
      state.registering = false;
    },
  },
});

export const {
  unsetResponse,
  loginStart,
  loginSuccess,
  loginFail,
  registerFail,
  registerStart,
  registerSuccess,
} = authSlice.actions;

export default authSlice.reducer;